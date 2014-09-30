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
function multiply(a,b) {
  if(a==="zero" || b==="zero")
    return 0;

 if(a=="one")
   return 1;

   if(a==="two")
     return 2;
 }


console.log('The product of "zero" and "zero"',
multiply("zero" , "zero")===0)
console.log('The product of "one" and "zero"',
multiply("one", "zero")===0)
console.log('The product of "one" and "one"',
multiply("one" , "one")===1)
console.log('The product of "two" and "one"',
multiply("two" , "one")===2)
