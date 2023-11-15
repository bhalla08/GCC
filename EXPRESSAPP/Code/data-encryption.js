function encryptString(inputs) {
    let res = new Array();
    for (let idx = 0; idx < inputs.length; idx++) {
        input = inputs[idx].replace(/\s/g, '');
        // input = String(input).replace(/\s/g, '');
        let len = input.length;
        let rows = Math.floor(Math.sqrt(len));
        let cols = Math.ceil(Math.sqrt(len));
        if (rows * cols < len) rows++;
        let output = [];
        for (let i = 0; i < cols; i++) {
            let str = '';
            for (let j = 0; j < rows; j++) {
                let index = j * cols + i;
                if (index < len) str += input[index];
            }
            output.push(str);
        }
        res[idx] = output.join(' ');
    }
    return res;
}

module.exports = {
    encryptString
}