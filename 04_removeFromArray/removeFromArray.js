const removeFromArray = function(arr, ...idx) {
    let ret = [];
    for (let i of arr) {
        if (idx.includes(i)) continue;
        ret.push(i);
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
