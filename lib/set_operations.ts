import { FrequencyDistribution } from "./distributions/frequency_distribution";
import { Operations } from "./interfaces/operations";
import { Scale } from "./interfaces/scale_enum";
import { Operation } from "./operation";

const setOperations = (scale: Scale): Map<Operations, Operation> => {
    try {
        const operations = new Map<Operations, Operation>();
        operations.set(Operations.FREQUENCY_DISTRIBUTION, new FrequencyDistribution(scale));
        
        return operations;
    } catch (error) {
        throw error;
    }
};

export {
    setOperations
};
