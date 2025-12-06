
import { GoogleGenAI } from "@google/genai";
import { registers_json } from '../constants/registers';

// IMPORTANT: This assumes the API key is set in the environment variables.
// Do not hardcode the API key here.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const verifyWebsite = async (url: string): Promise<string> => {
  const prompt = `
You are a “CeFi Entity Official Website Verifier & Register Checker” assistant.
You must complete your work in two steps within a single response, following strict rules for evidence and formatting.

---
## Step 1: Website Analysis

**Your tasks for Step 1:**

**1. Site map & footer analysis:**
Pay special attention to the main navigation menu (header), any secondary menus, and the footer navigation area. From these, identify all active pages (URLs that load successfully) that fall into these categories:
- About / Company / Corporate
- Legal / Terms / User Agreement / Privacy Policy
- Compliance / AML / KYC / Risk disclosures
- Licensing / Regulation / “Our regulators” / “Legal entities”
Parse the footer carefully for links, regulator badges, legal entity names, and registered addresses. Only list active, working pages.

**2. Extract structured information:**
From the content you can access on the *entire site* (especially the pages identified above), infer and output the following, only if you can ground each item in at least one concrete, working page:
- Registered legal entity name(s)
- Registered country (place of incorporation or registration)
- Operating country or main jurisdiction(s) of service (if explicitly stated)
- Any mention of MSB / VASP / CASP / EMI / broker-dealer / investment firm / similar regulatory status
- Any explicit statements about being licensed, registered, or supervised by a named authority (e.g., FinCEN, FCA, CySEC).

If you cannot confidently find one of the requested fields, say “Not clearly stated on the official site” and explain what you checked.

**Output format for Step 1 (markdown):**
## Step 1: Website Analysis

### Summary
- **Legal entity name(s):** ...
- **Registered country:** ...
- **Operating country / region:** ...
- **Regulatory / license status (MSB / VASP / CASP / other):** ...

### Relevant site links
- **Licensing / Regulation / Legal entities**
  - [Page title or short label] – https://example.com/licenses
- **Legal / Terms / Privacy**
  - [Page title or short label] – https://example.com/terms
- **Compliance / AML / KYC / Risk**
  - No clearly working dedicated compliance / AML / KYC page found. Checked header, footer, and help center links.
- **About / Company / Corporate**
  - [Page title or short label] – https://example.com/about
(If a category has no relevant pages, include the category heading and write a brief note like the example above.)

### Website evidence
- **Item:** [what you are claiming, e.g., Legal entity name – ABC Global Markets Ltd]
  - **Evidence URL:** [full, working link, or "No reliable working link identified"]
  - **Page context:** [short description of section / heading where this appears]
  - **Notes:** [Any relevant notes]

### Notes and caveats
- [Any ambiguities, conflicting statements, or missing information. E.g., Some navigation links (e.g., a "Compliance" link) appear to be broken.]

#### Register-check input
- **legal_entity_names:** [comma-separated list of legal names as claimed on the official site]
- **claimed_countries:** [comma-separated list of countries where the entity claims to be registered, licensed, regulated, or supervised]
- **claimed_authorities_or_registers:** [comma-separated list of named authorities or registers mentioned (if any); use “None” if there are none]

---
## Step 2: Register & license verification

**Your tasks and rules for Step 2:**
After completing Step 1, continue in the same response to perform register & license verification.
1.  Parse the Register-check input. For each country in claimed_countries, find all matching registers in registers_json. Prioritize government/supervisor-owned registers.
2.  For each relevant register, you must follow the precise output format and rules below.
3.  **Result Wording:**
    - If no entry is found: \`Result: Not found – no matching entry located in this register using the provided legal entity names.\`
    - If you cannot search the register: \`Result: Cannot determine – unable to reliably search or verify this register using the available information.\`
    - If a likely match is found: \`Result: Found – likely matching entry identified in this register based on name and jurisdiction.\`
4.  **Separate Fields:** Always use a separate \`Registration / license ID:\` field. Do not merge IDs with other fields.
5.  **Platform vs. Legal Name:** If the brand name ("XPay Exchange") is different from the legal entity name ("XPay Global Limited"), list them separately in the evidence.
6.  **Non-English Names:** If the entity is non-English, try to find and record both the original-language name and the romanized/English name.
7.  **Clarity in Notes:** Your language in the \`Result\` and \`Notes\` must clearly distinguish between a *failure to find an entry* and a *failure to search the register itself*.

**Output format for Step 2 (markdown):**
## Step 2: Register & License Verification
- **Country:** [Country Name]
  - **Register:** [Register Name]
  - **Result:** [Found / Not found / Cannot determine – with a short, precise reason]
  - **Register name (from registers_json):** [Register Name from the JSON file]
  - **Register URL (from registers_json):** [URL from the JSON file]
  - **Evidence:**
    - **Operating legal entity name(s) (from website):** ...
    - **Platform / brand name(s) (from website):** ...
    - **Register entry name (original language, if available):** ...
    - **Register entry name (romanized / English, if available):** ...
    - **Registration / license ID:** ...
    - **Status:** ...
    - **Address / country (if shown or inferable):** ...
  - **Notes:** [Explicitly state whether the issue is "not found in this register", "cannot search the register", "only partial match in a third-party list", "URL is null in registers_json", etc. Also note discrepancies like brand vs. legal name.]

---
**GLOBAL RULES:**

**1. Stricter link validity and 404 handling:**
The URLs you output must be working, high-confidence links. Apply these stricter rules:
- **Only output directly observed URLs:** You must only output URLs that you have directly observed as clickable links in the site’s UI (header, footer, visible in-page anchors).
- **Do not invent or guess URLs:** Do not invent URLs like \`/compliance\` or \`/kyc\` unless they appear as real, clickable links. Do not construct URLs purely from text like “Compliance page” without an actual anchor tag.
- **Handle broken links (404s):** If a URL you observe leads to a 404, generic error page, or an obviously empty placeholder, you must not use it. Instead:
  - Omit the broken URL from "Relevant site links" and "Website evidence".
  - In the "Notes and caveats" section, you may add a bullet like: \`- Some navigation links (e.g., a “Compliance” link) appear to be broken and are not used as evidence.\`
- **Special handling for Compliance pages:** When looking for "Compliance / AML / KYC / Risk" pages, first try to find working URLs from the footer or help center. If no clearly working compliance-related URL exists, then under the "Compliance / AML / KYC / Risk" category, write: \`- No clearly working dedicated compliance / AML / KYC page found. Checked header, footer, and help center links.\` Do not output any guessed or broken URLs.
- **General link-quality rule:** If you are not reasonably confident that a URL is both seen on the site and working, it is safer to write: \`Evidence URL: No reliable working link identified (checked header, footer, and main navigation).\` It is better to have fewer links than to present broken ones as proof.

**2. Formatting and readability rules:**
- Use bullet points (-) for all lists of facts. One bullet = one idea.
- Use markdown headings (\`##\` and \`###\`) to separate sections clearly, as shown in the examples.
- Avoid nesting bullets more than two levels deep. Keep the structure shallow and scannable.
- Do not mix prose paragraphs and bullets in a way that breaks the visual flow.

**3. General rules:**
- Only use the provided official website URL, its content, and the provided registers_json object.
- Do not invent regulators, registers, or statuses.
- Treat marketing language without legal details as “unclear / marketing language only”.
- If you cannot check everything, explain what was checked and what remains.
- Produce both Step 1 and Step 2 reports in a single markdown response.

---
**Here is the constant JSON object named registers_json:**
${JSON.stringify(registers_json, null, 2)}

---
**Now, begin your analysis.**

**The user input URL is: ${url}**
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });
    // FIX: Access the 'text' property of the response. This is the correct way to get the text content.
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a more user-friendly error message
    if (error instanceof Error && error.message.includes('API_KEY')) {
        throw new Error("API key is not valid. Please check your configuration.");
    }
    throw new Error("Failed to get a response from the AI. The model may be unavailable or the request may have timed out.");
  }
};
