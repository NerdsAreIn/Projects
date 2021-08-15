const gameBoard = (function() {
	let player;
	const takeTurns = function() {
		if (player == player1) player = player2;
        else player = player1;
        console.log({player});
        return player;
	};
	const createSign = function() {
		sign = document.createTextNode(player.symbol);
        sign.className = 
		console.log({sign});
        return sign;
	};

	let noughtsAndCrosses = [];
	let sign;
	let squares = Array.from(document.getElementsByClassName("squares"));
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
            takeTurns();
			createSign();
			squares[i].appendChild(sign);
			noughtsAndCrosses[i] = sign.nodeValue;
			checkForWinner();			
		});
	}	
})();

const createPlayer = (name, symbol) => {
	return {name, symbol};
};

const player1 = createPlayer("nought", "O");
const player2 = createPlayer("cross", "X");