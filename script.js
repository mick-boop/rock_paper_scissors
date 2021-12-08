function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function computerPlay(){
    let computerValue=getRandomInt(0, 3);
    if (computerValue == 0){
        return 'Rock';
    } else if (computerValue  == 1){
        return 'Paper';
    } else if (computerValue == 2){
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'It\'s a tie!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'Paper' && computerSelection == "Rock"){
        return 'You win! Paper bears Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection =='Scissors' && computerSelection == 'Paper'){
        return 'You win! Scissors beats Paper';
    }
}

let comp = computerPlay();
console.log(playRound('Rock', comp));