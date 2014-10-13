/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

/**
* Assignment 11 - Refactor using Mocha/Chai testing, and function fromEnglish()
* should work in a single step.
*/



var toIntegers = {'zero': 0, 'one': 1, 'two': 2, 'three':3, 'four':4,
'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10}

var stringCalculator = {

  fromEnglish: function(number){
    return toIntegers[number];
  }//END fromEnglish

} //END stringCalculator

// var toIntegers = {'zero': 0, 'one': 1, 'two': 2, 'three':3, 'four':4,
// 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10};
//
// function fromEnglish(a, b){
//
//   return (toIntegers[a] * toIntegers[b]);
//
// }//END fromEnglish




///TESTING////
var assert = require('chai').assert

describe('stringCalculator', function(){
  it('returns the integer form of a number in English form', function(){
    assert.equal(stringCalculator.fromEnglish('zero'), 0)
    assert.equal(stringCalculator.fromEnglish('one'), 1)
    assert.equal(stringCalculator.fromEnglish('two'), 2)
    assert.equal(stringCalculator.fromEnglish('three'), 3)
    assert.equal(stringCalculator.fromEnglish('four'), 4)
    assert.equal(stringCalculator.fromEnglish('five'), 5)
    assert.equal(stringCalculator.fromEnglish('six'), 6)
    assert.equal(stringCalculator.fromEnglish('seven'), 7)
    assert.equal(stringCalculator.fromEnglish('eight'), 8)
    assert.equal(stringCalculator.fromEnglish('nine'), 9)
    assert.equal(stringCalculator.fromEnglish('ten'), 10)
  })
})//END describe
