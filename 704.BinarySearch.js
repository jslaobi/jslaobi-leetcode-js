var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
