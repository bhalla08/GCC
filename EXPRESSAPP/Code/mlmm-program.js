const mlmmProgram = (inputs) => {

  const answer = [];

  for (const input of inputs) {
    const cutoff = parseInt(input[0]);
    const numScores = parseInt(input[1]);
    var scores = input[2].split(' ').map(Number);
    scores = scores.sort();
    answer.push(findMaxBooks(cutoff, scores));
  }
  return answer;
}

function findMaxBooks(cutoff, scores) {
  const n = scores.length;
  let maxBooks = 0;
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
      currentSum += scores[i];

      if (currentSum < cutoff) {
          maxBooks++;
      } else {
          currentSum = Math.max(0, currentSum - scores[i]);
      }
  }

  return maxBooks;
}


module.exports = {
  mlmmProgram
}