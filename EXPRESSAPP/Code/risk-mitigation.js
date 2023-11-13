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
    var n = inputArr.length;
    var maxDiffArray = new Array();

    for(var i = n-1; i >= 0; i--) {
        var maxDiff = 0;
        for(var j = i-1; j >=0; j--) {
            maxDiff = Math.max(maxDiff, inputArr[i] - inputArr[j]);
        }
        maxDiffArray[i] = maxDiff;
    }

    maxDiffArray.sort();
    maxDiffArray.reverse();

    var res = 0;
    for(var i = 0 ; i < stratagies; i++) {
        res = res + maxDiffArray[i];
    }

    return res;

}

module.exports = {
    riskMitigation
}
