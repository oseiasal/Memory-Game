let cards = ['fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb',
                        'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond',
                        'fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb',
                        'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond'];
let cardOpen = [];
let cardMatch = [];
let value1, value2, fisrtCard, secondCard;
let cardWaiting = false,
    start = false;
let counter = 0;
let seconds = 0,
    minutes = 0,
    hour = 0;
let timerStarts = false;
let diff, start_time, loop;

$(document).ready(function () {

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
    repeat();

    function repeat() {
        $('.repeat').click(function () {
            startCounting();
            $('.start-box').addClass('start-game')
            $('.deck').children().removeClass('show match open');
            $('.deck .fa').removeClass().addClass('fa');
            $('#star1').removeClass('white');
            $('#star2').removeClass('white');
            $('#star3').removeClass('white');
            $('.modal').removeClass('modal-show');
            counter = 0;
            $('.moves').text(counter);
            shuffleCards();
        });
    }

    shuffleCards();

    function shuffleCards() {
        cards = shuffle(cards);
        $('.deck .fa').each(function (index, elemento) {
            $(this).addClass(cards[index]);
        });
    }

    $('.deck').on('click', '.card', selectCard); // listener Card OK

    function selectCard(event) {
        if ($(this).hasClass('match')) {
            alert("Select another Card");
        } else {
            $(this).toggleClass('open show');
            checkCardFlag();
            timerStarts = true;
            if (cardWaiting == true) {
                //startCounting();
                firstCard = $(this).children().attr('class');
            } else {
                secondCard = $(this).children().attr('class');
                count();
            }
            if (firstCard != null && secondCard != null && cardWaiting == false) {
                checkCardValues();
            }
        }
        deadStar();
        myModal();

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

    function deadStar() {
        if (counter == 16) {
            $('#star3').addClass('white');
        } else if (counter == 24) {
            $('#star2').addClass('white');
        } else if (counter == 32) {
            $('#star1').addClass('white');
        }
    }

    function myModal() {
        if ($('.deck').find('.match').length == 16) {
            $('.modal').toggleClass('modal-show');
            var text = $('p').text();
            $('p').text("Parabens, você completou o jogo com " + counter + " movimentos");
        }
        repeat();
    }

    // important
    function startCounting(startTime) {
        start_time = typeof (startTime) == 'undefined' ? new Date() : startTime;
        loop = window.setInterval(uptodate, 1000);
    }

    // Unavaiable to be tested
   var uptodate = function update() {
        printTime(format_seconds(getTime()));
    }

    function printTime(time) {
        $('.timer').text(time);
    }

    function getTime() {
        return (new Date() - start_time);
    }

    function format_seconds(seconds) {
        if (isNaN(seconds))
            seconds = 0;
        var diff = new Date(seconds);
        var minutes = diff.getMinutes();
        var seconds = diff.getSeconds();
        console.log(seconds);

        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;

        return "00:" + minutes + ":" + seconds;
    }
});
