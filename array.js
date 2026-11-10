// Given an array of numbers, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// Given an array of numbers, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums) {
  return nums.length >= 1 && nums[0] === nums[nums.length - 1];
}

// Return a number array length 3 containing the first 3 digits of pi, [3, 1, 4].

// Examples

// makePi() → [3,1,4]

function makePi() {
  return [3, 1, 4];
}

// Given 2 arrays of numbers, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// Examples

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b) {
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}

// Given an array of numbers length 3, return the sum of all the elements.

// Examples

// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

function sum3(nums) {
  return nums[0] + nums[1] + nums[2];
}

// Given an array of numbers length 3, return an array with the elements "rotated left" so [1, 2, 3] yields [2, 3, 1].

// Examples

// rotateLeft3([1, 2, 3]) → [2,3,1]
// rotateLeft3([5, 11, 9]) → [11,9,5]
// rotateLeft3([7, 0, 0]) → [0,0,7]

function rotateLeft3(nums) {
  return [nums[1], nums[2], nums[0]];
}

// Given an array of numbers length 3, return a new array with the elements in reverse order, so [1, 2, 3] becomes [3, 2, 1].

// Examples

// reverse3([1, 2, 3]) → [3,2,1]
// reverse3([5, 11, 9]) → [9,11,5]
// reverse3([7, 0, 0]) → [0,0,7]

function reverse3(nums) {
  return [nums[2], nums[1], nums[0]];
}

// Given an array of numbers length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples

// maxEnd3([1, 2, 3]) → [3,3,3]
// maxEnd3([11, 5, 9]) → [11,11,11]
// maxEnd3([2, 11, 3]) → [3,3,3]

function maxEnd3(nums) {
  let larger = Math.max(nums[0], nums[nums.length - 1]);
  return [larger, larger, larger];
}

// Given an array of numbers, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

// Examples

// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2

function sum2(nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + nums[1];
}

// Given 2 number arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples

// middleWay([1, 2, 3], [4, 5, 6]) → [2,5]
// middleWay([7, 7, 7], [3, 8, 0]) → [7,8]
// middleWay([5, 2, 9], [1, 4, 5]) → [2,4]

function middleWay(a, b) {
 return [a[1], b[1]];
}

// Given an array of numbers, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples

// makeEnds([1, 2, 3]) → [1,3]
// makeEnds([1, 2, 3, 4]) → [1,4]
// makeEnds([7, 4, 6, 2]) → [7,2]

function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}

// Given a number array length 2, return true if it contains a 2 or a 3.

// Examples

// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false

function has23(nums) {
  return nums.includes(2) || nums.includes(3);
}

// Given a number array length 2, return true if it does not contain a 2 or 3.

// Examples

// no23([4, 5]) → true
// no23([4, 2]) → false
// no23([3, 5]) → false

function no23(nums) {
  return !nums.includes(2) && !nums.includes(3);
}

// Given a number array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

// Examples

// makeLast([4, 5, 6]) → [0,0,0,0,0,6]
// makeLast([1, 2]) → [0,0,0,2]
// makeLast([3]) → [0,3]

function makeLast(nums) {
 let newArr = new Array(nums.length * 2).fill(0);
 newArr[newArr.length - 1] = nums[nums.length - 1];
  return newArr;
}


