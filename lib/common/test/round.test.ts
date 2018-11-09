import { Scale } from "../interfaces/scale_enum";
import { round } from "../round";

test("it rounds to the nearest tenths", () => {
    expect(round(4.3566, Scale.TENTHS)).toBe(4.4);
    expect(round(4.5, Scale.TENTHS)).toBe(4.5);
    expect(round(4.88, Scale.TENTHS)).toBe(4.9);
    expect(round(5.01, Scale.TENTHS)).toBe(5.0);
    expect(round(4.3, Scale.TENTHS)).toBe(4.3);
    expect(round(-4.3566, Scale.TENTHS)).toBe(-4.4);
    expect(round(5, Scale.TENTHS)).toBe(5);
});

test("it rounds to the nearest hundredths", () => {
    expect(round(4.3566, Scale.HUNDREDTHS)).toBe(4.36);
    expect(round(4.5, Scale.HUNDREDTHS)).toBe(4.5);
    expect(round(4.888, Scale.HUNDREDTHS)).toBe(4.89);
    expect(round(5.016, Scale.HUNDREDTHS)).toBe(5.02);
    expect(round(4.300009, Scale.HUNDREDTHS)).toBe(4.3);
    expect(round(-4.3566, Scale.HUNDREDTHS)).toBe(-4.36);
    expect(round(5, Scale.HUNDREDTHS)).toBe(5);
});

test("it rounds to the nearest thousandths", () => {
    expect(round(4.3566, Scale.THOUSANDTHS)).toBe(4.357);
    expect(round(4.5, Scale.THOUSANDTHS)).toBe(4.5);
    expect(round(4.8889, Scale.THOUSANDTHS)).toBe(4.889);
    expect(round(5.016, Scale.THOUSANDTHS)).toBe(5.016);
    expect(round(4.300009, Scale.THOUSANDTHS)).toBe(4.3);
    expect(round(-4.3566, Scale.THOUSANDTHS)).toBe(-4.357);
    expect(round(5, Scale.THOUSANDTHS)).toBe(5);
});

test("it rounds to the nearest ten hundredths", () => {
    expect(round(4.35667, Scale.TEN_THOUSANDTHS)).toBe(4.3567);
    expect(round(4.5, Scale.TEN_THOUSANDTHS)).toBe(4.5);
    expect(round(4.88899, Scale.TEN_THOUSANDTHS)).toBe(4.889);
    expect(round(5.01677, Scale.TEN_THOUSANDTHS)).toBe(5.0168);
    expect(round(4.300009, Scale.TEN_THOUSANDTHS)).toBe(4.3000);
    expect(round(-4.35664, Scale.TEN_THOUSANDTHS)).toBe(-4.3566);
    expect(round(5, Scale.TEN_THOUSANDTHS)).toBe(5);
});

test("it rounds to the nearest hundred thousandths", () => {
    expect(round(4.35667, Scale.TEN_THOUSANDTHS)).toBe(4.3567);
    expect(round(4.5, Scale.TEN_THOUSANDTHS)).toBe(4.5);
    expect(round(4.88899, Scale.TEN_THOUSANDTHS)).toBe(4.889);
    expect(round(5.01677, Scale.TEN_THOUSANDTHS)).toBe(5.0168);
    expect(round(4.300009, Scale.TEN_THOUSANDTHS)).toBe(4.3000);
    expect(round(-4.35664, Scale.TEN_THOUSANDTHS)).toBe(-4.3566);
    expect(round(5, Scale.TEN_THOUSANDTHS)).toBe(5);
});
