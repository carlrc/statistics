import { Input } from "../interfaces/input";
import { Output } from "../interfaces/output";
import { Scale } from "../interfaces/scale_enum";
import { Operation } from "../operation";
import { FrequencyDistributionClass } from "./interfaces/frequency_distribution";

class FrequencyDistribution extends Operation {
    constructor(scale: Scale) {
        super(scale);
    }

    public async calculate(input: Input): Promise<Output> {
        const lowerLimit = input.options.lowerLimit;
        const classWidth = input.options.classWidth;
        
        try {
            const result = this.createFrequencyDistribution(input.data, lowerLimit, classWidth);
            return { result };
        } catch (error) {
            return {
                failureReason: error.toString(),
                result: []
            };
        }
    }

    private createFrequencyDistribution(list: number[], 
                                        lowerLimit: number,
                                        classWidth: number,
                                        frequencyDistributions?: FrequencyDistributionClass[]): FrequencyDistributionClass[] {
        if (list.length === 0) {
            return frequencyDistributions;
        }

        const fd = this.createClass(lowerLimit, classWidth);
        const elementsOutsideClassBoundary = list.filter((x) => x > fd.class_boundary_upper);
        const fdWithFrequency = Object.assign({frequency: (list.length - elementsOutsideClassBoundary.length)}, fd);
        const newLowerLimit = fdWithFrequency.class_limit_upper + 1;
        const distributions = frequencyDistributions ? [...frequencyDistributions, fdWithFrequency] : [fdWithFrequency];

        return this.createFrequencyDistribution(elementsOutsideClassBoundary, newLowerLimit, classWidth, distributions);
    }

    private createClass(lowerLimit: number, classWidth: number): FrequencyDistributionClass {
        const upperLimit = this.round((lowerLimit + classWidth) - 1);
        return {
            class_limit_lower: lowerLimit,
            class_limit_upper: upperLimit,
            class_boundary_lower: this.round((lowerLimit - 0.5)),
            class_boundary_upper: this.round((upperLimit + 0.5)),
            class_midpoint: this.round((lowerLimit + upperLimit) / 2),
            class_width: classWidth
        };
    }

}

export {
    FrequencyDistribution
};
