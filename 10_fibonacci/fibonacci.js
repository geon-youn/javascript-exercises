const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }

    let preprev = 0;
    let prev = 1;
    let current = 1;
    for (let i = 1; i < n; i++) {
        current = prev + preprev;
        preprev = prev;
        prev = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
