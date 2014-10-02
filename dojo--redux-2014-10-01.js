/**var assert = require(‘assert’);
*
*function test(actual, expected, success){
*  assert(actual === expected) || console.log(success);
*}
*/
/** Check writing
*
* Given a Number representing money -- $1234.56 -- convert
* that into its string representation in English words. For
* example, 1234.56 is "one thousand, two hundred thirty four
* and 56/100s", just like you would see on a check.
*
* In a lot of ways, this is the inverse of the "String Calculator"
* problem, so a lot of what you've learned there will be put into
* practice here, but backwards. Yey.
*/

/**
* Sample Data:
* 1234.56 => "one thousand, two hundred thirty four, and 56/100s"
* 123.45 => "one hundred twenty three and 45/100s"
* 12.34 => "twelve and 34/100s"
* 1.23 => "one and 23/100s"
*
*Extra credit:
*
* 12345678.90 =>
* "twelve million, three hundred fourt five thousand, six hundred
* seventy eight and 90/100s"

* Make up your own, too.
*/


function numChange(a){
  if (a===2){
  return "two";}
}

console.log('Given 2 should be "two"',
  numChange(2)==="two");
