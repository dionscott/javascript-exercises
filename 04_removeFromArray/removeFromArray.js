const removeFromArray = function(array, num1, num2) {
    //assign argument to look for
    //use indexof to go through the array
    function removeItem(item) {
        if (array.indexOf(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    
    removeItem(num1)
    // if (num2 != undefined) {

    // }
    return array;
    //loop through array to find the argument
    

    //if found remove item and return array

    //if not, return original array

};

// Do not edit below this line
module.exports = removeFromArray;
