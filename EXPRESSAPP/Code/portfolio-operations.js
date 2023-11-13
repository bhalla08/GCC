const portfolioOpetations = (input) => {
    var res = new Array();
    for (var idx = 0; idx < input.length; idx++) {
        var inputArr = input[idx];
        var strArr = inputArr[0].split(" ");
        var a = inputArr[1].split(" ");
        var b = inputArr[2].split(" ");
        res[idx] = calculate(parseInt(strArr[2]), a.map(Number), b.map(Number));
    }
    return res;
}

function calculate(x, a, b) {
    var a_index = 0;
    var b_index = 0;
    var count = 0;
    var sum = 0;

    while (b_index < b.length && sum + parseInt(b[b_index]) <= x) {
        sum += b[b_index];
        b_index++;
    }

    b_index--;
    count = b_index + 1;

    while (a_index < a.length && b_index < b.length) {
        sum += parseInt(a[a_index]);
        if (sum > x) {
            while (b_index >= 0) {
                sum -= parseInt(b[b_index]);
                b_index--;
                if (sum <= x) break;
            }

            if (sum > x && b_index < 0) {
                a_index--;
                break;
            }
        }
        count = Math.max(a_index + b_index + 2, count);
        a_index++;
    }

    return count;

}

module.exports = {
    portfolioOpetations
}
