
// The transformed data structure used by the application and AI prompt
export interface Register {
  id: string;
  country: string;
  register_name: string;
  url: string | null;
  purpose: string;
  status?: string;
}

export interface Region {
  region_code: string;
  region_name: string;
  registers: Register[];
}

export interface RegistersData {
  title: string;
  description: string;
  last_updated: string;
  regions: Region[];
}


// The raw data structure from the new VASP_Registers.json file
export interface RawRegister {
    region: string;
    country_authority: string;
    jurisdiction: string;
    description: string;
    url: string;
    entity_type: string;
    focus: string[];
}

export interface RawRegistersData {
    metadata: {
        name: string;
        version: string;
        last_updated: string;
        source: string[];
        total_entries: number;
        description: string;
        use_case: string;
    };
    registers: RawRegister[];
    statistics: object;
    notes: string[];
}
