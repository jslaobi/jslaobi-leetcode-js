var maxProfit = function (k, prices) {
  if (prices.length === 0) {
    return 0;
  }
  const dp = Array.from(Array(k + 1), () => new Array(prices.length));
  for (let i = 0; i < prices.length; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i < k + 1; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i < k + 1; i++) {
    let maxProfit = -prices[0];
    for (let j = 1; j < prices.length; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxProfit);
      maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j]);
    }
  }

  return dp[k][prices.length - 1];
};
