// Given an integer array nums
// find a subarray that has the largest product,
// and return the product.

// the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function (nums) {
  // Max product in the current contiguous array
  let currentMax = nums[0];
  // Min product in the current contiguous array.
  // We need this value in case we encounter 2 negative numbers
  // whose product could potentially give us the max product of the entire array.
  let currentMin = nums[0];
  // Max product of a contiguous array
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = currentMax;
    // Because we are looking for a contiguous subarray product
    currentMax = Math.max(
      Math.max(currentMax * nums[i], currentMin * nums[i]),
      nums[i]
    );
    // Use temp here in case the previous currentMax was negative
    currentMin = Math.min(
      Math.min(temp * nums[i], currentMin * nums[i], nums[i])
    );
    // Record highest max at the end of every contiguous subarray
    finalMax = Math.max(currentMax, finalMax);
  }

  return finalMax;
};
