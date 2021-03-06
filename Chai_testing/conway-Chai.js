/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |   |   |   |
 *   +---+---+---+
 * 1 |   |   |   |
 *   +---+---+---+
 * 2 |   |   |   |
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting boarditions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting boardition, if you like, of course.
 */

var assert = require('chai').assert;

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
var board =
        [
        [ false, false, false],
        [ true, true, true ],
        [ false, false, false],
        ];

var neighbors; //defined 'neighbors' to be later used in conway(). Also, less typing.

function neighborsOf(board,a,b){ //This function, given 3 inputs: board, a (board "row") and b (board "column") will return a list of neighboring cells surrounding var board.

//cells are returned in order of left to right, starting from top left working down each row
    if (a === 0 && b=== 0){
      neighbors = [board[0][1], board[1][0], board[1][1]]};
    if (a === 0 && b=== 1){
      neighbors = [board[0][0], board[0][2], board[1][0], board[1][1], board[1][2]]};
    if (a === 0 && b=== 2){
      neighbors = [board[0][1], board[1][1], board[1][2]]};
    if (a === 1 && b=== 0){
      neighbors = [board[0][0], board[0][1], board[1][1], board[2][0], board[2][1]]};
    if (a === 1 && b=== 1){
      neighbors = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][2], board[2][0], board[2][1], board[2][2]]};
    if (a === 1 && b=== 2){
      neighbors = [board[0][1], board[0][2], board[1][1], board[2][1], board[2][2]]};
    if (a === 2 && b=== 0){
      neighbors = [board[1][0], board[1][1], board[2][1]]};
    if (a === 2 && b=== 1){
      neighbors = [board[1][0], board[1][1], board[1][2], board[2][0], board[2][2]]};
    if (a === 2 && b=== 2){
      neighbors = [board[1][1], board[1][2], board[2][1]]};

    return neighbors;
}


var cellNew; //declared because I want to differentiate between the two stages of the starting cell, initial, then "tick"


function conway (cell, neighbors) {
  var alive = 0;
  neighbors.forEach(function(neighbors){  //implementing .forEach instead of for-loop to count number of alive neighboring cells
    if(neighbors === true){alive++};
  });

      if (cell === true){
        if (alive < 2){cellNew = false};
        if (alive === 2 || alive === 3){cellNew = true};
        if (alive > 3){cellNew = false};
        }
        else {if (alive ===3)
                {cellNew = true}
              else{cellNew = false}
              }
        return cellNew;

}

function tick(board){

  var newRow0 = [];
  var newRow1 = [];
  var newRow2 = [];
  var newBoard = [];

  newRow0.push(conway(board[0][0], neighborsOf(board,0,0)));
  newRow0.push(conway(board[0][1], neighborsOf(board,0,1)));
  newRow0.push(conway(board[0][2], neighborsOf(board,0,2)));
  newRow1.push(conway(board[1][0], neighborsOf(board,1,0)));
  newRow1.push(conway(board[1][1], neighborsOf(board,1,1)));
  newRow1.push(conway(board[1][2], neighborsOf(board,1,2)));
  newRow2.push(conway(board[2][0], neighborsOf(board,2,0)));
  newRow2.push(conway(board[2][1], neighborsOf(board,2,1)));
  newRow2.push(conway(board[2][2], neighborsOf(board,2,2)));

  newBoard.push(newRow0, newRow1, newRow2);

  return newBoard;
}

//For test writing
var tick1 =conway(board[0][0], neighborsOf(board,0,0)),
    tick2 =conway(board[0][1], neighborsOf(board,0,1)),
    tick3 =conway(board[0][2], neighborsOf(board,0,2)),
    tick4 =conway(board[1][0], neighborsOf(board,1,0)),
    tick5 =conway(board[1][1], neighborsOf(board,1,1)),
    tick6 =conway(board[1][2], neighborsOf(board,1,2)),
    tick7 =conway(board[2][0], neighborsOf(board,2,0)),
    tick8 =conway(board[2][1], neighborsOf(board,2,1)),
    tick9 =conway(board[2][2], neighborsOf(board,2,2));

//checking my sanity
console.log(tick(board));
console.log(tick2)


//Mocha Chai test, BDD
describe('neighborsOf', function(){
  it('should return list of neighboring cells status when given a starting cell', function(){
    assert.deepEqual(neighborsOf(board,0,0), [board[0][1], board[1][0], board[1][1]]);
    assert.deepEqual(neighborsOf(board,0,1), [board[0][0], board[0][2], board[1][0], board[1][1], board[1][2]]);
    assert.deepEqual(neighborsOf(board,0,2), [board[0][1], board[1][1], board[1][2]]);
    assert.deepEqual(neighborsOf(board,1,0), [board[0][0], board[0][1], board[1][1], board[2][0], board[2][1]]);
    assert.deepEqual(neighborsOf(board,1,1), [board[0][0], board[0][1], board[0][2], board[1][0], board[1][2], board[2][0], board[2][1], board[2][2]]);
    assert.deepEqual(neighborsOf(board,1,2), [board[0][1], board[0][2], board[1][1], board[2][1], board[2][2]]);
    assert.deepEqual(neighborsOf(board,2,0), [board[1][0], board[1][1], board[2][1]]);
    assert.deepEqual(neighborsOf(board,2,1), [board[1][0], board[1][1], board[1][2], board[2][0], board[2][2]]);
    assert.deepEqual(neighborsOf(board,2,2), [board[1][1], board[1][2], board[2][1]]);
  });
})

describe('Conway()', function(){
  it('should return the status of a cell after applying rules', function(){
    assert.equal(tick1, false);
    assert.equal(tick2, true);
    assert.equal(tick3, false);
    assert.equal(tick4, false);
    assert.equal(tick5, true);
    assert.equal(tick6, false);
    assert.equal(tick7, false);
    assert.equal(tick8, true);
    assert.equal(tick9, false);
  });
})
