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

// Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the string form of most types.

// Examples

// fizzArray2(4) → ["0","1","2","3"]
// fizzArray2(10) → ["0","1","2","3","4","5","6","7","8","9"]
// fizzArray2(2) → ["0","1"]

function fizzArray2(n) {
  let myArray = [];

  for (let i = 0; i < n; i++) {
    myArray.push(String(i)); 
  }

  return myArray;
}

// Given an array of numbers, return true if it contains no 1's or it contains no 4's.

// Examples

// no14([1, 2, 3]) → true
// no14([1, 2, 3, 4]) → false
// no14([2, 3, 4]) → true

function no14(nums) {
  let has1 = false;
  let has4 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      has1 = true;
    }
    if (nums[i] === 4) {
      has4 = true;
    }
  }
  return !has1 || !has4;
}

// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

// Examples

// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    
    if (nums[i] !== val && nums[i + 1] !== val) {
      return false; 
    }
  }
  return true;
}

// Given an array of numbers, return true if the array contains a 2 next to a 2 or a 4 next to 4, but not both.

// Examples

// either24([1, 2, 2]) → true 
// either24([4, 4, 1]) → true 
// either24([4, 4, 1, 2, 2]) → false

function either24(nums) {

}

// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal. 

// Examples

// matchUp ([1, 2, 3], [2, 3, 10]) → 2
// matchUp ([1, 2, 3], [2, 3, 5]) → 3
// matchUp ([1, 2, 3], [2, 3, 3]) → 2

function matchUp(nums1, nums2) {

}

// Given an array of numbers, return true if the array contains two 7's next to each other, or there are two 7's separated by one Element, such as with [7, 1, 7].

// Examples 

// has77([1, 7, 7]) → true 
// has77([1, 7, 1, 7]) → true 
// has77([1, 7, 1, 1, 7]) → false 

function has77(nums) {

}

// Given an array of numbers, return true if there is a 1 in the array with a 2 somewhere later in the array. 

// Examples 

// has12([1, 3, 2]) → true 
// has22([3, 1, 2]) → true 
// has22([[3, 1, 4, 5, 2]]) → true  

function has12(nums) {

}

// Given an array of numbers, return true if the array contains either 3 even or 3 odd values all next to each other. 

// Examples 

// modThree([2, 1, 3, 5]) → true 
// modThree([2, 1, 2, 5]) → false 
// modThree([2, 4, 2, 5]) → true 

function modThree(nums) {

}

// Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the valuie in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.

// Examples

// findTheMedian ([4, 9, 9, 2, 1, 5]) → 5.5
// findTheMedian ([1, 5, 3, 1, 5]) → 3
// findTheMedian ([10, 12, 15]) → 12

function findTheMedian(nums) {

}

// Given an array of numbers, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

// Examples 

// haveThree ([3, 1, 3, 1, 3]) → true 
// haveThree ([3, 1, 3, 3]) → false 
// haveThree ([3, 4, 3, 3, 4]) → false 

function haveThree(nums) {

}

// Given an array of numbers, return true if every 2 that appears in the array is next to another 2.

// Examples 

// twoTwo ([1, 2, 2, 3]) → true 
// twoTwo ([2, 2, 4]) → true 
// twoTwo ([2, 2, 4, 2]) → false

function twoTwo(nums) {

}

// Return true if the group of N numbers at the start and end of the array are the same. For example, with [5, 6, 45, 99, 13, 5, 6], the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is the range 0..nums.length inclusive.For

// Examples

// sameEnds2 ([5, 6, 45, 99, 13, 5, 6], 1) → false 
// sameEnds2 ([5, 6, 45, 99, 13, 5, 6], 2) → true 
// sameEnds2 ([5, 6, 45, 99, 13, 5, 6], 3) → false 

function sameEnds2(nums, len) {

}

// Return true if the array contains, somewhere, three increasing adjacent numbers like ....4, 5, 6, ... or 23, 24, 25.

// Examples 

// tripleUp ([1, 4, 5, 6]) → true 
// tripleUp ([1, 2, 3]) → true
// tripleUp ([1, 2, 4]) → false 

function tripleUp(nums) {

}

// Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9]. The end number will be greater or equal to the start number. Note that a length- 0 array is valid.

// Examples

// fizzArray3 (5, 10) → [5, 6, 7, 8, 9]
// fizzArray3 (11, 18) → [11, 12, 13, 14, 15, 16, 17]
// fizzArray3 (1, 3) → [1, 2]

function fizzArray3(start, end) {

}

// Return an array that is "left shifted" by one -- so [6, 2, 5, 3] returns [2, 5, 3, 6]. You may modify and return the given array, or return a new array. 

// Examples 

// shiftLeft ([6, 2, 5, 3]) → [2, 5, 3, 6]
// shiftLeft ([1, 2]) → [2, 1]
// shiftLeft ([1]) → [1]

function shiftLeft() {

}

// For each multiple of 10 in the given array change all the values following it to be that multiple of 10, until encountering another multiple of 10. So [2, 10, 3, 4, 20, 5] yields [2, 10, 10, 10, 20, 20].For

// Examples

// tenRun ([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
// tenRun ([10, 1, 20, 2]) → [10, 10, 20, 20]
// tenRun ([10, 1, 9, 20]) → [10, 10, 10, 20]

function tenRun(nums){

}

// Given a non-empty array of numbers, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4.

// Examples

// pre4 ([1, 2, 4, 1]) → [1, 2]
// pre4 ([3, 1, 4]) → [3, 1]
// pre4 ([1, 4, 4]) → [1]

function pre4(nums){

}

// Given an non-empty array of numbers, return a new array containing the elements from the original array that come after the the last 4 in the original array. The original array will contain at least one 4.

// Examples 

// post4 ([2, 4, 1, 2]) → [1, 2]
// post4 ([4, 1, 4, 2]) → [2]
// post4 ([4, 4, 1, 2, 3]) → [1, 2, 3]

function post4(nums){

}

// We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

// Examples

// notAlone ([1, 2, 3], 2) → [1, 3, 3]
// notAlone ([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
// notAlone ([3, 4], 3) → [3, 4]

function notAlone(nums, val){

}