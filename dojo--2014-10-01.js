

 function changeNum(a){

 var arrDigits = [];
 arrDigits = a.toString().split('');


  if (arrDigits.length === 1){
    return singleDigit(arrDigits[0]);
  }
}




function singleDigit(a){
console.log(a);
  if (a==="1") {return "one";}
  if (a==="2") {return "two";}
  if (a==="3") {return "three";}
  if (a==="4") {return "four";}
  if (a==="5") {return "five";}
  if (a==="6") {return "six";}
  if (a==="7") {return "seven";}
  if (a==="8") {return "eight";}
  if (a==="9") {return "nine";}
}










console.log ('given the number 2, it returns "two"',
  changeNum(2) === "two");
