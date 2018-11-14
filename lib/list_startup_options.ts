import { Operations } from "./interfaces/operations";
import { Scale } from "./interfaces/scale_enum";

const listOperations = (): Operations[] => {
  return [
    Operations.FREQUENCY_DISTRIBUTION,
    Operations.STANDARD_DEVIATION
  ];
};

const listScales = (): Scale[] => {
  return [
    Scale.TENTHS,
    Scale.HUNDREDTHS,
    Scale.THOUSANDTHS,
    Scale.TEN_THOUSANDTHS,
    Scale.HUNDRED_THOUSANDTHS
  ];
};

export {
  listOperations,
  listScales
};
