import { Scale } from "./interfaces/scale_enum";
import { round } from "./round";

const mean = (list: number[], scale: Scale): number => {
    let sum: number;
    for (const element of list) {
        sum += element;
    }
    return round((sum / list.length), scale);
};

export {
    mean
};
