var maxSubArray = function (nums) {
  const memo = [];
  memo[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);
  }

  let max = nums[0];

  for (let i = 1; i < memo.length; i++) {
    max = Math.max(max, memo[i]);
  }

  return max;
};
