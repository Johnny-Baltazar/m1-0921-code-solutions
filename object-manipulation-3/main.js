console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Aaron Rodgers',
    cards: [],
    total: []
  },
  {
    name: 'Jimmy Garoppolo',
    cards: [],
    total: []
  }
];

var deck = [];

var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

function makeDeck(suits) {
  for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    var currentSuit = suits[suitIndex];

    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = `${rankCounter}`;

      if (cardName === '1') {
        cardName = 'Ace';
      } else if (cardName === '11') {
        cardName = 'Jack';
      } else if (cardName === '12') {
        cardName = 'Queen';
      } else if (cardName === '13') {
        cardName = 'King';
      }

      var card = {
        value: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      deck.push(card);
    }
  }

  return deck;
}
makeDeck(suits);

function shuffleDeck(makeDeck) {
  for (var i = deck.length - 1; i > 0; i--) { // shuffles deck
    var j = Math.floor(Math.random() * i);
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}
shuffleDeck(deck);

var cards;

players.map((value, index) => {

  for (var h = 0; h < 2; h++) {

    if (deck[h].value === 'Ace') {
      deck[h].rank = 14;
    }
    cards = deck[h].value + ' ' + deck[h].suit + ' ' + deck[h].rank;
    value.cards.push(cards);
    value.total.push(deck[h].rank);
    deck.pop(deck[h]);

  }

  value.total = value.total[0] + value.total[1];

  shuffleDeck(deck);
  return deck;
});

if (players[0].total > players[1].total) {
  console.log(players[0].name + ' is the Winner!');
} else if (players[0].total === players[1].total) {
  console.log('It\'s a Tie!');
} else {
  console.log(players[1].name + ' is the Winner!');
}
