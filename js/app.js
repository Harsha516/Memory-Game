"use strict";
let decks = document.getElementById("deck");

/*
 * Create a list that holds all of your cards
 */
let childs = document.getElementsByClassName("card");

let packs = [...childs];

let timeStatus = 0;
let timeArea = document.getElementById("time");
let times;
let move = 0;
let match = 0;
let cardStore = [];
let min;
let sec;
let hours;
let moveSection = document.getElementById("moves");
let starCount = 3;
let starSection = [...document.getElementsByClassName("fa-star")];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
window.onload = inceptGame();

function inceptGame() {
  var manipulatedCards = shuffle(packs);
  for (var i = 0; i < manipulatedCards.length; i++) {
    console.log(manipulatedCards[i]);
    decks.append(manipulatedCards[i]);

  }
}

var matchedCards = document.getElementsByClassName("matched")

for (var i = 0; i < childs.length; i++) {
  childs[i].addEventListener("click", showCard);
}

function showCard() {
  if (timeStatus == 0) {
    startTimer();
    timeStatus = timeStatus + 1;
  }

  this.classList.add("card");
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable");
  cardStore.push(this);
  if (cardStore.length == 2) {
    console.log(cardStore[0].children[0].classList.item(1));
    move = move + 1;
    moveSection.innerHTML = move;
    starRating();
    if (cardStore[0].children[0].classList.item(1) == cardStore[1].children[0].classList.item(1)) {
      console.log("matched");
      cardStore[0].classList.add("match", "disable");
      cardStore[1].classList.add("match", "disable");
      console.log(matchedCards.length);
      match = match + 1;
      if (match == 8) {
        clearInterval(times);
        Swal.fire({
          title: "CONGRATULATIONS",
          html: 'You have earned <strong style="color:#ff9f33; text-shadow:3px 3px 3px #000">' + starCount + '<i class="fa fa-star"> </i> </strong> <br> And You Completed this game with the time of <br>' + hours + ' hours :' + min + 'minutes :' + sec + 'seconds',
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
        }).then(() => {
          document.location.reload();
        });
      }
      cardStore = [];
    } else {
      cardStore[0].classList.add("unmatch");
      cardStore[1].classList.add("unmatch");
      console.log("unmatched");
      cardStore.map((card) => {
        setTimeout(() => {
          card.classList.remove("unmatch", "open", "show", "disable");
        }, 200);
      })

      cardStore = [];
    }
  }
}

var matchedCards = document.getElementsByClassName("match");
sec = 0;
min = 0;
hours = 0;
//Timer functionality
function startTimer() {
  times = setInterval(() => {
    sec = sec + 1;
    if (sec == 59) {

      min = min + 1;
      sec = 0
    }
    if (min == 60) {

      hours = hours + 1;
      min = 0;
    }
    timeArea.innerHTML = hours + " : " + min + " : " + sec;
  }, 1000)
  if (matchedCards.length == 16) {
    clearInterval(times);
  }
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
function starRating() {
  if (move > 12 && move <= 18) {
    starCount = 2;
    starSection[2].style.display = "none";
  }
  if (move > 18) {
    starCount = 1;
    starSection[1].style.display = "none";
  }
}
