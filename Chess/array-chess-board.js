var board = [
['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];
//console.log(board.join('\n') + '\n\n'); // '\n' creates a new line, like a new paragraph


var boardW1= [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardB1 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', 'N', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardW2 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', 'N', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardB2 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', 'P', ' ', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardW3 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', 'P', ' ', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', ' ', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardB3 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', ' ', ' ', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', 'P', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', ' ', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

var boardW4 = [
    ['R', 'N', 'B', 'Q', 'K', 'B', ' ', 'R'],
    ['P', 'P', 'P', ' ', ' ', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', 'P', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', 'b', 'p'],
    ['r', 'n', 'b', 'q', 'k', ' ', 'n', 'r']
    ];

var boardB4 = [
    ['R', 'N', 'B', 'Q', 'K', ' ', ' ', 'R'],
    ['P', 'P', 'P', ' ', 'B', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', 'P', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', 'b', 'p'],
    ['r', 'n', 'b', 'q', 'k', ' ', 'n', 'r']
    ];

var boardW5 = [
    ['R', 'N', 'B', 'Q', 'K', ' ', ' ', 'R'],
    ['P', 'P', 'P', ' ', 'B', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', 'P', 'N', ' ', ' '],
    [' ', ' ', ' ', 'P', ' ', ' ', ' ', ' '],
    [' ', ' ', 'p', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'n', 'p', ' '],
    ['p', 'p', ' ', ' ', 'p', 'p', 'b', 'p'],
    ['r', 'n', 'b', 'q', 'k', ' ', ' ', 'r']
    ];

//Using arrays to visualize the Catalan Opening Closed Version

//establishing test variabe
var assert = require('chai').assert;
var expect = require('chai').expect;
/*
function moves(number, color){
  if (number === 1){
    if(color === "white"){return boardW1}
    if(color === "black"){return boardB1}
  }//end if 1

  if(number === 2){
    if(color === "white"){return boardW2}
    if(color === "black"){return boardB2}
  }//end if 2

  if(number === 3){
    if(color === "white"){return boardW3}
    if(color === "black"){return boardB3}
  }//end if 3

  if(number === 4){
    if(color === "white"){return boardW4}
    if(color === "black"){return boardB4}
  }//end if 4

  if (number === 5){
    if(color === "white"){return boardW5}
  }//end if 5
}// END numbers()
*/

var catalanOpening = {
  move1 : function(){
    // //1 - White's move: Pawn to d4
    board[4][3] = board[6][3];
    board[6][3] = ' ';
    //console.log(board.join('\n') + '\n\n');
  },

  move2 : function(){
    // //1 - Black's move: Knight to f6
    board[2][5] = board[0][6];
    board[0][6] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move3 : function(){
    // //2 - White's move: Pawn to c4
    board[4][2] = board[6][2];
    board[6][2] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move4: function(){
    // //2 - Black's move: Pawn to e6
    board[2][4] = board[1][4];
    board[1][4] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move5 : function(){
    // //3 - White's move: Pawn to g3
    board[5][6] = board[6][6];
    board[6][6] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move6 : function(){
    // //3 - Black's move: Pawn to d5
    board[3][3] = board[1][3];
    board[1][3] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move7 : function(){
    // //4 - White's move: Bishop to g2
    board[6][6] = board[7][5];
    board[7][5] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move8 : function(){
    // //4 - Black's move: Bishop to e7
    board[1][4] = board[0][5];
    board[0][5] = ' ';
    // console.log(board.join('\n') + '\n\n');
  },

  move9 : function(){
    // //5 - White's move: Knight to f3
    board[5][5] = board[7][6];
    board[7][6] = ' ';
    // console.log(board.join('\n') + '\n\n');
  }
}//END moves


// console.log(moves(1, "white"))
describe('checks the board status after each move', function(){
  it('should return boardW1', function(){
    catalanOpening.move1();
    assert.deepEqual(board, boardW1)
  });

  it('should return boardB1', function(){
    catalanOpening.move2();
    assert.deepEqual(board, boardB1)
  });

  it('should return boardW2', function(){
    catalanOpening.move3();
    assert.deepEqual(board, boardW2)
  });

  it('should return boardB2', function(){
    catalanOpening.move4();
    assert.deepEqual(board, boardB2)
  });

  it('should return boardW3', function(){
    catalanOpening.move5();
    assert.deepEqual(board, boardW3)
  });

  it('should return boardB3', function(){
    catalanOpening.move6();
    assert.deepEqual(board, boardB3)
  });

  it('should return boardW4', function(){
    catalanOpening.move7();
    assert.deepEqual(board, boardW4)
  });

  it('should return boardB4', function(){
    catalanOpening.move8();
    assert.deepEqual(board, boardB4)
  });

  it('should return boardW5', function(){
    catalanOpening.move9();
    assert.deepEqual(board, boardW5)
  });

})//END describe
