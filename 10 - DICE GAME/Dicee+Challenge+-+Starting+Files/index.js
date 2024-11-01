var randomNumber1=(Math.floor( Math.random()*6) +1);
var randomNumber2=(Math.floor( Math.random()*6) +1);

function randomGenerator1() {
    var dice1="./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", dice1);
}

function randomGenerator2() {
    var dice2="./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", dice2);
}

randomGenerator1();
randomGenerator2();

if( randomNumber1 > randomNumber2){
    document.querySelector(".container>h1").textContent="Player 1 wins!"
} else if(randomNumber1 < randomNumber2){
        document.querySelector(".container>h1").textContent="Player 2 wins!"
} else{
    document.querySelector(".container>h1").textContent="IT'S A DRAW!"   
}