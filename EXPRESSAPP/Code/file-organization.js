const fileOrg = function fileOrganization(input) {

    var result = new Array();
    for (var k = 0; k < input.length; k++) {
        var s = input[k];
        var n = s.length;
        var index = new Map();
        let answer = 0;
        let mask = 0;
        
        index.set(mask, -1);
        for (let i = 0; i < n; i++) {
            const temp = s.charCodeAt(i) - 97;

            mask ^= (1 << temp);

            if (index.has(mask)) {
                answer = Math.max(answer, i - index.get(mask));
            }
            else
                index.set(mask, i);

            for (let j = 0; j < 26; j++) {
                const mask2 = mask ^ (1 << j);
                if (index.has(mask2)) {
                    answer = Math.max(answer, i - index.get(mask2));
                }
            }
        }
        result[k] = answer;
    }

    return result;
}

module.exports = {
    fileOrg
}
