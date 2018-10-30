import {round} from "../round";

test("it rounds to the nearest tenth", () => {
    expect(round(4.3566)).toBe(4.4);
    expect(round(4.5)).toBe(4.5);
    expect(round(4.88)).toBe(4.9);
    expect(round(5.01)).toBe(5.0);
    expect(round(4.3)).toBe(4.3);
    expect(round(-4.3566)).toBe(-4.4);
    expect(round(5)).toBe(5);
});
