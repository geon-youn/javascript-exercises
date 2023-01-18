const palindromes = function (str) {
    const newStr = str.replace(/\W/g, '').toLowerCase();
    let mid = Math.round(newStr.length / 2);
    for (let i = 0; i < mid; i++) {
        if (newStr.charAt(i) !== newStr.charAt(newStr.length - i - 1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
