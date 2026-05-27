const reverseString = function(string) {
    //remember that strings are immutable, thus cannot be reversed directly in-place.
    //simple method: access each index's char and append.
    let result = "";        //let => able to be changed later
    let length = string.length;

    for (let i = length - 1; i >= 0; i--) {
        result = result + string.charAt(i);
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;