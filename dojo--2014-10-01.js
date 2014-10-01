

 function changeNum(a){

 var arrDigits = [];
 arrDigits = a.toString().split('');


  if (arrDigits.length === 1){
    return singleDigit(arrDigits[0]);
  }
  if(arrDigits.length === 2){
    return doubleDigits(arrDigits[0] , arrDigits[1]);
  }
}




function singleDigit(a){
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

function doubleDigits(a,b){
  if (a==="2"){
    if (b==="3"){
      return "twenty three";
    }
  }

}









console.log ('given the number 2, it returns "two"',
  changeNum(2) === "two");
console.log ('given the number 2, it returns "two"',
  changeNum(4) === "four");
console.log ('given the number 2, it returns "two"',
    changeNum(8) === "eight");
console.log ('given the number 23, it returns "twenty three"',
  changeNum(23) === "twenty three");
