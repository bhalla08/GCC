const mlmmProgram = (inputs) => {

  const answer = [];

  for (const input of inputs) {
    const cutoff = parseInt(input[0]);
    const numScores = parseInt(input[1]);
    var scores = input[2].split(' ').map(Number);
    console.log(scores)
    answer.push(countContiguousSubsetsWithSum(scores, cutoff));
  }
  return answer;
}

function countContiguousSubsetsWithSum(arr, targetSum) {
  let count = 0;
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Shrink the window as long as the sum exceeds the target
    while (currentSum >= targetSum && currentSum>0) {
      currentSum -= arr[start];
      start++;
    }

    // Every time the current window's sum is less than the target, update the count
    count += end - start + 1;
  }

  return count;
}


module.exports = {
  mlmmProgram
}