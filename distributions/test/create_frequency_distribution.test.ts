import {createFrequencyDistribution} from "../create_frequency_distribution";
import { FrequencyDistributionClass } from "../interfaces/frequency_distribution";

test("it should create two classes in a list where the width is the difference between the high and low", () => {
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
    const result = createFrequencyDistribution(list, 5, classWidth);
    expect(result).toStrictEqual(expectedResult);
});

test("it should create a correct frequency distribution for a random set", () => {
    const list = [45, 25, 39, 5, 42, 48, 35, 12, 40, 16, 36, 27, 37, 30, 18, 22, 32, 54, 44, 29];
    const classWidth = 10;
    const expectedResult = [
        {
          class_boundary_lower: 4.5,
          class_boundary_upper: 14.5,
          class_limit_lower: 5,
          class_limit_upper: 14,
          class_midpoint: 9.5,
          class_width: 10,
          frequency: 2
        },
        {
          class_boundary_lower: 15.5,
          class_boundary_upper: 25.5,
          class_limit_lower: 16,
          class_limit_upper: 25,
          class_midpoint: 20.5,
          class_width: 10,
          frequency: 4
        },
        {
          class_boundary_lower: 26.5,
          class_boundary_upper: 36.5,
          class_limit_lower: 27,
          class_limit_upper: 36,
          class_midpoint: 31.5,
          class_width: 10,
          frequency: 6
        },
        {
          class_boundary_lower: 36.5,
          class_boundary_upper: 46.5,
          class_limit_lower: 37,
          class_limit_upper: 46,
          class_midpoint: 41.5,
          class_width: 10,
          frequency: 6
        },
        {
          class_boundary_lower: 47.5,
          class_boundary_upper: 57.5,
          class_limit_lower: 48,
          class_limit_upper: 57,
          class_midpoint: 52.5,
          class_width: 10,
          frequency: 2
        }
      ];
    const result = createFrequencyDistribution(list, 5, classWidth);

    expect(result).toStrictEqual(expectedResult);
});
