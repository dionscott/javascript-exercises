const fibonacci = function(number) {
    //fibonacci array starts as [1,2]
    let fib = [1,1];
    let index = number - 1;
    //check the index of the array
    if (fib[index]) {
        return fib[index];
    }

    //until index == array.length continue finding fib numbers
    for (let i = 2; i <= index; i++) {
        //add two numbers before i and push into fib
        sum = (fib[i - 1] + fib[i - 2])
        fib.push(sum)
    }
        
    return Number(fib.slice(-1))

}

// Do not edit below this line
module.exports = fibonacci;
