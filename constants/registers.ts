
import type { RegistersData, RawRegistersData, Region } from '../types';

// Raw data from VASP_Registers.json
const rawData: RawRegistersData = {
  "metadata": {
    "name": "Government & VASP Registers - Licenses & Incorporation",
    "version": "1.0",
    "last_updated": "2025-12-06",
    "source": [
      "PDF Reference Document",
      "DOCX VASP Sites List"
    ],
    "total_entries": 61,
    "description": "Comprehensive list of government and supervisory registers for verifying VASP licenses, registrations, and legal status across multiple jurisdictions",
    "use_case": "Entity verification, compliance checking, KYC/AML procedures, OSINT research"
  },
  "registers": [
    {
      "region": "North America",
      "country_authority": "FINTRAC – MSB Registry",
      "jurisdiction": "Canada",
      "description": "Registered Money Services Businesses (MSBs), with basic business details and registration status",
      "url": "https://www10.fintrac-canafe.gc.ca/msb-esm/search-cherche-eng",
      "entity_type": "MSB",
      "focus": ["AML/CFT", "Money Services"]
    },
    {
      "region": "North America",
      "country_authority": "FinCEN – MSB Registrant Search",
      "jurisdiction": "United States (federal)",
      "description": "Registered MSBs under FinCEN, including business name, location, and registration number",
      "url": "https://www.fincen.gov/msb-registrant-search",
      "entity_type": "MSB",
      "focus": ["AML/CFT", "Money Services"]
    },
    {
      "region": "North America",
      "country_authority": "NYDFS – Virtual Currency Business Licensing (BitLicense)",
      "jurisdiction": "United States (New York State)",
      "description": "Virtual currency business licenses and limited purpose trust companies approved by NYDFS",
      "url": "https://www.dfs.ny.gov/virtual_currency_businesses",
      "entity_type": "VASP",
      "focus": ["Crypto", "Licensing"]
    },
    {
      "region": "Europe",
      "country_authority": "MFSA – Financial Services Register",
      "jurisdiction": "Malta",
      "description": "Licensed financial services entities, including virtual financial asset / crypto service providers",
      "url": "https://www.mfsa.mt/financial-services-register/",
      "entity_type": "VASP",
      "focus": ["Crypto", "Financial Services"]
    },
    {
      "region": "Europe",
      "country_authority": "GFSC – Regulated Entities Register",
      "jurisdiction": "Gibraltar",
      "description": "Licensed firms, including DLT providers and virtual asset services",
      "url": "https://www.fsc.gi/regulated-entities",
      "entity_type": "VASP",
      "focus": ["DLT", "Virtual Assets"]
    },
    {
      "region": "Europe",
      "country_authority": "FIU Estonia",
      "jurisdiction": "Estonia",
      "description": "Supervision and registration of obliged entities; historically included virtual currency service providers",
      "url": "https://fiu.ee/en",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Europe",
      "country_authority": "OAM – Virtual Asset Operators Register",
      "jurisdiction": "Italy",
      "description": "Register of virtual currency and digital wallet service providers (Operatore Valute Virtuali)",
      "url": "https://www.organismo-am.it",
      "entity_type": "VASP",
      "focus": ["Crypto", "Digital Wallets"]
    },
    {
      "region": "Europe",
      "country_authority": "VASP Register (AML authority)",
      "jurisdiction": "Poland",
      "description": "Register of virtual asset service providers for AML/CFT purposes",
      "url": "URL to be confirmed",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Europe",
      "country_authority": "VASP Register",
      "jurisdiction": "Czech Republic",
      "description": "Register of virtual asset service providers under Czech AML law",
      "url": "URL to be confirmed",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Europe",
      "country_authority": "Registrų centras – JAR",
      "jurisdiction": "Lithuania",
      "description": "Company and activity register; used to confirm legal entities that may act as VASPs",
      "url": "https://www.registrucentras.lt/jar_en/",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Europe / Central Asia",
      "country_authority": "AFSA Public Register (AIFC)",
      "jurisdiction": "Kazakhstan (Astana IFC)",
      "description": "Registered entities and licensed firms within AIFC, including crypto‑related services",
      "url": "https://publicreg.myafsa.com",
      "entity_type": "VASP",
      "focus": ["Crypto", "Financial Services"]
    },
    {
      "region": "Europe / Caucasus",
      "country_authority": "VASP List",
      "jurisdiction": "Georgia",
      "description": "List of registered or licensed virtual asset service providers published by the authority",
      "url": "URL to be confirmed",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe / Offshore",
      "country_authority": "CIMA – Regulated Entities Search",
      "jurisdiction": "Cayman Islands",
      "description": "Entities currently registered or licensed with CIMA, including some virtual asset service providers",
      "url": "https://www.cima.ky/regulated-entities-search",
      "entity_type": "VASP",
      "focus": ["Crypto", "Financial Services"]
    },
    {
      "region": "Europe",
      "country_authority": "CySEC – CASP Register",
      "jurisdiction": "Cyprus",
      "description": "Crypto‑Asset Services Providers (CASPs) registered with the Cyprus Securities and Exchange Commission",
      "url": "https://www.cysec.gov.cy/en-GB/entities/casps/",
      "entity_type": "CASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe",
      "country_authority": "Central Bank of Ireland – VASP Register",
      "jurisdiction": "Ireland",
      "description": "Virtual Asset Service Providers registered for AML/CFT purposes with the Central Bank of Ireland",
      "url": "https://registers.centralbank.ie",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Europe",
      "country_authority": "DNB – Public Register (Crypto‑Asset Service Providers)",
      "jurisdiction": "Netherlands",
      "description": "Crypto‑asset service providers registered with De Nederlandsche Bank (DNB)",
      "url": "https://www.dnb.nl/en/public-register/",
      "entity_type": "CASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe",
      "country_authority": "FCA – Registered Cryptoasset Firms",
      "jurisdiction": "United Kingdom",
      "description": "Firms registered with the Financial Conduct Authority for cryptoasset activities (AML registration)",
      "url": "https://register.fca.org.uk/s/firm-search",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "SFC – Public Register / VATPs",
      "jurisdiction": "Hong Kong",
      "description": "Licensed intermediaries and authorized virtual asset trading platforms",
      "url": "https://www.sfc.hk/en/regulated-activities/public-register-of-licensed-persons-and-registered-institutions",
      "entity_type": "VATP",
      "focus": ["Crypto", "Trading Platforms"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "MAS – Financial Institutions Directory",
      "jurisdiction": "Singapore",
      "description": "Licensed and regulated financial institutions, including DPT (Digital Payment Token) service providers",
      "url": "https://eservices.mas.gov.sg/fid",
      "entity_type": "VASP",
      "focus": ["Crypto", "Payment Tokens"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "AUSTRAC – Digital Currency Exchange Register",
      "jurisdiction": "Australia",
      "description": "Registered digital currency exchange providers under AUSTRAC",
      "url": "https://www.austrac.gov.au/business/digital-currency-exchange-providers",
      "entity_type": "DCE",
      "focus": ["Crypto", "Exchanges"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "VARA – Public Register",
      "jurisdiction": "Dubai (UAE)",
      "description": "Registered and licensed virtual asset service providers in Dubai",
      "url": "https://www.vara.ae",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "FIU – VASP‑related Notices",
      "jurisdiction": "South Korea",
      "description": "FIU notices that may include lists or requirements for registered VASPs",
      "url": "URL to be confirmed",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Securities Commission – Digital Asset Exchanges",
      "jurisdiction": "Malaysia",
      "description": "Recognised market operators / registered digital asset exchanges",
      "url": "https://www.sc.com.my/development/digital/digital-assets",
      "entity_type": "DCE",
      "focus": ["Crypto", "Exchanges"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "SEC – Digital Asset Business Operators",
      "jurisdiction": "Thailand",
      "description": "List of licensed digital asset exchanges, brokers, and dealers",
      "url": "https://www.sec.or.th",
      "entity_type": "VASP",
      "focus": ["Crypto", "Trading"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Financial / AML Registers",
      "jurisdiction": "Taiwan",
      "description": "Likely a financial or AML register used to confirm licensed or supervised entities",
      "url": "https://www.sfb.gov.tw/ch/home.jsp?id=1054&parentpath=0,8,1053",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Americas & Offshore",
      "country_authority": "SVG Financial Services Authority",
      "jurisdiction": "St. Vincent & the Grenadines",
      "description": "Registered entities under the FSA, including many FX/derivatives/crypto‑related brokers",
      "url": "https://svgfsa.com",
      "entity_type": "VASP",
      "focus": ["Crypto", "Brokers"]
    },
    {
      "region": "Americas & Offshore",
      "country_authority": "BVI Financial Services Commission",
      "jurisdiction": "British Virgin Islands",
      "description": "Licensed and registered entities, including investment and possible virtual asset structures",
      "url": "https://www.bvifsc.vg",
      "entity_type": "Financial Entity",
      "focus": ["Investment", "Virtual Assets"]
    },
    {
      "region": "Americas & Offshore",
      "country_authority": "CNAD – Digital Assets Service Provider Register",
      "jurisdiction": "El Salvador",
      "description": "Registered Digital Asset Service Providers (DASPs) under El Salvador's digital asset framework",
      "url": "Official CNAD DASP URL to be confirmed",
      "entity_type": "DASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Africa",
      "country_authority": "Seychelles Register",
      "jurisdiction": "Seychelles",
      "description": "VASP and financial entity regulatory register",
      "url": "https://fsaseychelles.sc/regulated-entities/capital-markets#tab-securities-dealer",
      "entity_type": "VASP",
      "focus": ["Crypto", "Financial Services"]
    },
    {
      "region": "Europe",
      "country_authority": "Spain Register",
      "jurisdiction": "Spain",
      "description": "Professional financial entities and crypto asset service providers",
      "url": "https://www.bde.es/wbe/en/entidades-profesionales/operativa-gestiones/",
      "entity_type": "VASP",
      "focus": ["Crypto", "Financial Services"]
    },
    {
      "region": "Europe / Middle East",
      "country_authority": "Turkey Register",
      "jurisdiction": "Turkey",
      "description": "Active virtual asset service providers register",
      "url": "https://spk.gov.tr/kurumlar/kripto-varlik-hizmet-saglayicilar/faaliyette-bulunanlar-listesi",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe",
      "country_authority": "Bulgaria Register",
      "jurisdiction": "Bulgaria",
      "description": "VASP and crypto service providers list",
      "url": "https://thebanks.eu/list-of-vasps/Bulgaria",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Africa",
      "country_authority": "Botswana Register",
      "jurisdiction": "Botswana",
      "description": "VASP and crypto service providers register",
      "url": "https://thebanks.eu/list-of-vasps/Botswana",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe",
      "country_authority": "France Register",
      "jurisdiction": "France",
      "description": "Authorised PSAN (Prestataires de Services sur Actifs Numériques) providers",
      "url": "https://www.amf-france.org/en/warnings/white-lists?conditions%5Bcategorie%5D=612&conditions%5Bpsan%5D%5B1%5D=1&page=4",
      "entity_type": "PSAN",
      "focus": ["Crypto"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Japan Register",
      "jurisdiction": "Japan",
      "description": "Licensed financial instruments firms and crypto exchange operators",
      "url": "https://www.fsa.go.jp/en/regulated/licensed/",
      "entity_type": "VASP",
      "focus": ["Crypto", "Exchanges"]
    },
    {
      "region": "Africa",
      "country_authority": "South Africa Register",
      "jurisdiction": "South Africa",
      "description": "FAIS (Financial Advisory and Intermediary Services) licensed entities",
      "url": "https://www.fsca.co.za/Regulated%20Entities/Pages/FAIS-Verifications.aspx",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Americas",
      "country_authority": "Panama Register",
      "jurisdiction": "Panama",
      "description": "Money service business authorization register",
      "url": "https://www.superbancos.gob.pa/en/authorizations/money-service-businesses",
      "entity_type": "MSB",
      "focus": ["Money Services"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Indonesia Register",
      "jurisdiction": "Indonesia",
      "description": "Licensed crypto asset traders register",
      "url": "https://bappebti.go.id/pedagang_aset_kripto",
      "entity_type": "VASP",
      "focus": ["Crypto", "Trading"]
    },
    {
      "region": "Europe",
      "country_authority": "Norway Register",
      "jurisdiction": "Norway",
      "description": "Finanstilsynet financial services register",
      "url": "https://www.finanstilsynet.no/en/finanstilsynets-registry/",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Other",
      "country_authority": "Isle of Man? Register",
      "jurisdiction": "Isle of Man?",
      "description": "VASP and crypto service provider register",
      "url": "https://publicreg.myafsa.com/dasp/",
      "entity_type": "DASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "India Register",
      "jurisdiction": "India",
      "description": "Crypto asset service provider notification and status",
      "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2173758&reg=3&lang=2",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Americas",
      "country_authority": "Brazil Register",
      "jurisdiction": "Brazil",
      "description": "Central bank financial institution register",
      "url": "https://www.bcb.gov.br/meubc/encontreinstituicao",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Europe",
      "country_authority": "UK Register",
      "jurisdiction": "UK",
      "description": "FCA registered cryptoasset firms for AML purposes",
      "url": "https://register.fca.org.uk/s/",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Mongolia Register",
      "jurisdiction": "Mongolia",
      "description": "Financial intelligence unit VASP register",
      "url": "https://fiu.mongolbank.mn/en/p/8200",
      "entity_type": "VASP",
      "focus": ["Crypto", "AML/CFT"]
    },
    {
      "region": "Europe",
      "country_authority": "Finland Register",
      "jurisdiction": "Finland",
      "description": "Finanssivalvonta supervised financial entities",
      "url": "https://www.finanssivalvonta.fi/en/registers/supervised-entities/",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Philippines Register",
      "jurisdiction": "Philippines",
      "description": "SEC digital asset and securities exchange applications",
      "url": "https://secexpress.ph/application-form",
      "entity_type": "VASP",
      "focus": ["Crypto", "Exchanges"]
    },
    {
      "region": "Europe",
      "country_authority": "Romania Register",
      "jurisdiction": "Romania",
      "description": "Company and business entity register",
      "url": "https://listafirme.ro/search.asp",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Europe",
      "country_authority": "Czechia Register",
      "jurisdiction": "Czechia",
      "description": "Justice ministry business and legal entity register",
      "url": "https://or.justice.cz/ias/ui/rejstrik-$firma",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Europe",
      "country_authority": "Denmark Register",
      "jurisdiction": "Denmark",
      "description": "Danish financial supervisory authority register",
      "url": "https://virksomhedsregister.finanstilsynet.dk/",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Africa",
      "country_authority": "Nigeria Register",
      "jurisdiction": "Nigeria",
      "description": "Corporate Affairs Commission public entity search",
      "url": "https://icrp.cac.gov.ng/public-search",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Europe / Offshore",
      "country_authority": "Isle of Man Register",
      "jurisdiction": "Isle of Man",
      "description": "Financial regulation authority DASP register",
      "url": "https://www.iomfsa.im/register-search/",
      "entity_type": "DASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Americas & Offshore",
      "country_authority": "Marshall Islands Register",
      "jurisdiction": "Marshall Islands",
      "description": "International company registry search",
      "url": "https://resources.register-iri.com/CorpEntity/Corporate/Search",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "UAE Register",
      "jurisdiction": "UAE",
      "description": "Dubai Financial Services Authority DFSA public register",
      "url": "https://www.dfsa.ae/public-register/firms",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Europe",
      "country_authority": "Iceland Register",
      "jurisdiction": "Iceland",
      "description": "Central Bank of Iceland regulated virtual asset providers",
      "url": "https://cb.is/financial-supervision/regulated-activities/supervised-entities/?type=Virtual%20asset%20service%20provider&q=",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "New Zealand Register",
      "jurisdiction": "New Zealand",
      "description": "Financial Services Provider register",
      "url": "https://fsp-register.companiesoffice.govt.nz/",
      "entity_type": "FSP",
      "focus": ["Financial Services"]
    },
    {
      "region": "Europe",
      "country_authority": "EU MiCA CASP Register",
      "jurisdiction": "EU MiCA CASP",
      "description": "ESMA Markets in Crypto-Assets Regulation CASP list",
      "url": "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      "entity_type": "CASP",
      "focus": ["Crypto", "EU MiCA"]
    },
    {
      "region": "Europe",
      "country_authority": "Slovenia Register",
      "jurisdiction": "Slovenia",
      "description": "Financial information system register",
      "url": "https://www.ajpes.si/fipo/default.asp?language=english",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Americas",
      "country_authority": "Argentina Register",
      "jurisdiction": "Argentina",
      "description": "CNV virtual asset service provider registry",
      "url": "https://www.cnv.gov.ar/SitioWeb/ProveedoresServiciosActivosVirtuales/RegistrosPSAV",
      "entity_type": "VASP",
      "focus": ["Crypto"]
    },
    {
      "region": "Americas",
      "country_authority": "Colombia Register",
      "jurisdiction": "Colombia",
      "description": "DIAN commercial and fiscal registry",
      "url": "https://muisca.dian.gov.co/WebRutMuisca/DefConsultaEstadoRUT.faces",
      "entity_type": "Corporate",
      "focus": ["Entity Verification"]
    },
    {
      "region": "Asia–Pacific & Middle East",
      "country_authority": "Bahrain Register",
      "jurisdiction": "Bahrain",
      "description": "Central Bank of Bahrain licensing directory",
      "url": "https://www.cbb.gov.bh/licensing-directory/#register",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    },
    {
      "region": "Americas & Offshore",
      "country_authority": "Bermuda Register",
      "jurisdiction": "Bermuda",
      "description": "Bermuda Monetary Authority regulated entities",
      "url": "https://www.bma.bm/regulated-entities",
      "entity_type": "Financial Entity",
      "focus": ["Financial Services"]
    }
  ],
  "statistics": {
    "total_registers": 61,
    "by_region": {
      "Africa": 4,
      "Americas": 4,
      "Americas & Offshore": 5,
      "Asia–Pacific & Middle East": 16,
      "Europe": 23,
      "Europe / Caucasus": 1,
      "Europe / Central Asia": 1,
      "Europe / Middle East": 1,
      "Europe / Offshore": 2,
      "North America": 3,
      "Other": 1
    },
    "entity_types": {
      "VASP": 37,
      "Financial Entity": 9,
      "Corporate": 6,
      "CASP": 3,
      "MSB": 3,
      "DCE": 2,
      "DASP": 2,
      "PSAN": 1,
      "VATP": 1,
      "FSP": 1
    }
  },
  "notes": [
    "This is a comprehensive reference document combining PDF and DOCX data",
    "URLs are current as of 2025-12-06",
    "Some registers are marked 'URL to be confirmed' - please verify before use",
    "VASP = Virtual Asset Service Provider",
    "CASP = Crypto-Asset Service Provider",
    "MSB = Money Services Business",
    "DASP = Digital Asset Service Provider",
    "DCE = Digital Currency Exchange",
    "PSAN = Prestataires de Services sur Actifs Numériques",
    "VATP = Virtual Asset Trading Platform",
    "FSP = Financial Services Provider"
  ]
};

/**
 * Transforms the raw data from VASP_Registers.json into the nested structure
 * expected by the AI prompt and the application.
 * @param rawData The raw data from the JSON file.
 * @returns The transformed data.
 */
const transformData = (data: RawRegistersData): RegistersData => {
  const getRegionInfo = (region: string): { key: string; emoji: string } => {
    if (region.includes('Europe')) return { key: 'Europe', emoji: '🌍' };
    if (region.includes('America')) return { key: 'Americas', emoji: '🌎' };
    if (region.includes('Asia')) return { key: 'Asia–Pacific & Middle East', emoji: '🌏' };
    if (region.includes('Africa')) return { key: 'Africa', emoji: '🌍' };
    return { key: 'Other Jurisdictions', emoji: '🌐' };
  };

  const regionMap: { [key: string]: Region } = {};

  data.registers.forEach(item => {
    const { key: regionKey, emoji } = getRegionInfo(item.region);

    if (!regionMap[regionKey]) {
      regionMap[regionKey] = {
        region_code: regionKey.toLowerCase().replace(/[^a-z0-9]/g, '_'),
        region_name: `${emoji} ${regionKey.toUpperCase()}`,
        registers: [],
      };
    }

    const isUrlPending = item.url.toLowerCase().includes("url to be confirmed");
    let url = isUrlPending ? null : item.url;
    // Fix known invalid URL patterns from the source JSON
    if (url) {
      url = url.replace('-$firma', '-firma');
    }

    const newRegister = {
      id: `${item.jurisdiction.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${item.country_authority.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      country: item.jurisdiction,
      register_name: item.country_authority,
      url: url,
      purpose: item.description,
      status: isUrlPending ? 'url_pending' : undefined,
    };

    regionMap[regionKey].registers.push(newRegister);
  });

  return {
    title: data.metadata.name,
    description: data.metadata.description,
    last_updated: data.metadata.last_updated,
    regions: Object.values(regionMap),
  };
};

// Export the transformed data for the app to use
export const registers_json: RegistersData = transformData(rawData);
