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
  //takes an array and multiplies them by each other
  let sum = 0;
  let length = array.length

  //multiply first two in array
  let first = array[0];
  let second = array[1];
  sum = first * second;
  //if the array is longer iterate and multiply
  if (length > 2) {
    for (let i = 2; i < length; i++) {
      sum *= array[i];
    }
  }

  //return sum
  return sum;
};

const power = function(number, power) {
  let answer = number ** power;
  return answer
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
