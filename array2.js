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
