function rollDices (){

var diceNumber1 = Math.ceil(Math.random()*6);
var diceNumber2 = Math.ceil(Math.random()*6);

var rollDice1 = "images/dice" + diceNumber1 + ".png";
var rollDice2 = "images/dice" + diceNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", rollDice1);
document.querySelector(".img2").setAttribute("src", rollDice2);

if(diceNumber1 > diceNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (diceNumber1 < diceNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw, try agin!";
}

}

rollDices();


//alert(diceNumber1 + " , " + diceNumber2);
