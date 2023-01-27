var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "images/dice" + randomNumber1 + ".png";

// var randomImageFolder = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImages);


var randomNumber2 = Math.floor(Math.random() * 6 )+1;

var diceRandomImage = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceRandomImage);


if (randomNumber1 > randomNumber2) {
document.querySelector("h2").innerHTML ="Player1 Wins";
}
else if(randomNumber1 < randomNumber2 ){
    document.querySelector("h2").innerHTML="Player2 Wins";
}
else {
    document.querySelector("h2").innerHTML ="Match Ties";
}

