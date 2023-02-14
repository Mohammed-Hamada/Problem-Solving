/**
 * Check if the given array is in sorted order.
 * @param {Array} array - The input array to check.
 * @param {number} index - The starting index for the comparison.
 * @returns {number} - Returns 1 if the array is sorted, 0 otherwise.
 */
function isArrayInSortedOrder(array, index) {
  // If the array has only one element or the index is less than 0, return 1 (sorted by default).
  if (array.length === 1 || index < 0) {
    return 1;
  }
  // If the current element is smaller than the previous element, return 0 (not sorted).
  if (array[index - 1] < array[index - 2]) {
    return 0;
  }
  // Recursively check the previous element in the array.
  return isArrayInSortedOrder(array, index - 1);
}

console.log(isArrayInSortedOrder([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // Output: 1 (because the array is sorted)
