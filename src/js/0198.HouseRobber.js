var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let result = 0;
  const memo = [];
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }

  return memo[nums.length - 1];
};
