const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum
};

const subtract = function(num1, num2) {
  let diff = num1 - num2;
  return diff;
};

const sum = function(array) {
  let sum = 0;
  //finds length of array
  let length = array.length - 1;
	for (let i = length; i >= 0; i--) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let sum = 0;
  //takes an array and multiplies them by each other

};

const power = function() {
	
};

const factorial = function() {
	
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
