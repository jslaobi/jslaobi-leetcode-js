var intersection = function (nums1, nums2) {
  const set = new Set();

  const result = new Set();

  for (num of nums1) {
    set.add(num);
  }

  for (num of nums2) {
    if (set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};
