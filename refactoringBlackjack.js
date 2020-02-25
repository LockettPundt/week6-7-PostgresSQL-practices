//BlackJack game with Objects.

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`;
    }

}


class Hand extends Card {
    constructor(point, suit, name, cards) {
        super(point, suit);
        this.name = name;
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    handValue = () => {
        let sum = 0;
        this.cards.forEach(card => {
            sum += card.point;
        });
        //console.log(`Your hand total is ${sum}.`)
        return sum;
    }
}


class Deck {
    constructor(cards) {
        this.cards = [];
    }
    drawCard(owner) {
        if (this.cards.length) {
            console.log(`${owner.name} was dealt the ${this.cards[this.cards.length - 1].point} of ${this.cards[this.cards.length - 1].suit}`);
            owner.addCard(this.cards.pop());
        } else {
            console.log(`There are no more cards to draw`);
        }
    }
    shuffleDeck() {
        myHand.cards.forEach(card => {
            this.cards.push(card);
        });
        myHand.cards = [];
        let random = () => {
            for (let i = this.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
        }
        random();
    }
}

const deckGenerator = (suit) => {
    let i = 1;
    while (i <= 13) {
        myDeck.cards.push(new Card(i, suit));
        i++;
    }
}

const dealerHand = new Hand(null, null, 'The Dealer');
const myHand = new Hand(null, null, 'The Hero');
const myDeck = new Deck();
deckGenerator('clubs');
deckGenerator('spades');
deckGenerator('hearts');
deckGenerator('diamonds');

myDeck.shuffleDeck();
myDeck.shuffleDeck();
myDeck.shuffleDeck();
// console.log(myDeck);
// myDeck.drawCard(dealerHand);
// console.log(dealerHand);


const newGame = () => {
    myDeck.shuffleDeck();
    myDeck.drawCard(dealerHand);
    myDeck.drawCard(myHand);
    myDeck.drawCard(dealerHand);
    myDeck.drawCard(myHand);
    //console.log(myHand.handValue());
    while (dealerHand.handValue() <= 16) {
        myDeck.drawCard(dealerHand);
        dealerHand.handValue();
    }
    while (myHand.handValue() <= 16) {
        myDeck.drawCard(myHand);
        console.log(`You have ${myHand.handValue()}.`)
        myHand.handValue();
    }
    if (dealerHand.handValue() > 21) {
        console.log(`You Win!! Dealer busted with ${dealerHand.handValue()}`);
    } else if (myHand.handValue() > 21) {
        console.log(`Sorry you busted out with ${myHand.handValue()}!`);
    } else if (myHand.handValue() === 21) {
        console.log(`Blackjack!!!`);
    } else if (myHand.handValue() > dealerHand.handValue() && myHand.handValue() < 22) {
        console.log(`You win with ${myHand.handValue()}!`);
    } else {
        console.log(`You lose with ${myHand.handValue()}!`);
    }

}

newGame();