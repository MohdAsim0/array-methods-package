# Array methods Package

This npm package provides a collection of utility functions for performing common operations on arrays. These functions are designed to simplify and speed up array manipulation tasks in JavaScript projects.

## Installation

To install this package, run the following command:

```bash
npm i array-methods-asim
```

## Usage

After installing the package, you can import and use the provided utility functions in your project. 
- To run this --> In ``package.json`` add `"type":"module"` OR make filename with `.mjs` extension.

Below is an example of how to use the package:

```bash
import {
  average,
  chunk,
  clear,
  containsValue,
  max,
  min,
  reverseArray,
  sum,
  unique,
} from "array-methods-asim";

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(sum(numbers)); //28

console.log(average(numbers)); //4

console.log(max(numbers)); //7

console.log(min(numbers)); //1

console.log(unique(numbers)); // [1,2,3,4,5,6,7]

console.log(clear()); //[]

console.log(chunk(numbers, 2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

console.log(containsValue(numbers, 6)); //true

console.log(reverseArray(numbers)); //[7, 6, 5, 4,3, 2, 1 ]

```

## Functions

1. `sum(arr)`
   - Description: Returns the sum of all elements in the array.
   - Parameters: `arr` (Array): The array of numbers.
   - Returns: `number`: The sum of the array elements.

2. `average(arr)`
   - Description: Returns the average of all elements in the array.
   - Parameters: `arr` (Array): The array of numbers.
   - Returns: `number`: The average of the array elements.

3. `max(arr)`
   - Description: Returns the maximum value in the array.
   - Parameters: `arr` (Array): The array of numbers.
   - Returns: `number`: The maximum value in the array.

4. `min(arr)`
   - Description: Returns the minimum value in the array.
   - Parameters: `arr` (Array): The array of numbers.
   - Returns: `number`: The minimum value in the array.

5. `unique(arr)`
   - Description: Removes duplicate values from the array and returns a new array with unique elements.
   - Parameters: `arr` (Array): The array of values.
   - Returns: `Array`: A new array with unique elements.

6. `clear()`
   - Description: Clears all elements from the array (returns an empty array).
   - Parameters: None
   - Returns: `Array`: An empty array.

7. `chunk(arr, size)`
   - Description: Splits the array into chunks of a specified size.
   - Parameters: `arr` (Array): The array to be chunked.
   - Returns: `Array`: An array of chunks.

8. `containsValue(arr, value)`
   - Description: Checks a value is present in array or not.
   - Parameters: `arr` (Array): The array to be chunked.
   - Returns: `value`: the value to check.

9. `reverseArray(arr)`
   - Description: reverses the array elements.
   - Parameters: `arr` (Array): The array to be chunked.
   - Returns: `value`: reversed array.




10. `intersect(arr1, arr2)`
    - Description: Returns an array of elements that are common to both arrays.
    - Parameters: `arr1` (Array): The first array.
    - Returns: `Array`: An array of elements that are common to both `arr1` and `arr2`.

