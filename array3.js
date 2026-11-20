// Consider the leftmost and rightmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in an given array. (Efficiency is not a priority.)

// Examples 

// maxSpan ([1, 2, 1, 1, 3]) → 4
// maxSpan ([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan ([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(nums){

}

// Retrurn an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

// Examples

// fix34 ([1, 3, 1, 4]) → [1, 3, 4, 1]
// fix34 ([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]
// fix34 ([3, 2, 2, 4]) → [3, 4, 2, 2]

function fix34(nums){

}

// (This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.

// Examples

// fix45 ([5, 4, 9, 4, 9, 5]) → [9, 4, 5, 4, 5, 9]
// fix45 ([1, 4, 1, 5]) → [1, 4, 5, 1]
// fix45 ([1, 4, 1, 5, 5, 4, 1]) → [1, 4, 5, 1, 1, 4, 5]

function fix45(nums){

}

// Given an non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// Examples 

// canBalance ([1, 1, 1, 2, 1]) → true 
// canBalance ([2, 1, 1, 2, 1]) → false 
// canBalance ([10, 10]) → true 

function canBalance(nums){

}

// Given two arrays of numbers sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order. 

// Examples 

// linearIn ([1, 2, 4, 6], [2, 4]) → true 
// linearIn ([1, 2, 4, 6], [2, 3, 4]) → false 
// linearIn ([1, 2, 4, 4, 6], [2, 4]) → true 

function linearIn(outer, inner){

}

// Given n>= 0, create an array length n*n with the following pattern, shown here for n=3 : [0, 0, 1, 0, 2, 1, 3, 2, 1] (spaces added to show the 3 groups). 

// Examples 

// squareUp(3) → [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) → [0, 1, 2, 1]
// squareUp(4) → [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

function squareUp(n){

}
