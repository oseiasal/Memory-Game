let cards = ['fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb', 'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb', 'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond'];

let cardOpen = [];
let cardMatch = [];
let value1;
let value2;
let fisrtCard;
let secondCard;
let cardWaiting = false;
let counter = 0;
let star1;
let star2;
let star3;

$( document ).ready(function(){
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
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
//botão repeat
$('.fa-repeat').click(function(){
  $('.deck').children().removeClass('show match open');
  $('.deck .fa').removeClass().addClass('fa')
  counter = 0;
  $('.moves').text(counter);
    shuffleCards()
});

shuffleCards();
function shuffleCards(){
  cards = shuffle(cards);
$('.deck .fa').each(function (index, elemento) {
    $(this).addClass(cards[index]);
});
}

$('.deck').on('click', '.card', handler); // listener Card OK

function handler(event) {

    if ($(this).hasClass('match')) {

        alert("Select another Card");

    } else {

        $(this).toggleClass('open show');
        checkCardFlag();

        if (cardWaiting == true) {
            firstCard = $(this).children().attr('class');

        } else {
            secondCard = $(this).children().attr('class');
            count();

        }

        if (firstCard != null && secondCard != null && cardWaiting == false) {
            checkCardValues();

        }

    }


}

function checkCardValues() {
    value1 = firstCard;
    value2 = secondCard;

    if (value1 == value2) {
        value1 = 0; //reseta
        value2 = 0; //reseta
        firstCard = null; //reseta
        secondCard = null; //reseta
        $('.deck').find('.open').addClass('match').removeClass('open show');
    } else {
        setTimeout(nonMatch(), 300);
        setTimeout(function () {
            $('.deck').find('.wrong').removeClass('wrong')
        }, 500);
    }
}

function checkCardFlag() {

    if (cardWaiting == false) {
        cardWaiting = true;
    } else {
        cardWaiting = false;
    }
    return cardWaiting;
}

function nonMatch() {
    $('.deck').find('.open').removeClass('open show').addClass('wrong');
}

function count() {
  var moves = $('.moves');
  counter = counter + 1;
  moves.text(counter)
}
console.log("DOM is ready");
/*
 * set up the event listener for a card. If a card is clicked: OK
 *  - display the card's symbol (put this functionality in another function that you call from this one) OK
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) OK
 *  - if the list already has another card, check to see if the two cards match ? OK
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) OK
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one) OK
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
});
