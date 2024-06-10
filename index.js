function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function dicee(randomNumber1) {
    if(randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if(randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if(randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if(randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if(randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else if(randomNumber1 === 6) {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }
}

function dicee2(randomNumber2) {
    if(randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if(randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if(randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if(randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if(randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else if(randomNumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }
}

// Generate random numbers
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

// Set images based on random numbers
dicee(randomNumber1);
dicee2(randomNumber2);
if ( randomNumber1>randomNumber2){
document.querySelector("h1").textContent="Player 1 wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 wins"
}else{
    document.querySelector("h1").textContent="Draw"
}

