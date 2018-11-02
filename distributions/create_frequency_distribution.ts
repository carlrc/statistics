import { Scale } from "../common/interfaces/scale_enum";
import { round } from "../common/round";
import { FrequencyDistributionClass } from "./interfaces/frequency_distribution";

const createFrequencyDistribution = (list: number[], 
                                     lowerLimit: number,
                                     classWidth: number,
                                     scale: Scale,
                                     frequencyDistributions?: FrequencyDistributionClass[]): FrequencyDistributionClass[] => {
    if (list.length === 0) {
        return frequencyDistributions;
    }

    const fd = createClass(lowerLimit, classWidth, scale);
    const elementsOutsideClassBoundary = list.filter((x) => x > fd.class_boundary_upper);
    const fdWithFrequency = Object.assign({frequency: (list.length - elementsOutsideClassBoundary.length)}, fd);
    const newLowerLimit = fdWithFrequency.class_limit_upper + 1;
    const distributions = frequencyDistributions ? [...frequencyDistributions, fdWithFrequency] : [fdWithFrequency];

    return createFrequencyDistribution(elementsOutsideClassBoundary, newLowerLimit, classWidth, scale, distributions);
};

const createClass = (lowerLimit: number, classWidth: number, scale: Scale): FrequencyDistributionClass => {
    const upperLimit = round((lowerLimit + classWidth) - 1, scale);
    return {
        class_limit_lower: lowerLimit,
        class_limit_upper: upperLimit,
        class_boundary_lower: round((lowerLimit - 0.5), scale),
        class_boundary_upper: round((upperLimit + 0.5), scale),
        class_midpoint: round((lowerLimit + upperLimit) / 2, scale),
        class_width: classWidth
    };
};

export {
    createFrequencyDistribution
};
