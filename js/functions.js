function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(argMoveId){
  if(argMoveId == '1'){
    return 'kamień';
  }
  if(argMoveId == '2'){
    return 'papier';
  }
  if(argMoveId == '3'){
    return 'nożyce';
  }
 else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
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
let randomOutput = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
displayResult(getMoveName(randomOutput),getMoveName(playerInput));
