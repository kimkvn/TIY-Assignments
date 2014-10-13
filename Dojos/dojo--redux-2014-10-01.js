//CHECK WRITING

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

/** Sample Data:
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


var ones = ["zero", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
"fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
"nineteen"];

var teens = ["zero", "eleven", "twelve", "thirteen", "fourteen",
"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty",
"sixty", "seventy", "eighty", "ninety"];

var hundreds = ["zero", "one hundred", "two hundred", "three hundred",
"four hundred", "five hundred", "six hundred", "seven hundred",
"eight hundred", "nine hundred"];


var checkWriting = {
  toEnglish: function(value){
    var valueString = value.toFixed(2);
    var cents = valueString.slice(-2);
    var dollars = Math.floor(value);
    var digits = valueString.split(""); console.log(digits);

    var ending = " dollars and " + cents + "/100s"

    if(dollars < 20){
      return(ones[dollars]+ending)
    }
    if (dollars < 100){
      if(dollars % 10 === 0){return (tens[digits[0]]+ ending)}
      else {return(tens[digits[0]] + ones[digits[1]] + ending)}
    }
    if (dollars <1000){
      if(dollars % 100===0){return (hundreds[digits[0]]+ending)}
      if(dollars % 10===0){return (hundreds[digits[0]]+tens[digits[1]]+ending)}
      if(digits[1] === '0'){return (hundreds[digits[0]] + ones[digits[2]]+ ending)}
      if(digits[1]<2 && digits[1]>=1){return (hundreds[digits[0]] + teens[digits[2]] + ending)}
      else{return(hundreds[digits[0]]+tens[digits[1]]+ones[digits[2]]+ending)}
    }
  }// END toEnglish
} //END checkWriting



var assert = require('chai').assert

describe('checkWriting', function(){
  it('takes a number and returns it in words, like writing a check', function(){
    // assert.equal(checkWriting.toEnglish(12.34), "twelve dollars and 34/100s")
    // assert.equal(checkWriting.toEnglish(1.09), "one dollars and 09/100s")
    // assert.equal(checkWriting.toEnglish(33.00), "thirtythree dollars and 00/100s")
    // assert.equal(checkWriting.toEnglish(123.45), "one hundredtwentythree dollars and 45/100s")
    // assert.equal(checkWriting.toEnglish(110.00), "one hundredten dollars and 00/100s")
    assert.equal(checkWriting.toEnglish(108.98), "one hundredeight dollars and 98/100s")
  })
})
