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

  return this.board[x][y];


}

/**
 *Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 * //this is a command, so you don't expect it to return anyting, simply perform an action
 */
Game.prototype.setAlive = function(x,y){

  this.board[x][y] = true;

}

/**
 * Update the 'board' by applying the 'rules' to each cell.
 */
Game.prototype.tick = function(){
    //Start with a fresh board...
    var newBoard = board();
    //Apply 'rules' to each cell in the current board...
    this.board.forEach(function(row, x){  //refer to board. We apply .forEach to the rows of the board array first as it's the first part of the array. X = row index
      row.forEach(function(item, y){ //refer to board, now we're applying .forEach to individual cells, the columnIndex (which = Y)

      }) // END row.forEach
    }); //END this.board.forEach

    //Record the result of 'rules' in the new board...
    //Update the current board to match the new board.


}

Game.prototype.neighborsOf = function(x,y){
  var neighbors;
  var alive = 0;

  if(x === 0 && y === 0){
    neighbors = [this.board[0][1], this.board[1][0], this.board[1][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 0 && y === 1){
    neighbors = [this.board[0][0], this.board[1][2], this.board[1][0],
    this.board[1][1], this.board[1][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 0 && y === 2){
    neighbors = [this.board[0][1], this.board[1][1], this.board[1][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 1 && y === 0){
    neighbors = [this.board[0][0], this.board[0][1], this.board[1][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 1 && y === 1){
    neighbors = [this.board[0][0], this.board[0][1], this.board[0][2],
    this.board[1][0], this.board[1][2], this.board[2][0], this.board[2][1],
    this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 1 && y === 2){
    neighbors = [this.board[0][1], this.board[0][2], this.board[1][1],
    this.board[2][1], this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 2 && y === 0){
    neighbors = [this.board[1][0], this.board[1][1], this.board[2][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 2 && y === 1){
    neighbors = [this.board[1][0], this.board[1][1], this.board[1][2],
    this.board[2][0], this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  };

  if(x === 2 && y === 2){
    neighbors = [this.board[1][1], this.board[1][2], this.board[2][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){alive+=1}
      }
  }


} //END neighborsOf


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
