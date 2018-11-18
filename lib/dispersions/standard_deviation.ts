import { Input } from "../interfaces/input";
import { Output } from "../interfaces/output";
import { Scale } from "../interfaces/scale_enum";
import { Operation } from "../operation";

class StandardDeviation extends Operation {
    constructor(scale: Scale) {
        super(scale);
    }

    public async calculate(input: Input): Promise<Output> {
        try {
            const mean = this.mean(input.data);
            const squareOfDistanceFromMean = input.data.map((e) => Math.pow((e - mean), 2));
            const sumOfDistancesOverLength = this.sum(squareOfDistanceFromMean) / input.data.length;
            const result = this.round(Math.sqrt(sumOfDistancesOverLength));
    
            return { result };
        } catch (error) {
            throw error;
        }
    }
}

export {
    StandardDeviation
};
