const sumAll = function(num1, num2) {
    //takes 2 integers and returns the sum of all numbers b/w them
    let sum = 0;
    let low;
    let high;

    //check if the number is negative and returns error if true
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    //find the lowest number
    if (num1 < num2) {
        low = num1;
        high = num2;
    } else {
        low = num2;
        high = num1;
    }
    //loop through the numbers and add them
    
    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
