/* should implement a toEnglish() function that translates 'Number' to 'String'
* in a single step.
*/

var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven",
"eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
"fifteen", "seventeen", "eighteen", "nineteen"];

var tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
'seventy', 'ninety'];

var hundreds = ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred',
'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

var thousands = ['zero', 'one thousand', 'two thousand', 'three thousand',
'four thousand', 'five thousand', 'six thousand', 'seven thousand',
'eight thousand', 'nine thousand'];


function toEnglish(a){

  var value = a.toFixed(2);
  var dollars = value.slice(0,-3).split("").reverse();
  var cents = a.toFixed(2).slice(-2);

return thousands[dollars[3]]+ hundreds[dollars[2]] + tens[dollars[1]] + ones[dollars[0]] +" dollars and "+cents+"/100s cents"

}//END toEnglish

console.log(toEnglish(113.30))
