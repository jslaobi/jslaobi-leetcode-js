var totalFruit = function (tree) {
  let max = 1;
  const map = new Map();
  let j = 0;

  for (let i = 0; i < tree.length; i++) {
    map.set(tree[i], i);
    if (map.size > 2) {
      let minIndex = tree.length - 1;
      for (const fruit of map) {
        if (fruit[1] < minIndex) {
          minIndex = fruit[1];
        }
      }

      map.delete(tree[minIndex]);
      j = minIndex + 1;
    }

    max = Math.max(max, i - j + 1);
  }

  return max;
};
