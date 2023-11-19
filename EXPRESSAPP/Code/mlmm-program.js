const mlmmProgram = (inputs) => {

  const answer = [];

  for (const input of inputs) {
    const cutoff = parseInt(input[0]);
    const numScores = parseInt(input[1]);
    var scores = input[2].split(' ').map(Number);
    scores = scores.sort();
    answer.push(findMaxBooks(cutoff, scores, numScores));
  }
  return answer;
}

function findMaxBooks(cutoff, scores, numModels) {
  const dp = Array.from({ length: numModels + 1 }, () => Array(cutoff + 1).fill(0));

  for (let i = 1; i <= numModels; i++) {
    for (let j = 0; j <= cutoff; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= scores[i - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - scores[i - 1]] + 1);
      }
    }
  }

  return dp[numModels][cutoff];
}


module.exports = {
  mlmmProgram
}