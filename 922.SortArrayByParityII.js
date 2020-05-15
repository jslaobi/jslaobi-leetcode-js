var sortArrayByParityII = function (A) {
  let j = 1;
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1 && j < A.length) {
        j += 2;
      }

      [A[i], A[j]] = [A[j], A[i]];
    }
  }

  return A;
};
