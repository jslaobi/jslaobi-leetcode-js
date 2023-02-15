var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let curr = intervals[0];
  let result = [];

  for (let interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]);
    } else {
      result.push(curr);
      curr = interval;
    }
  }

  if (curr.length !== 0) {
    result.push(curr);
  }

  return result;
};
