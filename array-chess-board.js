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


//Using arrays to visualize the Catalan Opening Closed Version

//1 - White's move: Pawn to d4
board[4][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n') + '\n\n');

//1 - Black's move: Knight to f6
board[2][5] = board[0][6];
board[0][6] = ' ';
console.log(board.join('\n') + '\n\n');

//2 - White's move: Pawn to c4
board[4][2] = board[6][2];
board[6][2] = ' ';
console.log(board.join('\n') + '\n\n');

//2 - Black's move: Pawn to e6
board[2][4] = board[1][4];
board[1][4] = ' ';
console.log(board.join('\n') + '\n\n');

//3 - White's move: Pawn to g3
board[5][6] = board[6][6];
board[6][6] = ' ';
console.log(board.join('\n') + '\n\n');

//3 - Black's move: Pawn to d5
board[3][3] = board[1][3];
board[1][3] = ' ';
console.log(board.join('\n') + '\n\n');

//4 - White's move: Bishop to g2
board[6][6] = board[7][5];
board[7][5] = ' ';
console.log(board.join('\n') + '\n\n');

//4 - Black's move: Bishop to e7
board[1][4] = board[0][5];
board[0][5] = ' ';
console.log(board.join('\n') + '\n\n');

//5 - White's move: Knight to f3
board[5][5] = board[7][6];
board[7][6] = ' ';
console.log(board.join('\n') + '\n\n');
