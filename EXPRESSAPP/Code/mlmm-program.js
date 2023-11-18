const mlmmProgram = (inputs) => {

  const answer = [];

  for (const input of inputs) {
    const cutoff = parseInt(input[0]);
    const numScores = parseInt(input[1]);
    const scores = input[2].split(' ').map(Number);
    answer.push(printDistSum(scores.sort(), scores.length, cutoff)-1);
  }
  return answer;
}

function distSumRec(arr,n,sum,currindex,s)
    {
        if (currindex > n)
            return;
   
        if (currindex == n) {
            s.add(sum);
            return;
        }
   
        distSumRec(arr, n, sum + arr[currindex],
                    currindex + 1, s);
        distSumRec(arr, n, sum, currindex + 1, s);
    }
     
    function printDistSum(arr,n, cutoff)
    {
        let s=new Set();
        var count = 0;
        distSumRec(arr, n, 0, 0, s);
        let s1=[...s]
          s1.sort(function(a,b){return a-b;})
        // Print the result
        for (let [key, value] of s1.entries())
        {
            if(value < cutoff) {
              count++;
            }
        }
        console.log(count);
          return count;
    }


module.exports = {
  mlmmProgram
}