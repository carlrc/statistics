import { Scale } from "../interfaces/scale_enum";
import { TestBaseClass } from "./test_base_class";

test("it rounds to the nearest tenths", () => {
    const testClass = new TestBaseClass(Scale.TENTHS);
    expect(testClass.round(4.3566)).toBe(4.4);
    expect(testClass.round(4.5)).toBe(4.5);
    expect(testClass.round(4.88)).toBe(4.9);
    expect(testClass.round(5.01)).toBe(5.0);
    expect(testClass.round(4.3)).toBe(4.3);
    expect(testClass.round(-4.3566)).toBe(-4.4);
    expect(testClass.round(5)).toBe(5);
});

test("it rounds to the nearest hundredths", () => {
    const testClass = new TestBaseClass(Scale.HUNDREDTHS);
    expect(testClass.round(4.3566)).toBe(4.36);
    expect(testClass.round(4.5)).toBe(4.5);
    expect(testClass.round(4.888)).toBe(4.89);
    expect(testClass.round(5.016)).toBe(5.02);
    expect(testClass.round(4.300009)).toBe(4.3);
    expect(testClass.round(-4.3566)).toBe(-4.36);
    expect(testClass.round(5)).toBe(5);
});

test("it rounds to the nearest thousandths", () => {
    const testClass = new TestBaseClass(Scale.THOUSANDTHS);
    expect(testClass.round(4.3566)).toBe(4.357);
    expect(testClass.round(4.5)).toBe(4.5);
    expect(testClass.round(4.8889)).toBe(4.889);
    expect(testClass.round(5.016)).toBe(5.016);
    expect(testClass.round(4.300009)).toBe(4.3);
    expect(testClass.round(-4.3566)).toBe(-4.357);
    expect(testClass.round(5)).toBe(5);
});

test("it rounds to the nearest ten hundredths", () => {
    const testClass = new TestBaseClass(Scale.TEN_THOUSANDTHS);
    expect(testClass.round(4.35667)).toBe(4.3567);
    expect(testClass.round(4.5)).toBe(4.5);
    expect(testClass.round(4.88899)).toBe(4.889);
    expect(testClass.round(5.01677)).toBe(5.0168);
    expect(testClass.round(4.300009)).toBe(4.3000);
    expect(testClass.round(-4.35664)).toBe(-4.3566);
    expect(testClass.round(5)).toBe(5);
});

test("it rounds to the nearest hundred thousandths", () => {
    const testClass = new TestBaseClass(Scale.HUNDRED_THOUSANDTHS);
    expect(testClass.round(4.35667)).toBe(4.35667);
    expect(testClass.round(4.5)).toBe(4.5);
    expect(testClass.round(4.88899)).toBe(4.88899);
    expect(testClass.round(5.01677)).toBe(5.01677);
    expect(testClass.round(4.300009)).toBe(4.30001);
    expect(testClass.round(-4.35664)).toBe(-4.35664);
    expect(testClass.round(5)).toBe(5);
});
