const reverseString = function(string) {
    let seperatedString = string.split("")
    let backwards = [];
    for (let i = seperatedString.length; i > 0; i--) {
        backwards += seperatedString.pop();
    }
    return backwards.toString();
};

// Do not edit below this line
module.exports = reverseString;
