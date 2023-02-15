var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
