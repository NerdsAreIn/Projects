const startButton = document.createElement("button");
const board = document.getElementById("gameboard");
const playerControls = document.getElementById("playerControls");
const displayText = document.getElementById("displayText");
const squares = Array.from(document.getElementsByClassName("squares"));
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const AI_button = document.getElementsByClassName("choice-button")[0];
const twoPlayerButton = document.getElementsByClassName("choice-button")[1];
const choiceScreen = document.getElementById("choice-screen");
const createPlayer = (name, symbol) => {
    let username;
	return {name, symbol, username};
};
const player1 = createPlayer("nought", "O");
const player2 = createPlayer("cross", "X");

let mode;

const gameControl = (function() {
    const closeChoiceScreen = function() {
		displayText.textContent = "";
 		createStartButton();
        setName();
		choiceScreen.className = "gone";
        setTimeout(() => {
			choiceScreen.setAttribute("style", "display: none");
		}, 1000);               
	};
    const setName = function() {
		if (mode == "AI") { 
        player2Name.value = "computer";
		player2Name.readOnly = true;
        }
	};
	const createStartButton = function() {		
        startButton.textContent = "START GAME";			
		playerControls.appendChild(startButton);	
		return startButton;
	};	
	twoPlayerButton.addEventListener("click", function(e) {
		e.stopPropagation();
		mode = "2Player";
		closeChoiceScreen();		
	});
	AI_button.addEventListener("click", function(e) {
		e.stopPropagation();
		mode = "AI";		
		closeChoiceScreen();	
	});    
})();

