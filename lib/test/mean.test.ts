import { Scale } from "../interfaces/scale_enum";
import { TestBaseClass } from "./test_base_class";

test("it calculates the mean of a short array", () => {
    const list = [1, 2, 3, 4];
    const result = new TestBaseClass(Scale.TENTHS).mean(list);

    expect(result).toBe(2.5);
});

test("it calculates the mean of an array with decimals and rounds to tenths", () => {
    const list = [1.611, 2.3466, 3.5677, 4.11];
    const result = new TestBaseClass(Scale.TENTHS).mean(list);

    expect(result).toBe(2.9);
});
