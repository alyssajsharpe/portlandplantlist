
export interface Plant {
    id: number;
    common_name: string;
    scientific_name: string;
    category: string;
    max_height_ft: number;
    sun_requirement: string;
    moisture_conditions: string;
    native_to_portland: boolean;
    notes: string;
    images?: string[]
}

export interface Weeds {
    id: number;
    common_name: string;
    scientific_name: string;
    tier: string;
    tier_label: string;
    origin: string;
    growth_habit: string;
    spread_method: string[];
    habitat_impacted: string[];
    removal_required: boolean;
    public_safety_hazard?: boolean;
    control_tips: string;
    notes: string;
    images?: string[]
}