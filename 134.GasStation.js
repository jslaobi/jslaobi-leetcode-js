var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas = totalGas - cost[i] + gas[i];
  }

  if (totalGas < 0) {
    return -1;
  }

  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas - cost[i] + gas[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
};
