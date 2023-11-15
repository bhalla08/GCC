const coinChange = (inputs) =>{
    var results = new Array;

  for (const input of inputs) {
    const [amount, numCoins] = input[0].split(' ').map(Number);
    const coins = input[1].split(' ').map(Number);

    const waysToMakeChange = countWaysToMakeChange(amount, numCoins, coins);
    results.push(waysToMakeChange);
  }

    return results;
}


function countWaysToMakeChange(amount, numCoins, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
  
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] += dp[i - coin];
      }
    }
  
    return dp[amount];
  }


  module.exports = {
    coinChange
}