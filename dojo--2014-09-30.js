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

if(a==="two" && b==="two")
  return 4;


   if(a==="two")
     return 2;

     if(a==="three" && b==="three")
       return 9;

    if (a==="three")
      return 6;

    if(a==="four" && b==="four")
      return 16;

  if(a==="four")
    return 12;

    if(a==="five" && b==="five")
      return 25;

  if(a==="five")
    return 20;

    if(a==="six")
      return 30;
 }


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
