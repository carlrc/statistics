import { DataSetType } from "../../interfaces/data_set_type";
import { Scale } from "../../interfaces/scale_enum";
import { StandardDeviation } from "../standard_deviation";

test("calculates standard deviation of integers for population", async () => {
    const list = [6, 2, 3, 1];
    const input = {
        data: list,
        options: {
            dataSetType: DataSetType.POPULATION
        }
    };
    const result = await new StandardDeviation(Scale.HUNDREDTHS).calculate(input);
    expect(result.result).toEqual(1.87);
});

test("calculates the standard deviation of decimals for population", async () => {
    const list = [6.447, 2.1209831, 3.123, 1.0];
    const input = {
        data: list,
        options: {
            dataSetType: DataSetType.POPULATION
        }
    };
    const result = await new StandardDeviation(Scale.HUNDRED_THOUSANDTHS).calculate(input);
    expect(result.result).toEqual(2.0341);
});

test("calculates the standard deviation of integers for sample", async () => {
    const list = [6, 2, 3, 1];
    const input = {
        data: list,
        options: {
            dataSetType: DataSetType.SAMPLE
        }
    };
    const result = await new StandardDeviation(Scale.HUNDREDTHS).calculate(input);
    expect(result.result).toEqual(2.16);
});

test("calculates the standard deviation of decimals for sample", async () => {
    const list = [6.447, 2.1209831, 3.123, 1.0];
    const input = {
        data: list,
        options: {
            dataSetType: DataSetType.SAMPLE
        }
    };
    const result = await new StandardDeviation(Scale.HUNDRED_THOUSANDTHS).calculate(input);
    expect(result.result).toEqual(2.34878);
});
