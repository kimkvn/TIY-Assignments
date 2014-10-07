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


var integers = [0,1,2,3,4,5,6,7,8,9,10];
var numbers = ["zero", "one", "two", "three", "four",
  "five", "six", "seven", "eight", "nine", "ten"];




function multiply (a,b){
  //I give the robot an item. "two", "four", etc
  //I need the robot to scan through array:Numbers to match that item.
    //Then I need the robot to assign that item its corresponding number.

  if (a === "zero"){a = 0};
  if (a === "one"){a = 1};
  if (a === "two"){a = 2};
  if (a === "three"){a = 3};
  if (a === "four"){a = 4};
  if (a === "five"){a = 5};
  if (a === "six"){a = 6};
  if (a === "seven"){a = 7};
  if (a === "eight"){a = 8};
  if (a === "nine"){a = 9};
  if (a === "ten"){a = 10};

  if (b === "zero"){b = 0};
  if (b === "one"){b = 1};
  if (b === "two"){b = 2};
  if (b === "three"){b = 3};
  if (b === "four"){b = 4};
  if (b === "five"){b = 5};
  if (b === "six"){b = 6};
  if (b === "seven"){b = 7};
  if (b === "eight"){b = 8};
  if (b === "nine"){b = 9};
  if (b === "ten"){b = 10};

  return a*b
}

// console.log(multiply("one", "two"))


//////
var assert = require('assert');

function test(actual, expected, success){
    success = success || 'YOU DID IT!';

    assert(actual === expected) || console.log(success);
}

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */

 var testCases = [
 ["two", "three", 6],
 ["seven", "nine", 63],
 ["two", "five", 10],
 ["six", "four", 24],
 ["eight", "ten", 80],
 ["zero", "nine", 0],
 ["ten", "one", 10],
 ["three", "six", 18]
 ]


// function test(actual, expected){

testCases.forEach(function(testCase){
    var actual = multiply(testCase[0], testCase[1])
    expected = testCase[2]
    console.log("You are correct.")

    assert.strictEqual(actual, expected);
});




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
