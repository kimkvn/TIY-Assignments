var Chess = require('./14-Chessboard-Interface.js').Chess;
var newPosition = require('./14-Chessboard-Interface.js').Chess;
var Piece = require('./14-Chessboard-Interface.js').Piece;

var assert = require('Chai').assert;

describe('newPosition', function(){
    it('should be a function', function(){
      assert.isFunction(newPosition);
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
