var findRepeatedDnaSequences = function (s) {
  const map = new Map();
  const result = [];
  let i = 0;
  while (i + 10 <= s.length) {
    const dna = s.substring(i, i + 10);
    if (map.get(dna) === undefined) {
      map.set(dna, 1);
    } else if (map.get(dna) === 1) {
      result.push(dna);
      map.set(dna, 2);
    } else {
      map.set(dna, map.get(dna) + 1);
    }

    i++;
  }

  return result;
};
