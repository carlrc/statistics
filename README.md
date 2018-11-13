# Statistics CLI

## Usage

+ Find operation you wish to perform in [examples](#examples) and follow instructions
+ Run `npm run build`
+ Run `node index.js`

```javascript
// Example for Frequency Distribution
{
    "data": [1, 2, 3, 4, 5],
    "options": {
        "lowerLimit": 5,
        "classWidth": 2
    }
}
```

## Examples

[Frequency Distribution](#frequency-distribution)

## Operations

### Frequency Distribution

+ Create JSON file at root with the following structure:

```javascript
{
    "data": number[]
    "options": {
        "lowerLimit": number,
        "classWidth": number
    }
}
```