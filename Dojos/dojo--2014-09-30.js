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


var stringCalculator = {

  toIntegers = {'zero': 0, 'one': 1, 'two': 2, 'three':3, 'four':4,
  'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10};

  fromEnglish: function(){
    return
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

describe('toIntegers()', function(){
  it('multiplies two numbers as strings, and returns the product as integer', function(){
    assert.equal(fromEnglish('zero', 'one'), 0)
    assert.equal(fromEnglish('two', 'three'), 6)
    assert.equal(fromEnglish('four', 'three'), 12)
    assert.equal(fromEnglish('four', 'five'), 20)
    assert.equal(fromEnglish('six', 'five'), 30)
    assert.equal(fromEnglish('six', 'seven'), 42)
    assert.equal(fromEnglish('eight', 'seven'), 56)
    assert.equal(fromEnglish('eight', 'nine'), 72)
    assert.equal(fromEnglish('ten', 'nine'), 90)
    assert.equal(fromEnglish('ten', 'ten'), 100)
  })
})//END describe
