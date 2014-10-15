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


    assert.isFunction(Game.prototype.isAlive);
    assert.isFunction(Game.prototype.setAlive);
    assert.isFunction(Game.prototype.tick);
    assert.isFunction(Game.prototype.rules);





    assert.isUndefined(game.setAlive(0,1));
    assert.isUndefined(game.setAlive(1,1));
    assert.isUndefined(game.setAlive(2,1));



    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));



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




// describe('game.tick()', function(){
// //   it('should update the board by applying Conways rules to each cell', function(){
// //     assert.isFalse(game.tick(game.isAlive(0,0)))
// //   })
// // })





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
