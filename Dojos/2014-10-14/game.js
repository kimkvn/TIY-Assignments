/**
 * Refactoring Conway...using objects. Egads.
 */

module.exports = Game;

function board(){
   return [
   [false, false, false],
   [false, false, false],
   [false, false, false]
   ];
 }

function Game(){
   this.board = board();
 }

 /**
  * @param Number x coordinate
  * @param Number y coordinate
  * @return Boolean if cell at {x,y} is alive
  */
Game.prototype.isAlive = function(x,y){

  if(this.board[x][y] === true){
    return true;
  }

}

/**
 *Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x,y){

  this.board[x][y] = true;

}

/**
 * Update the 'board' by applying the 'rules' to each cell.
 */
Game.prototype.tick = function(){
    //Start with a fresh board...
    //Apply 'rules' to each cell in the current board...
    //Record the result of 'rules' in the new board...
    //Update the current board to match the new board.
}

/**
 * What goes here?
 */
Game.prototype.rules = function(){
  //If cell in question is alive:
    //if cell has 2 or 3 alive neighbors --> lives
      //if cell has <2 alive neighbors --> dies
      //if cell has >3 alive neighbors -->dies
  //if dead cell has 3 alive neighbors --> lives
}



/**
 * WARNING: This is VOODOO MAGIC...
 *
 * GIVEN:
 *   this.board === [
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *   ];
 *
 * EXPECT:
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 */
Game.prototype.display = function(){
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
    + spacer;
} // END display
