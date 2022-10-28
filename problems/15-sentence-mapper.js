/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function(sentence, callback) {
    // split the original sentence into a series of words
    let words = sentence.split(" ");

    for (let i=0; i<words.length; i++){
        // apply callback to each word and then reasign the new value to the current element 
        words[i] = callback(words[i]);
    }

    // join the words and return the new sentence
    return words.join(" ")


};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;
