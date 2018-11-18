import { Input } from "./interfaces/input";
import {Options} from "./interfaces/options";
import { Output } from "./interfaces/output";
import { Scale } from "./interfaces/scale_enum";

abstract class Operation {
    constructor(private scale: Scale) { }
    
    public async abstract calculate(input: Input): Promise<Output>;

    public async abstract setOptions(): Promise<Options>;

    public round(value: number): number {
        return Math.round(value * this.scale) / this.scale;
    }

    public mean(list: number[]): number {
        const sum = this.sum(list);
        return this.round((sum / list.length));
    }

    public sum(list: number[]): number {
        let sum: number = 0;
        for (const element of list) {
            sum += element;
        }
        return this.round(sum);
    }
}

export {
    Operation
};
