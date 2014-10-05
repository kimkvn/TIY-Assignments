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
 * board, and test the following starting positions:
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
 * You may test more starting position, if you like, of course.
 */

var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
function board(){
    return [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
}


console.log(board()[2][2])  //REALLY FUCKING IMPORTANT// so how can I use the function board()
//to tell whether the cell is true/false? board(), while a function, basically behaves as an
//array. To call the identity of a thing in an array while knowing its location, input
//<array[x] returns the thing @x. To get the T/F value of board() ::: board()[x][y]
//HELL YEAH. Thank you Brian.

function tick(){}

var neighbors;
function neighborsOf(a,b){
//cells are returned in order of left to right, starting from top left working down each row
    var pos = board();
    if (a === 0 && b=== 0){
      neighbors = [pos[0][1], pos[1][0], pos[1][1]]};
    if (a === 0 && b=== 1){
      neighbors = [pos[0][0], pos[0][2], pos[1][0], pos[1][1], pos[1][2]]};
    if (a === 0 && b=== 2){
      neighbors = [pos[0][1], pos[1][1], pos[0][2]]};
    if (a === 1 && b=== 0){
      neighbors = [pos[0][0], pos[0][1], pos[1][1], pos[2][0], pos[2][1]]};
    if (a === 1 && b=== 1){
      neighbors = [pos[0][0], pos[0][1], pos[0][2], pos[1][0], pos[1][2], pos[2][0], pos[2][1], pos[2][2]]};
    if (a === 1 && b=== 2){
      neighbors = [pos[0][1], pos[0][2], pos[1][1], pos[2][1], pos[2][2]]};
    if (a === 2 && b=== 0){
      neighbors = [pos[1][0], pos[1][1], pos[2][1]]};
    if (a === 2 && b=== 1){
      neighbors = [pos[1][0], pos[1][1], pos[1][2], pos[2][1], pos[2][2]]};
    if (a === 2 && b=== 2){
      neighbors = [pos[1][1], pos[1][2], pos[2][1]]};

    return neighbors;
}

function conway(cell, neighbors){
  var alive = 0;
  for(var = i; i < neighbors.length; i++){
    if (neighbors[i] === true){alive ++;}
    }
    if (cell === true){
      if (alive < 2){return cell = false};
      if (alive === 2 || alive === 3){return cell = true};
      if (alive > 3){return cell = true};
    }
    if (cell === false){
      if (alive === 3){return cell = true};
    }
}






console.log("MY SANITY")
console.log(neighborsOf(0,0))
console.log(neighborsOf(0,1))
console.log(neighborsOf(0,2))
console.log(neighborsOf(1,0))
console.log(neighborsOf(1,1))
console.log(neighborsOf(1,2))
console.log(neighborsOf(2,0))
console.log(neighborsOf(2,1))
console.log(neighborsOf(2,2).length)
