var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) {
    return image;
  }
  const oldColor = image[sr][sc];

  function dfs(sr, sc) {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[0].length ||
      image[sr][sc] !== oldColor
    ) {
      return;
    }
    image[sr][sc] = newColor;
    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }

  dfs(sr, sc);
  return image;
};
