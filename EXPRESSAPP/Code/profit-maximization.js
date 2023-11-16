const profitMaximization = (inputs) =>{

  const results = [];

  for (const input of inputs) {
    const prices = input.split(' ').slice(1).map(Number);
    const profit = calculateMaxProfit(prices);
    results.push(profit);
  }
  return results;

}

function calculateMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      const potentialProfit = currentPrice - minPrice;
  
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfit;
  }



module.exports = {
    profitMaximization
}