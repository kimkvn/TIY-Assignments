/**
 * Separate file for testing game.js. Exciting.
 */

var Game = require('./game.js');

var assert = require('chai').assert;

it('should play the game', function(){
  var game = new Game;

  assert.deepEqual(game.board, [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    ]);


describe('the functions existence', function(){
  it('should be a function', function(){
    assert.isFunction(Game.prototype.isAlive);
    assert.isFunction(Game.prototype.setAlive);
    assert.isFunction(Game.prototype.tick);
    assert.isFunction(Game.prototype.rules);
  });
})




describe('game.setAlive', function(){
  it('should make these cells alive', function(){
    assert.isUndefined(game.setAlive(0,1));
    assert.isUndefined(game.setAlive(1,1));
    assert.isUndefined(game.setAlive(2,1));
  })
})

describe('game.isAlive', function(){
  it('should return the cell status as true', function(){
    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));
  });
})

describe('game.display()', function(){
  it('should return the appropriate board', function(){
    assert.equal(game.display(),
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n"
    );
  })
})

/*




  game.tick();

  assert.isTrue(game.isAlive(1,0));
  assert.isTrue(game.isAlive(1,1));
  assert.isTrue(game.isAlive(1,2));

  assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n" +
    "| X | X | X |\n" +
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n"
  );

  game.tick();

  game.isTrue(game.isAlive(0,1));
  game.isTrue(game.isAlive(1,1));
  game.isTrue(game.isAlive(2,1));

  assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
  );
  // */ // Don't uncomment this line!

})
