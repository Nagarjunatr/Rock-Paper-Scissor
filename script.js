'use strict';
const weapons=['rock', 'paper','scissor'];
let userChoice;
let compChoice;
let userScore=0;
let compScore=0;
const showResult= function(result){
    document.getElementById('user-choice').textContent=`use Choice: ${userChoice}`;
    document.getElementById('comp-choice').textContent=`Computer Choice: ${compChoice}`;
    document.getElementById('result').textContent=` ${result}`;
    

       
    };
const game= function(input){
 userChoice=input;
    let randomNumber= Math.trunc(Math.random()*3);
 compChoice= weapons[randomNumber];
if(userChoice=='rock'){
    if(compChoice=='rock'){
        showResult('Game Draw');
    }else if(compChoice=='paper'){
        showResult('You lose');
        compScore++;
} else if(compChoice=='scissor'){
    showResult('You win ');
    userScore++;
}
}else if(userChoice=='paper'){
    if(compChoice=='rock'){
        showResult('You win ');
        userScore++;
    }else if(compChoice=='paper'){
        showResult('Game Draw');
} else if(compChoice=='scissor'){
    showResult('You lose');
    compScore++;
}
}
else if(userChoice=='scissor'){
    if(compChoice=='rock'){
        showResult('You lose');
        compScore++;
    }else if(compChoice=='paper'){
        showResult(' You win');
        userScore++;
} else if(compChoice=='scissor'){
    showResult('draw');
}
}
document.getElementById('comp-score').textContent= compScore;
document.getElementById('user-score').textContent= userScore;


};