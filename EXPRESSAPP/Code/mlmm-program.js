const mlmmProgram = function maxBoW (input) {

    const result = [];
  
    for (const input_data of input) {
      const cutoff = parseInt(input_data[0]);
      const scores = input_data[2].split(' ').map(Number);
      const n = scores.length;

      let total = 0;
      let count = 0;
      let left = 0;

      for (let right = 0; right < n; right++) {
          total += scores[right];

          while (total > cutoff) {
              total -= scores[left];
              left += 1;
          }

          count += (right - left + 1);
      }

      result.push(count);
  }

  return result;
}

// const output = maxBoW(input);
// console.log(JSON.stringify(output, null, 4));


  module.exports = {
    mlmmProgram
  }