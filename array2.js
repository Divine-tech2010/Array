// Return the index of the minimum value in an array. The input array will have at least one element in it.

// Examples

// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums) {
   let minIndex = 0;
  let minValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minValue) {
      minValue = nums[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// Return the number of even numbers in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples

// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0

function countEvens(nums) {
 {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      count++;
    }
  }

  return count; 
}

// Given an array length 1 or more of numbers, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples

// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8

function bigDiff(nums) {
  let minValue = Math.min(...nums);
  let maxValue = Math.max(...nums);


  return maxValue - minValue;
}