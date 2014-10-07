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



//var numbers = ["zero", "one", "two", "three", "four",
//  "five", "six", "seven", "eight", "nine", "ten"];



function multiply (a,b){
  if (a === "one"){a = 1};
  if (b === "two"){b = 2};
  return a*b;
}

console.log(multiply("one", "two"))

var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected){
    assert.strictEqual(actual, expected);
    console.log("You are correct.")
}

//test(multiply("one", "zero"), 0)

/*
console.log('The product of "zero" and "zero"',
multiply("zero" , "zero")===0)
console.log('The product of "one" and "zero"',
multiply("one", "zero")===0)
console.log('The product of "one" and "one"',
multiply("one" , "one")===1)
console.log('The product of "two" and "one"',
multiply("two" , "one")===2)
console.log('The product of "two" and "two"',
multiply("two" , "two")===4)
console.log('The product of "three" and "two"',
multiply("three" , "two")===6)
console.log('The product of "three" and "three"',
multiply("three" , "three")===9)
console.log('The product of "four" and "three"',
multiply("four" , "three")===12)
console.log('The product of "four" and "four"',
multiply("four" , "four")===16)
console.log('The product of "five" and "four"',
multiply("five" , "four")===20)
console.log('The product of "five" and "five"',
multiply("five" , "five")===25)
console.log('The product of "six" and "five"',
multiply("six" , "five")===30)
console.log('The product of "six" and "seven"',
multiply("six" , "seven")===42)
console.log('The product of "six" and "six"',
multiply("six" , "six")===36)
console.log('The product of "seven" and "seven"',
multiply("seven" , "seven")===49)
console.log('The product of "eight" and "seven"',
multiply("eight" , "seven")===56)
*/
