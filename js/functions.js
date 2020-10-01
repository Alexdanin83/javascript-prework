function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argPlayerMove=='nieznany ruch'){
      printMessage('Wprowadź poprawną wartość 1-3');
    return;
  }
  if((argComputerMove == 'kamień' && argPlayerMove == 'papier')
  ||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
  ||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
    printMessage('Ty wygrywasz!');
  } else
      if( argComputerMove == argPlayerMove ){
          printMessage('Remis');
          }
            else {
            printMessage('Tym razem przegrywasz :(');
          }
}
function playGame(playerInput){
	clearMessages();
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
	displayResult(randomOutput,playerInput);
}
document.getElementById('play-rock').addEventListener('click', function(){ playGame('kamień')});
document.getElementById('play-paper').addEventListener('click', function(){ playGame('papier')});
document.getElementById('play-scissors').addEventListener('click', function(){ playGame('nożyce')});
