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
console.log(board.join('\n') + '\n\n'); // '\n' creates a new line, like a new paragraph


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


// console.log(moves(1, "white"))
describe('checks the board status after each move', function(){
  it('should return boardW1', function(){
    assert.equal(moves(1, "white"), boardW1)
  })
  it('should return boardB1', function(){
    assert.equal(moves(1,"black"), boardB1)
  })
  it('should return boardW2', function(){
    assert.equal(moves(2,"white"), boardW2)
  })
  it('should return boardB2', function(){
    assert.equal(moves(2,"black"), boardB2)
  })
  it('should return boardW3', function(){
    assert.equal(moves(3,"white"), boardW3)
  })
  it('should return boardB3', function(){
    assert.equal(moves(3, "black"), boardB3)
  })
  it('should return boardW4', function(){
    assert.equal(moves(4,"white"), boardW4)
  })
  it('should return boardB4', function(){
    assert.equal(moves(4,"black"), boardB4)
  })
  it('should return boardW5', function(){
    assert.equal(moves(5,"white"), boardW5)
  })
})//END describe



// //1 - White's move: Pawn to d4
// board[4][3] = board[6][3];
// board[6][3] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //1 - Black's move: Knight to f6
// board[2][5] = board[0][6];
// board[0][6] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //2 - White's move: Pawn to c4
// board[4][2] = board[6][2];
// board[6][2] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //2 - Black's move: Pawn to e6
// board[2][4] = board[1][4];
// board[1][4] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //3 - White's move: Pawn to g3
// board[5][6] = board[6][6];
// board[6][6] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //3 - Black's move: Pawn to d5
// board[3][3] = board[1][3];
// board[1][3] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //4 - White's move: Bishop to g2
// board[6][6] = board[7][5];
// board[7][5] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //4 - Black's move: Bishop to e7
// board[1][4] = board[0][5];
// board[0][5] = ' ';
// console.log(board.join('\n') + '\n\n');
//
// //5 - White's move: Knight to f3
// board[5][5] = board[7][6];
// board[7][6] = ' ';
// console.log(board.join('\n') + '\n\n');

///Testing///
