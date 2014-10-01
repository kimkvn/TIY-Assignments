

 function changeNum(a){

 var arrDigits = [];
 arrDigits = a.toString().split('');


  if (arrDigits.length === 1){
    return singleDigit(Math.floor(arrDigits[0]));
  }
  if(arrDigits.length === 2){
    return doubleDigits(Math.floor(arrDigits[0]) , Math.floor(arrDigits[1]));
  }
  if(arrDigits.length === 3){
    return tripleDigits(Math.floor(arrDigits[0]), Math.floor(arrDigits[1]), Math.floor(arrDigits[2]));
  }
}




function singleDigit(a){
  if (a===1) {return "one";}
  if (a===2) {return "two";}
  if (a===3) {return "three";}
  if (a===4) {return "four";}
  if (a===5) {return "five";}
  if (a===6) {return "six";}
  if (a===7) {return "seven";}
  if (a===8) {return "eight";}
  if (a===9) {return "nine";}
}

function doubleDigits(a,b){
  if (a===1){
    if (b===1){return "eleven";}
    if (b===2){return "twelve";}
    if (b===3){return "thirteen";}
    if (b===4){return "fourteen";}
    if (b===5){return "fifteen";}
    if (b===6){return "sixteen";}
    if (b===7){return "seventeen";}
    if (b===8){return "eighteen";}
    if (b===9){return "nineteen";}
    }

  if (a===2){
      if(b===0){return "twenty"}
    return "twenty "+singleDigit(b);
    }
  if (a===3){
      if(b===0){return "thirty"}
    return "thirty "+singleDigit(b);
    }
  if (a===4){
      if(b===0){return "forty"}
    return "forty "+singleDigit(b);
    }
  if (a===5){
      if(b===0){return "fifty"}
    return "fifty "+singleDigit(b);
    }
  if (a===6){
      if(b===0){return "sixty"}
    return "sixty "+singleDigit(b);
    }
  if (a===7){
      if(b===0){return "seventy"}
    return "seventy "+singleDigit(b);
    }
  if (a===8){
      if(b===0){return "eighty"}
    return "eighty "+singleDigit(b);
    }
  if (a===9){
      if(b===0){return "ninety"}
    return "ninety "+singleDigit(b);
    }

}

function tripleDigits(a,b,c){
  if (a===1){
    if (b===0 && c==0){return "one hundred"};
      if (b===0){return "one hundred "+singleDigit(c)}
        else {return "one hundred "+ doubleDigits(b,c)};
  }
  if (a===2){
    if (b===0 && c==0){return "two hundred"};
      if (b===0){return "two hundred "+singleDigit(c)}
        else {return "two hundred "+ doubleDigits(b,c)};
  }
  if (a===3){
    if (b===0 && c==0){return "three hundred"};
      if (b===0){return "three hundred "+singleDigit(c)}
        else {return "three hundred "+ doubleDigits(b,c)};
  }
  if (a===4){
    if (b===0 && c==0){return "four hundred"};
      if (b===0){return "four hundred "+singleDigit(c)}
        else {return "four hundred "+ doubleDigits(b,c)};
  }
  if (a===5){
    if (b===0 && c==0){return "five hundred"};
      if (b===0){return "five hundred "+singleDigit(c)}
        else {return "five hundred "+ doubleDigits(b,c)};
  }
  if (a===6){
    if (b===0 && c==0){return "six hundred"};
      if (b===0){return "six hundred "+singleDigit(c)}
        else {return "six hundred "+ doubleDigits(b,c)};
  }
}







console.log ('given the number 2, it returns "two"',
  changeNum(2) === "two");
console.log ('given the number 4, it returns "four"',
  changeNum(4) === "four");
console.log ('given the number 8, it returns "eight"',
  changeNum(8) === "eight");
console.log(changeNum(16));
console.log ('given the number 23, it returns "twenty three"',
  changeNum(23) === "twenty three");
console.log('given the number 20, it returns "twenty"',
  changeNum(20) === "twenty");
console.log('given the number 35, it returns "thirty five"',
  changeNum(35) === "thirty five");
console.log('given the number 50, it returns "fifty"',
  changeNum(50) === "fifty");
console.log(changeNum(53));
console.log(changeNum(88));
console.log(changeNum(73));
console.log(changeNum(60));
console.log('given the number 100, it returns "one hundred"',
  changeNum(100) === "one hundred");
console.log('given the number 105, it returns "one hundred five"',
  changeNum(105) === "one hundred five");
console.log('given the number 134, it returns "one hundred thirty five',
  changeNum(135) === "one hundred thirty five");
console.log(changeNum(645));
console.log(changeNum(264));
console.log(changeNum(504));
console.log(changeNum(300));
console.log(changeNum(499));
