const removeFromArray = function(array, number) {
    //assign argument to look for
    //use indexof to go through the array
    if (array.indexOf(number)) {
        let index = array.indexOf(number);
        array.splice(index, 1);
    }
    return array;
    //loop through array to find the argument
    

    //if found remove item and return array

    //if not, return original array

};

// Do not edit below this line
module.exports = removeFromArray;
