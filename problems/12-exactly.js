/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

let exactly = function(array, number, callback) {

    // set a counter at zero
    let counter = 0;

    // loop through array 
    for (let i=0; i<array.length; i++){
        // check if the callback on element returns true, increment counter if it does
        if (callback(array[i])==true){
            counter++
        }
    }

    // check if the number of true elements matches the number provided in function
    if (counter==number){
        //return true for exact match
        return true;
    } else{
        //return false if no match
        return false;
    }


};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
