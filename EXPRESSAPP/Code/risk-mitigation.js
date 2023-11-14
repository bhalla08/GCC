const riskMitigation = (input) => {
    var res = new Array();
    for (var idx = 0; idx < input.length; idx++) {
        var inputArr = input[idx];
        var strArr = inputArr[0].split(" ");
        var a = inputArr[1].split(" ");
        res[idx] = calculate(parseInt(strArr[0]), a.map(Number));
    }
    return res;
}

function calculate(stratagies, inputArr) {
    if (inputArr.length == 0) return 0;

    if (stratagies > (inputArr.length / 2)) {
        let profit = 0;
        for (let i = 1; i < inputArr.length; i++) {
            if (inputArr[i] > inputArr[i - 1]) {
                profit += inputArr[i] - inputArr[i - 1];
            }
        }
        return profit;
    }
    else {
        let dp = new Array(inputArr.length).fill(0);
        let size = inputArr.length;
        for (let t = 1; t <= stratagies; t++) {
            let min = inputArr[0];
            let max = 0;
            for (let i = 0; i < size; i++) {
                min = Math.min(min, inputArr[i] - dp[i]);
                max = Math.max(max, inputArr[i] - min);
                dp[i] = max
            }
        }
        return dp.pop();
    }

}

module.exports = {
    riskMitigation
}
