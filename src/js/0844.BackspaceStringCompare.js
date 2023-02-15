var backspaceCompare = function (S, T) {
  let i = S.length - 1,
    j = T.length - 1;
  let backspaceS = 0,
    backspaceT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === "#") {
        backspaceS++;
        i--;
      } else if (backspaceS > 0) {
        backspaceS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (T[j] === "#") {
        backspaceT++;
        j--;
      } else if (backspaceT > 0) {
        backspaceT--;
        j--;
      } else {
        break;
      }
    }

    if (S[i] !== T[j]) {
      return false;
    }
    if ((i < 0 && j > 0) || (i > 0 && j < 0)) {
      return false;
    }
    i--;
    j--;
  }

  return true;
};
