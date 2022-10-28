/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, callback) {
    
    // set first item in array as the smallest
    let smallest=array[0];
    // starting from second item check if each item is less than the smallest
    for (let i=1; i<array.length; i++){
        // check if current item is less than smallest
        if (array[i]<smallest) {
            // if it is then make it the smallest item
            smallest = array[i];
        }
    }
    // check if the callback is passed into function
    if (callback == undefined){
        // if not then return smallest number
        return smallest;
    } else {
        // if callback return result of callback on smallest number;
        return callback(smallest);
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
