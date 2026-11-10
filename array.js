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