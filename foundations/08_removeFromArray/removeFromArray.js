const removeFromArray = function(array, ...args) {
    // (...) is a "rest" operator, allowing the function to accept an unspecified number of optional arguments
    // this makes args variable an array.

    //more efficient/optimized method in solution folders.

    //we can use index to remove the specific element
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
        let ind = array.indexOf(args[i]);

        //safeguard against removing last element if ind is not found (-1)
        //we want to remove ALL values of arg in array, e.g. remove all 2s in array
        while (ind != -1) {
            //splice(index, number of elements to remove, optional element to add)
            //since we want to remove the specific element, we set the number to 1, i.e. splice(index, 1) 
            array.splice(ind, 1)

            //first removal is now done, get the next index of arg.
            ind = array.indexOf(args[i]);   //this will be -1 if not found.
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;