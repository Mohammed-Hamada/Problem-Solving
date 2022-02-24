/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] || nums[i] == nums[i - 1]) continue;
    else return nums[i];
  }
};
console.log(singleNumber([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));
