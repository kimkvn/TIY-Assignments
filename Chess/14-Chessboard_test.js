var Chess = require('./14-Chessboard-Interface.js').Chess;
var newPosition = require('./14-Chessboard-Interface.js').Chess;
var Piece = require('./14-Chessboard-Interface.js').Piece;

var assert = require('Chai').assert;

describe('newPosition', function(){
  it('should be a function', function(){
    assert.isFunction(newPosition);
  });

  it('should have x and y coordinates', function(){
    var aPosition;
    aPosition = newPosition(2,3);
    assert.strictEqual(aPosition.x, 2);
  });
});

describe('Piece', function(){
  it('should be a function', function(){
    assert.isFunction(Piece);
  });
});

describe('Chess', function(){
  it('should be a function', function(){
    assert.isFunction(Chess);
  });
})