startButton.addEventListener("click", function() {
	const assignPlayerNames = function() {		
    	if (player1Name.value) {player1.username = player1Name.value;}
    	else player1.username = "Nought";
    	if (player2Name.value) {player2.username = player2Name.value;}
    	else player2.username = "Cross";
    };
    assignPlayerNames();
   	startButton.remove();
    squares.forEach(square => {
		if (square.hasChildNodes()) {
			//console.log("child found!");
			square.innerHTML = "";
		}
	});   
    board.classList.remove("disabled");

	const gameBoard = (function() {
		let player;
		let winner;
		let noughtsAndCrosses = [];
		let sign;
		let signContainer;
		displayText.textContent = `${player1.username} goes first.`;		
		const endGame = function(winner) {
			noughtsAndCrosses = [];            
            board.classList.add("disabled");
            displayResult(winner);
			createReplayButton();
		};
		const createReplayButton = function() {
			let replayButton = document.createElement("button");
			replayButton.textContent = "PLAY AGAIN";
			playerControls.appendChild(replayButton);
			replayButton.onclick = () => {
				choiceScreen.classList.remove("gone");
                choiceScreen.style.display = "block";
				replayButton.remove();
			};
		};
        const displayResult = function(winner) {
			if (winner == "no winner") {
				displayText.innerHTML = "<p>GAME OVER.</p><p>It's a tie.</p>";
			}
            else {
				displayText.innerHTML = `<p>GAME OVER.</p><p>The winner is ${winner.					username}.</p>`;
            }
		};
		const checkForWinner = function() {
			if (noughtsAndCrosses[1] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[9] == "O" ||		noughtsAndCrosses[2] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[8] == "O" || 		    noughtsAndCrosses[7] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[3] == "O" || 		    noughtsAndCrosses[4] == "O" && noughtsAndCrosses[5] == "O" && noughtsAndCrosses[6] == "O" || 			noughtsAndCrosses[1] == "O" && noughtsAndCrosses[4] == "O" && noughtsAndCrosses[7] == "O" ||			noughtsAndCrosses[3] == "O" && noughtsAndCrosses[6] == "O" && noughtsAndCrosses[9] == "O" || 		    noughtsAndCrosses[1] == "O" && noughtsAndCrosses[2] == "O" && noughtsAndCrosses[3] == "O" || 		    noughtsAndCrosses[7] == "O" && noughtsAndCrosses[8] == "O" && noughtsAndCrosses[9] == "O"  ) {
				winner = player1;
				endGame(winner);
				return winner;
			}
			else if (noughtsAndCrosses[1] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[9]  			=="X" || noughtsAndCrosses[2] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[8] =="X"
			|| noughtsAndCrosses[7] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[3] == "X"
			|| noughtsAndCrosses[4] == "X" && noughtsAndCrosses[5] == "X" && noughtsAndCrosses[6] == "X"||			noughtsAndCrosses[1] == "X" && noughtsAndCrosses[4] == "X" && noughtsAndCrosses[7] == "X" ||			noughtsAndCrosses[3] == "X" && noughtsAndCrosses[6] == "X" && noughtsAndCrosses[9] == "X" || 		    noughtsAndCrosses[1] == "X" && noughtsAndCrosses[2] == "X" && noughtsAndCrosses[3] == "X" || 		    noughtsAndCrosses[7] == "X" && noughtsAndCrosses[8] == "X" && noughtsAndCrosses[9] == "X"   ) {
				winner = player2;
				endGame(winner);
				return winner;
			}
			else if (Object.values(noughtsAndCrosses).length == 9 && noughtsAndCrosses.length == 10 && winner == undefined) {
				winner = "no winner";
				endGame(winner); 
                return winner;       
		    }
		};	

		if (mode == "AI") {
	 		let randomNumber;
			let nought;
			let noughtContainer;
			let cross;
			let crossContainer;
            for (let i = 0; i < squares.length; i++) {
				squares[i].addEventListener("click", function() {
					if (winner == player1 || winner == player2||winner == "no winner") {  												return;
					}
					else {
						displayText.textContent = "";			
						//Put the nought in the clicked square if that square is empty:
						if (!(squares[i].hasChildNodes())) {
                            noughtContainer = document.createElement("div");				
				            noughtContainer.appendChild(createNought());
				            noughtContainer.classList.add("nought");
							squares[i].appendChild(noughtContainer);
							noughtsAndCrosses[squares[i].id] = createNought().nodeValue;
							console.log({noughtsAndCrosses});
                            if (winner == undefined) { 
                                randomMove();
                            }
						}
						else {
							randomMove();
						}            	
						checkForWinner();
					}            			
				});
			} 		        
			const randomMove = function() {                
					randomNumber = Math.floor(Math.random() * 9);	
					console.log({randomNumber});	
                     if (Object.values(noughtsAndCrosses).length == 9 && noughtsAndCrosses.length == 10) {
                        checkForWinner();
						return;
					}		
					 else if (!(squares[randomNumber].hasChildNodes())) {	
                        crossContainer = document.createElement("div");
                        crossContainer.appendChild(createCross());									        
						setTimeout(() => {squares[randomNumber].appendChild(crossContainer);}, 1000);
                        noughtsAndCrosses[randomNumber + 1] = createCross().nodeValue;
                        console.log({noughtsAndCrosses});
                        checkForWinner();
 					}
					else randomMove();				
			};
            const createNought = function() {			
				nought = document.createTextNode(player1.symbol);				
				return nought;
			};
			const createCross = function() {
				cross = document.createTextNode(player2.symbol);				
				return cross;
			};
		}
        else if (mode == "2Player") {
			const takeTurns = function() {
				if (player == player1) player = player2;
				else player = player1;
				//console.log({player});
				return player;
			};
			const createSign = function() {
				signContainer = document.createElement("div");
				sign = document.createTextNode(player.symbol);
				signContainer.appendChild(sign);
				if (sign.nodeValue == "O")  {
					signContainer.classList.add("nought");
				}             
				//console.log({sign});
				return signContainer;
			}; 		
			for (let i = 0; i < squares.length; i++) {
				squares[i].addEventListener("click", function() {
					if (winner == player1 || winner == player2||winner == "no winner") {  												return;
					}
					else {
						displayText.textContent = "";
						// Alternate between two players on each click:
						takeTurns();
						// Generate the corresponding sign for the current player:
						createSign();
						// Put the sign in the clicked square if that square is empty:
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
		}
	})();
});

