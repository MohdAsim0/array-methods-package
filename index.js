// index.js

// Returns the sum of all elements in the array
export function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Returns the average of all elements in the array
export function average(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length;
}

// Returns the maximum value in the array
export function max(arr) {
  return Math.max(...arr);
}

// Returns the minimum value in the array
export function min(arr) {
  return Math.min(...arr);
}

// Returns an array of elements that are common to both arrays
export function intersect(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

// Removes duplicate values from the array
export function unique(arr) {
  return [...new Set(arr)];
}

// Clears all elements from the array (returns an empty array)
export function clear() {
  return [];
}

// Splits the array into chunks of a specified size
export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Checks a value is present in array or not
export function containsValue(arr, value) {
  return arr.includes(value);
}

// reverses the array elements
export function reverseArray(arr) {
  return arr.reverse();
}
