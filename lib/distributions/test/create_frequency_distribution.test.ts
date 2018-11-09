import { Input } from "../../interfaces/input";
import { Scale } from "../../interfaces/scale_enum";
import { FrequencyDistribution } from "../frequency_distribution";
import { FrequencyDistributionClass } from "../interfaces/frequency_distribution";

test("it should create two classes in a list where the width is the difference between the high and low", async () => {
    const list = [5, 25];
    const classWidth = 20;
    const expectedResult: FrequencyDistributionClass[] = [
        {
            class_limit_lower: 5,
            class_limit_upper: 24,
            class_boundary_lower: 4.5,
            class_boundary_upper: 24.5,
            class_midpoint: 14.5,
            class_width: classWidth,
            frequency: 1
        },
        {
            class_limit_lower: 25,
            class_limit_upper: 44,
            class_boundary_lower: 24.5,
            class_boundary_upper: 44.5,
            class_midpoint: 34.5,
            class_width: classWidth,
            frequency: 1
        }
    ];
    const input: Input = {
      data: list,
      options: {
        lowerLimit: 5, 
        classWidth,
      }
    };
    const result = await new FrequencyDistribution(Scale.TENTHS).calculate(input);
    expect(result.result).toStrictEqual(expectedResult);
});

test("it should create a correct frequency distribution for a random set with a medium width", async () => {
    const list = [45, 25, 39, 5, 42, 48, 35, 12, 40, 16, 36, 27, 37, 30, 18, 22, 32, 54, 44, 29];
    const classWidth = 10;
    const expectedResult = [
        {
            class_limit_upper: 14,
            class_boundary_lower: 4.5,
            class_boundary_upper: 14.5,
            class_limit_lower: 5,
          class_midpoint: 9.5,
          class_width: 10,
          frequency: 2
        },
        {
          class_boundary_lower: 14.5,
          class_boundary_upper: 24.5,
          class_limit_lower: 15,
          class_limit_upper: 24,
          class_midpoint: 19.5,
          class_width: 10,
          frequency: 3
        },
        {
          class_boundary_lower: 24.5,
          class_boundary_upper: 34.5,
          class_limit_lower: 25,
          class_limit_upper: 34,
          class_midpoint: 29.5,
          class_width: 10,
          frequency: 5
        },
        {
          class_boundary_lower: 34.5,
          class_boundary_upper: 44.5,
          class_limit_lower: 35,
          class_limit_upper: 44,
          class_midpoint: 39.5,
          class_width: 10,
          frequency: 7
        },
        {
          class_boundary_lower: 44.5,
          class_boundary_upper: 54.5,
          class_limit_lower: 45,
          class_limit_upper: 54,
          class_midpoint: 49.5,
          class_width: 10,
          frequency: 3
        }
      ];
    const input: Input = {
      data: list,
      options: {
        lowerLimit: 5, 
        classWidth,
      }
    };
    const result = await new FrequencyDistribution(Scale.TENTHS).calculate(input);

    expect(result.result).toStrictEqual(expectedResult);
});

test("it should create a correct frequency distribution for a random set with a small width", async () => {
    const list = [8, 25, 11, 15, 29, 22, 10, 5, 17, 21, 22, 13, 26, 16, 18, 12, 9, 26, 20, 16, 23, 14, 19, 23, 20, 16, 27, 16, 21, 14];
    const classWidth = 5;
    const expectedResult = [
        {
          class_boundary_lower: 4.5,
          class_boundary_upper: 9.5,
          class_limit_lower: 5,
          class_limit_upper: 9,
          class_midpoint: 7,
          class_width: 5,
          frequency: 3
        },
        {
          class_boundary_lower: 9.5,
          class_boundary_upper: 14.5,
          class_limit_lower: 10,
          class_limit_upper: 14,
          class_midpoint: 12,
          class_width: 5,
          frequency: 6
        },
        {
          class_boundary_lower: 14.5,
          class_boundary_upper: 19.5,
          class_limit_lower: 15,
          class_limit_upper: 19,
          class_midpoint: 17,
          class_width: 5,
          frequency: 8
        },
        {
          class_boundary_lower: 19.5,
          class_boundary_upper: 24.5,
          class_limit_lower: 20,
          class_limit_upper: 24,
          class_midpoint: 22,
          class_width: 5,
          frequency: 8
        },
        {
          class_boundary_lower: 24.5,
          class_boundary_upper: 29.5,
          class_limit_lower: 25,
          class_limit_upper: 29,
          class_midpoint: 27,
          class_width: 5,
          frequency: 5
        }
      ];
    const input: Input = {
      data: list,
      options: {
        lowerLimit: 5, 
        classWidth,
      }
    };
    const result = await new FrequencyDistribution(Scale.TENTHS).calculate(input);

    expect(result.result).toStrictEqual(expectedResult);
});
