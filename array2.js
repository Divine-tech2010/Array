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

// Given an array of numbers, return true if the array contains a 2 next to a 2 somewhere.

// Examples

// has22([1, 2, 2]) → true
// has22([1, 2, 1, 2]) → false
// has22([2, 1, 2]) → false

function has22(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

// Given an array of numbers, return true if the array contains no 1's and no 3's.

// Examples

// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false

function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 || nums[i] === 3) {
      return false; // if we find a 1 or 3, fail immediately
    }
  }
  return true;
}

// Given an array of numbers, return true if the sum of all the 2's in the array is exactly 8.

// Examples

// sum28([2, 3, 2, 2, 4, 2]) → true
// sum28([2, 3, 2, 2, 4, 2, 2]) → false
// sum28([1, 2, 3, 4]) → false

function sum28(nums) {
   let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      sum += nums[i];
    }
  }

  return sum === 8;
}

// Given an array of numbers, return true if the number of 1's is greater than the number of 4's

// Examples

// more14([1, 4, 1]) → true
// more14([1, 4, 1, 4]) → false
// more14([1, 1]) → true

function more14(nums) {
  let count1 = 0;
  let count4 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count1++;
    } else if (nums[i] === 4) {
      count4++;
    }
  }

  return count1 > count4;
}

// Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array.

// Examples

// prependSum([1, 2, 4, 4]) → [3,4,4]
// prependSum([3, 3, 0]) → [6,0]
// prependSum([1, 1, 1, 1, 1]) → [2,1,1,1]

function prependSum(nums) {
let sum = nums[0] + nums[1];


  nums.splice(0, 2, sum);

  return nums;
}

// Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];

// Examples

// fizzArray(4) → [0,1,2,3]
// fizzArray(1) → [0]
// fizzArray(10) → [0,1,2,3,4,5,6,7,8,9]

function fizzArray(n) {
  let myArray = [];

  for (let i = 0; i < n; i++) {
    myArray.push(i); // add numbers from 0 up to n-1
  }

  return myArray;
}

// Given an array of numbers, return true if every element is a 1 or a 4.

// Examples

// only14([1, 4, 1, 4]) → true
// only14([1, 4, 2, 4]) → false
// only14([1, 1]) → true

function only14(nums) {
   for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1 && nums[i] !== 4) {
      return false; 
    }
  }
  return true;
}