{
const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
const printMessageRound = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('round').appendChild(div);
}
const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('round').innerHTML = '';
}
const playGame = function(playerInput){
	clearMessages();
	console.log(numberComputer*100/(numberPlayer+numberComputer))
	let playerInputMemory=playerInput;
	let randomOutput = Math.floor(Math.random() * 3 + 1);
	if(randomOutput == 1){
     randomOutput= 'kamień';
  	}
  	if(randomOutput == 2){
	randomOutput= 'papier';
  	}
  	if(randomOutput == 3){
    	randomOutput= 'nożyce';
  	}
  	if((randomOutput == 'kamień' && playerInput == 'papier')
  	||(randomOutput == 'nożyce' && playerInput == 'kamień')
  	||(randomOutput == 'papier' && playerInput == 'nożyce')){
	numberPlayer++;
     printMessage('Ty wygrywasz!');
	printMessage('Zagrałem ' + randomOutput + ', a Ty ' + playerInput);
	printMessageRound("Ty wygrałeś: "+numberPlayer+" Remis: "+remis+" Wygrał computer:"+numberComputer)
  	} else
 	if(randomOutput == playerInput ){
	remis++;
	printMessage('Remis');
	printMessage('Zagrałem ' + randomOutput + ', a Ty ' + playerInput);
	printMessageRound("Ty wygrałeś: "+numberPlayer+" Remis: "+remis+" Wygrał computer:"+numberComputer)
 	}
 	else {
		if (((numberComputer+1)*100/(numberPlayer+numberComputer))<25) {
		numberComputer++;
    		printMessage('Tym razem przegrywasz :(');
		printMessage('Zagrałem ' + randomOutput + ', a Ty ' + playerInput);
		printMessageRound("Ty wygrałeś: "+numberPlayer+" Remis: "+remis+" Wygrał computer:"+numberComputer)
    		}
		else {
		playGame(playerInputMemory)
		}
    }
}

let numberPlayer=0;
let numberComputer=0;
let remis=0;
document.getElementById('play-rock').addEventListener('click', function(){playGame('kamień')});
document.getElementById('play-paper').addEventListener('click', function(){playGame('papier')});
document.getElementById('play-scissors').addEventListener('click', function(){playGame('nożyce')});
}
