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
// c. Skapa en callback function som 'toggle' din nya class
// d. Lägg till din "mouseover" eventlistener som anropar din callback metod
const boxThree = document.querySelector(".box-3");

function newBgColour() {
  boxThree.classList.toggle("greenBg");
}

boxThree.addEventListener("mouseover", newBgColour);

// Button 4
// 4.
// a. Hämta knappen till en variabel
// b. Vid mouse click ändra färgen på bakgrunden inom knappen
// c. Skapa 2 nya klasser... med en färg bakgrund... och en med ingen färg bakgrund
// d. Använd en if sats för att byta mellan (vid klick) färg och ingen färg

const btnFour = document.querySelector(".btn-4");

function newColour() {
  if (btnFour.classList.contains("redBg")) {
    btnFour.classList.add("noBg");
    btnFour.classList.remove("redBg");
  } else {
    btnFour.classList.add("redBg");
    btnFour.classList.remove("noBg");
  }
}

btnFour.addEventListener("click", newColour);

// Button 5
// 5.
// a. Hämta knappen till en variabel
// b. Skapa en metod som ändrar rubriktexten i box 5 till italic

const btnFive = document.querySelector(".btn-5");
const headingFive = document.querySelector("#heading-5");

function italic() {
  headingFive.style.fontStyle = "italic";
}

btnFive.addEventListener("click", italic);

// Button 6
// 6.
// a. Hämta knappen till en variabel
// b. Skapa en metod som ändrar bakgrundsfärgen på hela sidan

const btnSix = document.querySelector(".btn-6");

function bgBody() {
  document.body.style.background = "green";
}

btnSix.addEventListener("click", bgBody);

console.log(btnSix);
