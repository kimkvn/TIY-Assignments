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
      for(i=1; i<=10; i++){
        sum100 += i;
      }
      sum100 = Math.pow(sum100,2);
      return sum100
    },//END sumSquares
    sumSquare: function(){
      var sq100 = 0;
      for(i=1; i<=10; i++){
        sq100 += Math.pow(i,2);
      }
      return sq100
    }//END sumSquare
  }//END return

}//END solution


/* === TEST CODE === */
// You should probably write some...
var assert = require('chai').assert

describe('squareSum', function(){
  it('squares the sum of natural numbers 1-10', function(){
    assert.equal(solution().squareSum(), 3025)
  })
  it('sums the squares of natural numbers 1-10', function(){
    assert.equal(solution().sumSquare(), 385)
  })
})
