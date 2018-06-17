# Projeto final do curso de Fundamentos de Front-End da Udacity.

#### Índice
- [Sobre o Memory Game](#sobre-o-memory-game)
- [Começando a jogar](#começando-a-jogar)
- [Biblioteca utilizada](#biblioteca-utilizada)


## Sobre o Memory Game
O jogo possui pares de cartas que estão embaralhadas. Para jogar, é necessário escolher duas cartas e
caso as cartas combinem (sejam do mesmo tipo), ambas ficaram em evidência, até que o jogador encontre
todas os outros pares de cartas.

Para embaralhar, foi utilizado as funções abaixo:

```
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
```
e esta:
```
function shuffleCards() {
    cards = shuffle(cards);
    $('.deck .fa').each(function(index, elemento) {
        $(this).addClass(cards[index]);
    });
}

shuffleCards();
```
Está função já começa a rodar assim que a página é carregada, ou quando o botão de **reiniciar** o jogo é clicado.

Referência do código principal: [stackoverflow](http://stackoverflow.com/a/2450976).

## Começando a jogar
- Para iniciar o jogo, clique no botão **start game**.
- O cronometro começará a contar a partir do **00:00:00**.
- Há 3 estrelas, depois de **16 movimentos**, o jogador perde uma, depois de mais 8 (24 movimentos) o jogador perde
  mais uma e depois de mais 8 (32 movimentos), não sobram nenhuma estrela.

Para a execução do código e iniciar do cronometro, há um *event listener* dentro da função `repeat()`:
```
function repeat() {
    $('.repeat').click(function() { //linha do event listener 'click'
        startCounting();
        a = 0;
        b = 0;
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
```
Para selecionar as cartas, também é usado um *event listener*, como no código abaixo:
```
$('.deck').on('click', '.card', selectCard);
```

## Dependências
### Biblioteca utilizada

- Para a criação do código, foi utilizado javascript e a biblioteca [jQuery](https://jquery.com) 3.3.1.

### Estilização

- A estilização da jogo está no arquivo [css/app.css](css/app.css).
- Para a criação das figuras como avião, estrelas, bombas, etc. foram  foi utilzado um arquivo css da FontAwesome: [link](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css). Este arquivo (ou `<link ...>`), encontrasse no `head` do arquivo.
-  A fonte utilizada, obtida no Google Fonts pode ser encontrada [aqui](https://fonts.googleapis.com/css?family=Coda).
