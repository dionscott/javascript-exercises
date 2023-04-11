const removeFromArray = function(array, item1, item2, item3, item4) {
    //assign argument to look for
    
    function removeItem(item) {
        //use indexof to go through the array
        if (array.indexOf(item) != -1) {
            //if found remove item and return array
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    
    removeItem(item1);
    //check second argument and see if it has a function
    if (item2 != undefined) {
        removeItem(item2)
    }
    //check third argument and see if it has a function
    if (item3 != undefined) {
        removeItem(item3)
    }
    //check fourth argument and see if it has a function
    if (item4 != undefined) {
        removeItem(item4)
    }

    //if not, return original array
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
