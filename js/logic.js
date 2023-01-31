let players = ['x', 'o'];
let activePlayer = 0;
let board;
let count;

// поле
function startGame() {
	board = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];
	activePlayer = 0;
	boardSize = 9;
	count = 0;
	renderBoard(board);
}

// реализация
function click(row, col) {
	board[row][col] = players[activePlayer];
	count++;
	renderBoard(board);
	// проверка победителя (строки || стобцы || диагональ 1 || диагональ 2)
	if ((board[row][0] === players[activePlayer] && board[row][1] === players[activePlayer] && board[row][2] === players[activePlayer]) ||
		(board[0][col] === players[activePlayer] && board[1][col] === players[activePlayer] && board[2][col] === players[activePlayer]) ||
		((board[1][1] === players[activePlayer]) && ((board[0][0] === players[activePlayer] && board[2][2] === players[activePlayer]) ||
			(board[0][2] === players[activePlayer] && board[2][0] === players[activePlayer])))) {
		showWinner(activePlayer);
	} else if (count === boardSize) {
		noWinner();
	}
	// смена игрока
	activePlayer = Number(!activePlayer);
}