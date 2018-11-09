interface FrequencyDistributionClass {
    class_limit_lower: number;
    class_limit_upper: number;
    class_boundary_lower: number;
    class_boundary_upper: number;
    class_width: number;
    class_midpoint: number;
    frequency?: number;
    relative_frequency?: number;
}

export {
    FrequencyDistributionClass,
};
