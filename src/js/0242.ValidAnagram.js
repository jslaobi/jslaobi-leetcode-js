var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }

    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      map.set(t[i], -1);
    }
  }

  for (const letter of map) {
    if (letter[1] !== 0) {
      return false;
    }
  }

  return true;
};
