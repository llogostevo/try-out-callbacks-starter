/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

// set callbacks as an array to capture the rest arguments of callbacks
let chainMap = function(value, ...callbacks) {
    // set the first result to be the first callback
    // note the ability to call the parameter within brackets next to the array call 
    let result = callbacks[0](value);
    // loop thorugh each of the callback elements starting at the second callback argument
    for (let i=1; i <callbacks.length; i++){
        // pass in the result of the previous callback into the the current callback
        result = callbacks[i](result);
    }

    // return the final result
    return result;
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
