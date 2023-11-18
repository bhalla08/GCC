const mlmmProgram = (inputs) => {

  const answer = [];

  for (const input of inputs) {
    const cutoff = parseInt(input[0]);
    const numScores = parseInt(input[1]);
    const scores = input[2].split(' ').map(Number);
    answer.push(findUniqueSubsets(scores.sort(), cutoff));
  }
  return answer;
}

function findUniqueSubsets(nums, target) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the input array

  backtrack([], 0, nums, target);
  return result.length-1;

  function backtrack(currentSubset, start, nums, target) {
      if (currentSubset.reduce((sum, num) => sum + num, 0) >= target) {
          return;
      }

      result.push([...currentSubset]);

      for (let i = start; i < nums.length; i++) {
          // Skip duplicates
          if (i > start && nums[i] === nums[i - 1]) {
              continue;
          }

          currentSubset.push(nums[i]);
          backtrack(currentSubset, i + 1, nums, target);
          currentSubset.pop();
      }
  }
}


module.exports = {
  mlmmProgram
}