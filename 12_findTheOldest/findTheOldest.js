const findTheOldest = function(ppl) {
    return ppl.reduce((curr, next) => curr = (next.yearOfDeath ?? (new Date()).getFullYear()) - next.yearOfBirth > (curr.yearOfDeath ?? (new Date()).getFullYear()) - curr.yearOfBirth ? next : curr, ppl[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
