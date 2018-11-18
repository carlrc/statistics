import { Input } from "../interfaces/input";
import {Options} from "../interfaces/options";
import { Output } from "../interfaces/output";
import { Scale } from "../interfaces/scale_enum";
import { Operation } from "../operation";

class TestBaseClass extends Operation {
    constructor(scale: Scale) {
        super(scale);
    }

    public async calculate(input: Input): Promise<Output> {
        return;
    }

    public async setOptions(): Promise<Options> {
        return;
    }
}

export {
    TestBaseClass
};
