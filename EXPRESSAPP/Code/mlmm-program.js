const mlmmProgram = (inputs) =>{

    const answer = [];
  
    for (const input of inputs) {
      const cutoff = parseInt(input[0]);
      const numScores = parseInt(input[1]);
      const scores = input[2].split(' ').map(Number);
  
      let currentSum = 0;
      let count = 0;
  
      for (const score of scores) {
        currentSum += score;
  
        if (currentSum < cutoff) {
          count++;
        } else {
          currentSum = 0;
        }
      }
  
      answer.push(count);
    }
    return answer;
  
  }
  
  
  
  
  
  module.exports = {
    mlmmProgram
  }