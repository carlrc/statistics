import { Scale } from "../interfaces/scale_enum";
import { mean } from "../mean";

test("it calculates the mean of a short array", () => {
    const list = [1, 2, 3, 4];
    const result = mean(list, Scale.TENTHS);

    expect(result).toBe(2.5);
});

test("it calculates the mean of an array with decimals and rounds to tenths", () => {
    const list = [1.611, 2.3466, 3.5677, 4.11];
    const result = mean(list, Scale.TENTHS);

    expect(result).toBe(2.9);
});
