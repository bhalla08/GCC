const fileOrg = function fileOrganization(input) {

    var result = new Array();
    for (var k = 0; k < input.length; k++) {
        var s = input[k];
        let answer = 0;
        let hashTable = {};
        for (let char of s) {
          hashTable[char] = (hashTable[char] || 0) + 1;
          if (hashTable[char] % 2 === 0) {
            answer += 2;
          }
        }
        result[k] = s.length > answer ? answer + 1 : answer;;
    }

    return result;
}

module.exports = {
    fileOrg
}
