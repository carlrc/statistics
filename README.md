# Statistics CLI

## Usage

+ Find operation you wish to perform in [examples](#examples) and follow instructions
+ Run `npm run build`
+ Run `node index.js`

## Examples

+ [Frequency Distribution](#frequency-distribution)
+ [Media](#media)

## Operations

### Frequency Distribution

+ Create JSON file at root with the following structure:

```typescript
interface Input {
    data: number[];
    options: {
        lowerLimit: number;
        classWidth: number;
    }
}

// Outputs FrequencyDistributionClass[]
interface FrequencyDistributionClass {
    class_limit_lower: number;
    class_limit_upper: number;
    class_boundary_lower: number;
    class_boundary_upper: number;
    class_width: number;
    class_midpoint: number;
    frequency: number;
}
```

## Media

![Alt Text](https://github.com/carlrc/statistics_cli/blob/master/example_operation.gif)
