import { StandardDeviation } from "./deviation/standard_deviation";
import { FrequencyDistribution } from "./distributions/frequency_distribution";
import { Operations } from "./interfaces/operations";
import { Scale } from "./interfaces/scale_enum";
import { Operation } from "./operation";

const setOperations = (scale: Scale): Map<string, Operation> => {
    try {
        const operations = new Map<string, Operation>();
        operations.set(Operations.FREQUENCY_DISTRIBUTION, new FrequencyDistribution(scale));
        operations.set(Operations.STANDARD_DEVIATION, new StandardDeviation(scale));

        return operations;
    } catch (error) {
        throw error;
    }
};

export {
    setOperations
};
