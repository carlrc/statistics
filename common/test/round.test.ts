import { Scale } from "../interfaces/scale_enum";
import { round } from "../round";

test("it rounds to the nearest tenth", () => {
    expect(round(4.3566, Scale.TENTHS)).toBe(4.4);
    expect(round(4.5, Scale.TENTHS)).toBe(4.5);
    expect(round(4.88, Scale.TENTHS)).toBe(4.9);
    expect(round(5.01, Scale.TENTHS)).toBe(5.0);
    expect(round(4.3, Scale.TENTHS)).toBe(4.3);
    expect(round(-4.3566, Scale.TENTHS)).toBe(-4.4);
    expect(round(5, Scale.TENTHS)).toBe(5);
});
