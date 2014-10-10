/*
* Writing a refactored form of our String Calculator function.
* should implement a fromEnglish() function that translates String to Number
* in a single step.
*/

function fromEnglish(words){
var numbers = {'zero': 0, 'one': 1, 'two': 2};
return numbers[words];

}
console.log(fromEnglish('one'))
console.log(fromEnglish('two'))
