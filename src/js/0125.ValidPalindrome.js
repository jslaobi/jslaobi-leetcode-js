var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");

  if (s.length < 2) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
