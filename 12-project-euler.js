/* === PRODUCTION CODE === */
function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){ /* perform magic... */ },

        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit){ /* . . . */ },
        filterEvens: function(list){ /* . . . */ },
        sum: function(list){ /* . . . */ }
    }
}

//Problem 6: Find the difference between the sum of the squares of the first
//one hundred natural numbers and the square of the sum.


function solution(){
  return {
    squareSum: function(){
      var sum100 = 0;
      for(i=1; i<=100; i++){
        sum100 += i;
      }
      var sqaureSum = Math.pow(sum100,2)
    }//END sumSquares

  }//END return

}//END solution


/* === TEST CODE === */
// You should probably write some...
