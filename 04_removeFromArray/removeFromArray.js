const removeFromArray = function(array, num1, num2) {
    //assign argument to look for
    
    function removeItem(item) {
        //use indexof to go through the array
        if (array.indexOf(item) != -1) {
            //if found remove item and return array
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    
    removeItem(num1);
    if (num2 != undefined) {
        removeItem(num2)
    }

    //if not, return original array
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
