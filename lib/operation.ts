import { Input } from "./interfaces/input";
import { Output } from "./interfaces/output";
import { Scale } from "./interfaces/scale_enum";

abstract class Operation {
    constructor(private scale: Scale) { }
    
    public abstract calculate(input: Input): Promise<Output>;

    public round(value: number): number {
        return Math.round(value * this.scale) / this.scale;
    }

    public mean(list: number[]): number {
        let sum: number = 0;
        for (const element of list) {
            sum += element;
        }
        return this.round((sum / list.length));
    }
}

export {
    Operation
};
