/* Naive implementation of Lo-Dash methods.
 *
 * Lo-Dash method: _.some
 *
 * It will check all elements of a collection. If any element is
 * truthy after a callback argument/function is applied to it,
 * _.some will return 'true'.
 */


var some = function(collection, property){
  var truthys = [ ];
  collection.forEach(function(element, index, array){
    if(callback(element) == true){
    return true
    }
  })
} //END some


 //--Testing--//

 var expect = require('chai').expect;

 describe('some function', function(){
   it('should return a boolean', function(){

     var collection = [4, 12, 7, 9, 16];
     var callback = function(n){
        if n > 5{
          return true
        }
     }
     expect(some(collection, callback)).to.be.true
   });
 })
