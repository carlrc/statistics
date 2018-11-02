import { Scale } from "./interfaces/scale_enum";

const round = (value: number, scale: Scale): number => {
    return Math.round(value * scale) / scale;
};

export {
    round
};
