/**
 * Project Euler number 4:
 * Find the largest palindrome-ic product of two 3-digit numbers
 */

 // // /* === PRODUCTION CODE === */
// function solution(){
//     // change input to suit the solution, e.g. `limit`
//     return {
//         // I wanna see this one...
//         solveFor: function(limit){ /* perform magic... */ },
//
//         // For Problem 2, for example... However you solve it.
//         fibonacci: function(limit){ /* . . . */ },
//         filterEvens: function(list){ /* . . . */ },
//         sum: function(list){ /* . . . */ }
//     }
// }
//

function solution(){
  return {
    mult : function(){
      var results = [];
        for(var x = 999; y > 100; x--){
          for(var y = 999; y > 100; y---){
            var product = x * y;
            if(prod.toString() == prod.toString().split("").reverse().join("")){
              results.push(x*y);
            }
          } //END var y condition
        } //END var x condition
      return Math.max.apply(Math,results)
    } //END mult
  } //END return
} //END solution
