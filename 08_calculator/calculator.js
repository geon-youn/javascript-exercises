const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, i) => total += i, 0);
};

const multiply = function(a) {
  return a.reduce((total, i) => total *= i, 1);
};

const power = function(m, e) {
  return m ** e;
};

const factorial = function(n) {
	let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
