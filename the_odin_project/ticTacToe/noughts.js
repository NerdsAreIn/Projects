const startButton = document.getElementById("start");
const board = document.getElementById("gameboard");
const playerControls = document.getElementById("playerControls");
startButton.addEventListener("click", function() {
    board.classList.remove("disabled");
	const gameBoard = (function() {
		let player;
		let winner;
		let noughtsAndCrosses = [];
		let sign;
		let signContainer;
		let squares = Array.from(document.getElementsByClassName("squares"));
		const takeTurns = function() {
			if (player == player1) player = player2;
			else player = player1;
			console.log({player});
			return player;
		};

		const createSign = function() {
			signContainer = document.createElement("div");
			sign = document.createTextNode(player.symbol);
			signContainer.appendChild(sign);
			if (sign.nodeValue == "O")  {
				signContainer.className = "nought";
			}             
			console.log({sign});
			return signContainer;
		};   
		const endGame = function(winner) {
			noughtAndCrosses = [];            
            board.classList.add("disabled");
            
			createReplayButton();
			displayResult(winner);
		};
		const createReplayButton = function() {
			startButton.textContent = "Play Again";
		};
		const checkForWinner = function() {
			if (noughtsAndCrosses[1] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[9] == "O" ||		noughtsAndCrosses[2] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[8] == "O" || 		    noughtsAndCrosses[7] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[3] == "O" || 		    noughtsAndCrosses[4] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[6] == "O" || 			noughtsAndCrosses[1] == "O" && noughtsAndCrosses[4] == "O" && noughtsAndCrosses[7] == "O" ||			noughtsAndCrosses[3] == "O" && noughtsAndCrosses[6] == "O" && noughtsAndCrosses[9] == "O" || 		    noughtsAndCrosses[1] == "O" && noughtsAndCrosses[2] == "O" && noughtsAndCrosses[3] == "O" || 		    noughtsAndCrosses[7] == "O" && noughtsAndCrosses[8] == "O" && noughtsAndCrosses[9] == "O"  ) {
				winner = player1;
				alert(`The winner is ${winner.name}!`);
				console.log({winner});
                endGame();
				return winner;
			}
			else if (noughtsAndCrosses[1] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[9]  			=="X" || noughtsAndCrosses[2] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[8] =="X"
			|| noughtsAndCrosses[7] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[3] == "X"
			|| noughtsAndCrosses[4] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[6] == "X"||			noughtsAndCrosses[1] == "X" && noughtsAndCrosses[4] == "X" && noughtsAndCrosses[7] == "X" ||			noughtsAndCrosses[3] == "X" && noughtsAndCrosses[6] == "X" && noughtsAndCrosses[9] == "X" || 		    noughtsAndCrosses[1] == "X" && noughtsAndCrosses[2] == "X" && noughtsAndCrosses[3] == "X" || 		    noughtsAndCrosses[7] == "X" && noughtsAndCrosses[8] == "X" && noughtsAndCrosses[9] == "X"   ) {
				winner = player2;
				alert(`The winner is ${winner.name}!`);
				console.log({winner});
				endGame();
				return winner;
			}
			else if (Object.values(noughtsAndCrosses).length == 9 && noughtsAndCrosses.length == 10 && winner == undefined) {
				alert("It's a tie!");
				endGame();        
		    }
		};	
		for (let i = 0; i < squares.length; i++) {
			squares[i].addEventListener("click", function() {
				if (winner != undefined) return;
				else {
					takeTurns();
					createSign();
					if (!(squares[i].hasChildNodes())) {
						squares[i].appendChild(signContainer);
						noughtsAndCrosses[squares[i].id] = sign.nodeValue;
						console.log({noughtsAndCrosses});
					}
					else {
						takeTurns();
						createSign();
					}            	
					checkForWinner();
				}            			
			});
		}
	})();
});


const createPlayer = (name, symbol) => {
	return {name, symbol};
};

const player1 = createPlayer("nought", "O");
const player2 = createPlayer("cross", "X");
