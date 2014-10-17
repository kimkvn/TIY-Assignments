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
          for(var y = 999; y > 100; y--){
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

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('mult()', function(){
  it('should be at least over 10000', function(){
    expect(solution().mult()).to.be.above(10000);
  });

  it('should be under 998001', function(){
    expect(solution().mult()).to.be.below(998001);
  });

  // it('should return a 3 digit number', function(){
  //   assert.equal(solution().mult(), 906609);
  // });

  it('should return a number', function(){
    expect(solution().mult()).to.be.a('number');
  });
})
