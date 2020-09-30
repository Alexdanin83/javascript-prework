function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let computerMove = `brak`;
let playerMove = 'brak';
let randomOutput = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
  playerMove = 'papier';
}
if(playerInput == '3'){
  playerMove = 'nożyce';
}
if(randomOutput == '1'){
  computerMove = 'kamień';
}
if(randomOutput == '2'){
  computerMove = 'papier';
}
if(randomOutput == '3'){
  computerMove = 'nożyce';
}
printMessage('Zagrałem ' + playerMove + '  Komputer zagrał '+computerMove);

if((computerMove == 'kamień' && playerMove == 'papier')
||(computerMove == 'nożyce' && playerMove == 'kamień')
||(computerMove == 'papier' && playerMove == 'nożyce')){
  printMessage('Ty wygrywasz!');
} else
if( computerMove == playerMove ){
  printMessage('Remis');
} else
printMessage('Ty przygrywasz!');

console.log('Gracz wpisał: ' + playerInput);
console.log('Komputer wylosował wpisał: ' + randomOutput);
