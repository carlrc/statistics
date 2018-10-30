import {round} from "../common/round";
import {FrequencyDistributionClass} from "./interfaces/frequency_distribution";

const createFrequencyDistribution = (list: number[], 
                                     lowerLimit: number,
                                     classWidth: number,
                                     frequencyDistributions?: FrequencyDistributionClass[]): FrequencyDistributionClass[] => {
    if (list.length === 0) {
        return frequencyDistributions;
    }

    const lowestClass = createClass(lowerLimit, classWidth);
    const trimmedList = list.filter((x) => x > lowestClass.class_boundary_upper);
    const lowestClassWithFrequency = Object.assign({frequency: (list.length - trimmedList.length)}, lowestClass);
    const newLowerLimit = Math.min(...trimmedList);
    const distributions = frequencyDistributions ? [...frequencyDistributions, lowestClassWithFrequency] : [lowestClassWithFrequency];

    return createFrequencyDistribution(trimmedList, newLowerLimit, classWidth, distributions);
};

const createClass = (lowerLimit: number, classWidth: number): FrequencyDistributionClass => {
    const upperLimit = round((lowerLimit + classWidth) - 1);
    return {
        class_limit_lower: lowerLimit,
        class_limit_upper: upperLimit,
        class_boundary_lower: round(lowerLimit - 0.5),
        class_boundary_upper: round(upperLimit + 0.5),
        class_midpoint: round((lowerLimit + upperLimit) / 2),
        class_width: classWidth
    };
};

export {
    createFrequencyDistribution
};
