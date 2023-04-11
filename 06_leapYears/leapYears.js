const leapYears = function(year) {
    //check if divisible by 4 -> leap year
    //if divisible by 100 -> false
    //if divisible by 400 -> true
    if (year % 4 == 0) {
        //checks if the number is divisible by 100
        if ((year % 100 == 0)){
            //if year is divisble by 100 and 400 it is true
            if ((year % 400 == 0)){
                return true
            } else {
                //if not divisible by 400 return false
                return false
            }
        } else {
            //return true if the year is divisible by 4 and not 100
            return true
        }
        //return false if the year is not divisible by 4
        return false
    } 
    
    

};

// Do not edit below this line
module.exports = leapYears;
