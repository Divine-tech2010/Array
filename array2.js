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

// Return the "centered" average of an array of numbers, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use Math.floor() when computing the average to produce a whole-number result. You may assume that the array is length 3 or more.

// Examples

// centeredAverage([1, 2, 3, 4, 100]) → 3
// centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
// centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(nums) {
  let minValue = Math.min(...nums);
  let maxValue = Math.max(...nums);
  let sum = nums.reduce((acc, num) => acc + num, 0);

  
  sum -= minValue;
  sum -= maxValue;


  return Math.floor(sum / (nums.length - 2));
}}

// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  let sum = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 13) {
      i += 2;
    } else {
      sum += nums[i];
      i++;
    }
  }

  return sum;
}

// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

// Examples

// sum67([1, 2, 2]) → 5
// sum67([1, 2, 2, 6, 99, 99, 7]) → 5
// sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums) {
  let sum = 0;
  let inBlock = false; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      inBlock = true; 
    } else if (inBlock && nums[i] === 7) {
      inBlock = false;
    } else if (!inBlock) {
      sum += nums[i]; 
    }
  }

  return sum;
}

