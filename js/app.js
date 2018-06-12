$(document).ready(function () {
    let cards = ['fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb',
							'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond',
							'fa-paper-plane-o', 'fa-anchor', 'fa-bicycle', 'fa-bomb',
							'fa-leaf', 'fa-bolt', 'fa-cube', 'fa-diamond'];
    let cardOpen = [];
    let cardMatch = [];
    let value1, value2, fisrtCard, secondCard;
    let cardWaiting = false;
    let counter = 0;

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
		function repeat(){
    $('.fa-repeat').click(function () {
        $('.deck').children().removeClass('show match open');
        $('.deck .fa').removeClass().addClass('fa');
        $('#star1').removeClass('white');
        $('#star2').removeClass('white');
        $('#star3').removeClass('white');
				$('.modal').removeClass('modal-show');
        counter = 0;
        $('.moves').text(counter);
        shuffleCards();
    });}

    shuffleCards();

    function shuffleCards() {
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
            $('p').text(text + " com " + counter + " movimentos");
        }
				repeat();
    }

    console.log("DOM is ready");
});
