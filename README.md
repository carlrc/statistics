# Statistics CLI

## Usage

+ Find operation you wish to perform in [examples](#examples) and follow instructions
+ Run `npm run build`
+ Run `node index.js`

```typescript
// Example of Frequency Distribution
{
    data: [1, 2, 3, 4, 4, 4, 3, 23, 55, 77, 11, 33, 23, 23, 22, 6, 8, 2, 9, 80, 12],
    options: {
        lowerLimit: 1,
        classWidth: 10
    }
}
// Output
[
    {
        frequency: 11,
        class_limit_lower: 1,
        class_limit_upper: 10,
        class_boundary_lower: 0.5,
        class_boundary_upper: 10.5,
        class_midpoint: 5.5,
        class_width: 10
    },
    {
        frequency: 2,
        class_limit_lower: 11,
        class_limit_upper: 20,
        class_boundary_lower: 10.5,
        class_boundary_upper: 20.5,
        class_midpoint: 15.5,
        class_width: 10
    },
    ... 6 more items
]
```

## Examples

[Frequency Distribution](#frequency-distribution)

## Operations

### Frequency Distribution

+ Create JSON file at root with the following structure:

```typescript
// Input
{
    data: number[];
    options: {
        lowerLimit: number;
        classWidth: number;
    }
}
// Output
[
    {
        frequency: number;
        class_limit_lower: number;
        class_limit_upper: number;
        class_boundary_lower: number;
        class_boundary_upper: number;
        class_midpoint: number;
        class_width: number;
    }
    ...
]
```