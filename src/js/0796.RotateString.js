var rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false;
  }

  const str = A + A;

  // indexOf
  return str.includes(B);
};
