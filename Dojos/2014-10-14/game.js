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

  return this.board[x][y]

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
    var self = this;
                      // //this bit can replace lines 60-64...
                      // this.board = newBoard.map(function(row, x){
                      //   return row.map(function(cell, y){
                      //     return self.rules(cell, self.neighborsOf(x,y));
                      //   });
                      // })
                      //
                      // //this can replace 69 to 82
                      // newBoard.forEach(function(row, x){
                      //   newBoard.forEach(function(cell, y){
                      //     newBoard[x][y] = self.rules(self.board[x][y], self.neighborsOf(x,y));
                      //   });
                      // });



    //Apply 'rules' to each cell in the current board...
    this.board.forEach(function(row, x){  //refer to board. We apply .forEach to the rows of the board array first as it's the first part of the array. X = row index
      row.forEach(function(cell, y){ //refer to board, now we're applying .forEach to individual cells, the columnIndex (which = Y)
            //console.log(self); return
          var newCell = self.rules(x, y, this.board);
        //Record the result of 'rules' in the new board...
        newBoard[x][y] = newCell; //since .forEach is running, it will run through each cell and assign them the newCell value
      }); // END row.forEach
    }); //END this.board.forEach

    //Update the current board to match the new board.
    this.board = newBoard;

}

/*
 * @param Number x coordinate of 'cell'
 * @param Number y coordinate of 'cell'
 * @return Array of Boolean representing LIVE neighbors
 */

Game.prototype.neighborsOf = function(x,y){
  var neighbors = [ ];
  if (x === 0 && y === 0){
    neighbors.push(this.board[0][1], this.board[1][0], this.board[1][1])
  }
  if (x === 0 && y === 1){
    neighbors.push(this.board[0][0], this.board[0][2], this.board[1][0],
    this.board[1][1], this.board[1][2])
  }
  if (x === 0 && y === 2){
    neighbors.push(this.board[0][1], this.board[1][1], this.board[1][2])
  }
  if (x === 1 && y === 0){
    neighbors.push(this.board[0][0], this.board[0][1], this.board[1][1],
    this.board[2][0], this.board[2][1])
  }
  if (x === 1 && y === 1){
    neighbors.push(this.board[0][0], this.board[0][1], this.board[0][2],
    this.board[1][0], this.board[1][2], this.board[2][0], this.board[2][1],
    this.board[2][2])
  }
  if (x === 1 && y === 2){
    neighbors.push(this.board[0][1], this.board[0][2], this.board[1][1],
    this.board[2][1], this.board[2][2])
  }
  if (x === 2 && y === 0){
    neighbors.push(this.board[1][0], this.board[1][1], this.board[2][1])
  }
  if (x === 2 && y === 1){
    neighbors.push(this.board[1][0], this.board[1][1], this.board[1][2],
    this.board[2][0], this.board[2][2])
  }
  if (x === 2 && y === 2){
    neighbors.push(this.board[1][1], this.board[1][2]. this.board[2][1])
  }
            // var  diffs = [-1, 0, +1];
            //
            // diffs.forEach(function(dX){
            //   diffs.forEach(function(dY){
            //     if ( dX === 0 && dY === 0 ) return; // dX === 0 and dY === 0 means there's no difference and you're looking at where you're starting
            //
            //     if (this.board[x+dX] && this.board[x+dX][y+dY]) {
            //       neighbors.push(true);
            //     }
            //   });
            // });

  return neighbors;

}

/**
 * @param cell (a boolean)
 * @param neighbors Array of neighbors(more booleans) of 'cell'
 * @Return Boolean (status of cell)
 */
Game.prototype.rules = function(cell, neighbors){
  if (cell === true){
    if neighbors.length > 1 && neighbors.length < 4 {    //if cell is alive (cell) and has 2 or 3 neighbors, lives
    return true;}
    if neighbors.length < 2 {return false;}
    if neighbors.length > 3 {return true;}
  }
  if (cell === false){
    if neighbors.length === 3{    //if cell is dead (!cell) and has 3 neighbors, lives
    return true;}
  }

  else {return false}


  // if (cell){
  //   if (neighbors.length >= 2){
  //     if (neighbors.length > 3){
  //       return false; // overpopulated, dies
  //     }
  //     return true; // has 2 || 3 neighbors, lives
  //   }
  //
  //   return false; //under populated, dies
  // }
  //
  // if (neighbors.length === 3){
  //     return true;
  // }
  //
  // return false;

}//END Game.rules




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
