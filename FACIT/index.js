// Event Listeners

// Button 1
// 1. Skapa en inline event som anropar alert metoden. Välj något att skriva ut

// Button 2
// 2.
// a. Hämta knappen till en variabel.
// b. Skapa en callback function som skicka en alert med valfri text
// c. Lägg till din eventlistener som anropar din callback metod
const buttonTwo = document.querySelector(".btn-2");

function alertButton() {
  alert("I also love JavaScript!");
}

buttonTwo.addEventListener("click", alertButton);

// Button 3
// 3.
// a. Hämta hela box 3 till en variabel.
// b. Skapa en ny css class som gör bakgrundsfärgen grön
// c. Skapa en callback function som toggle din nya class
// d. Lägg till din "mouseover" eventlistener som anropar din callback metod
const boxThree = document.querySelector(".box-3");

function newBgColour() {
  boxThree.classList.toggle("greenBg");
}

boxThree.addEventListener("mouseover", newBgColour);