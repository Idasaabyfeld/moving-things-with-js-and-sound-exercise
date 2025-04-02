// Your code here

"use strict";

const dodger = document.getElementById("dodger");

 // Flytter dodger til venstre
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
}

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); // Gør at vi kan flytte elementet til venstre


 // Flytter dodger til højre
 document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const dodger = document.getElementById("dodger"); // Sørg for at hente elementet
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { // Justér grænsen afhængigt af containerens bredde
        dodger.style.left = `${left + 5}px`; // Flytter 5px pr. tryk
    }
}

 // Flytter dodger op
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
});

function moveDodgerUp() {
    const dodger = document.getElementById("dodger"); // Henter elementet
    const bottomNumbers = dodger.style.bottom.replace("px", ""); // Henter 'bottom' værdi
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) { // Justér denne værdi afhængigt af din container
        dodger.style.bottom = `${bottom + 5}px`; // Flytter 5px op
    }
}


// Flytter dodger ned
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
});

function moveDodgerDown() {
    const dodger = document.getElementById("dodger"); // Henter elementet
    const bottomNumbers = dodger.style.bottom.replace("px", ""); // Henter 'bottom' værdi
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) { // Justér denne værdi afhængigt af din container
        dodger.style.bottom = `${bottom - 5}px`; // Flytter 5px op
    }
}

//AUDIO
const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0; // Nulstil lyden til starten
    movementSound.play(); // Afspil lyden
}

function moveDodgerUp() {
    const dodger = document.getElementById("dodger");
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) {
        dodger.style.bottom = `${bottom + 5}px`;
        playSoundOnMovement(); // Afspil lyd
    }
}

function moveDodgerDown() {
    const dodger = document.getElementById("dodger");
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 5}px`;
        playSoundOnMovement(); // Afspil lyd
    }
}

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
        playSoundOnMovement(); // Afspil lyd
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
        playSoundOnMovement(); // Afspil lyd
    }
}
