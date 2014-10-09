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

var thousands = ["zero", "one thousand", "two thousand", "three thousand",
"four thousand", "five thousand", "six thousand", "seven thousand",
"eight thousand", "nine thousand"];

function numChange(a){

  var value = a.toFixed(2);
  var dollars = value.slice(0,-3);
  var dollarsSplit = dollars.split("");
  var cents = a.toFixed(2).slice(-2);

//////////0-19///////////////////////////////////////////////
    if (a < 20){return(ones[dollars])+" and "+cents+"/100s"}; //for numbers 0-19

/////////20-99/////////////////////////////////////////////////
    if (a < 100){
      if (a % 10 === 0){return(tens[dollarsSplit[0]]+" and "+cents+"/100s")}
      if (ones[dollarsSplit[1]] === "zero" && cents !== 00){return(tens[dollarsSplit[0]] + " and "+cents+"/100s")}
    return(tens[dollarsSplit[0]] + ones[dollarsSplit[1]]+ " and "+cents+"/100s")
    }
///////////100-999/////////////////////////////////////////////////
    if (a < 1000){
      if (a % 100 === 0){return(hundreds[value[0]]);}
        if (a % 10 === 0){return(hundreds[value[0]]+tens[value[1]]);}
          if (value[1] < 2) {return(hundreds[value[0]] + teens[value[2]]);}
    return(hundreds[value[0]] + tens[value[1]] + ones[value[2]])
    }
