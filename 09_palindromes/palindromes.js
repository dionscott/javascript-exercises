const palindromes = function (string) {
    //remove punctuation and merge string
    let simpleString = string.replace(/[" ",!]/g, "").toLowerCase();
    //find the reverse of the string
    let reverse = simpleString.split("").reverse().join("");

    //check if it matches the reverse
    if (simpleString == reverse) {
        return true;
    }
    return false;
    //return true if yes and false if no

};

// Do not edit below this line
module.exports = palindromes;
