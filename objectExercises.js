//1. Write code to make daughter inherit properties from mom. What are the 
//daugther's properties and their values? Print them out.

//2.Two Add a method called showInfo to mom by attaching a function 
//to it as a property. Calling this method will print out all four 
//properties. Call this method on both mom and daugther.

let mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black',
    showInfo: function () {
        console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
    }
};

let daughter = {
    firstName: 'Ilene',
    hairColor: 'brown',
};
// mom.showInfo();
// daughter.__proto__ = mom;
// daughter.showInfo();

/*
Person
Given this Person type:

function Person(name) {
     this.name = name;
     this.friends = [];
}

Person.prototype.addFriend = function(friend) {
     this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
     return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person.prototype.greet = function(other) {
     console.log(this.createGreeting(other));
};
Rewrite the above type as a class.
Given this code:

function Person(name, email, phone) {
     this.name = name;
     this.email = email;
     this.phone = phone;
}

Person.prototype.greet = function(other) {
     console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};
Write code to

1. Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', 
and phone of '483-485-4948', store it in the variable sonny.
2. Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', 
and phone of '495-586-3456', store it in the variable 'jordan'.
3. Have sonny greet jordan using the greet method.
4. Have jordan greet sonny using the greet method.
5. Write a statement to print the contact info (email and phone) of Sonny.
6. Write another statement to print the contact info of Jordan.
*/

class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.friends = [];
        this.email = email;
        this.phone = phone;
    }
    addFriend(friend) {
        let friendArr = [...arguments]
        friendArr.forEach(item => this.friends.push(item));
    }
    createGreeting(other) {
        return `Yo ${other.name}! I'm ${this.name}.`;
    }
    greet(other) {
        console.log(this.createGreeting(other));
    }
    lazyGreet(other) {
        setTimeout(() => this.greet(other), 2000);
    }
    createGreetingsForFriends() {
        const friendsGreeted = this.friends.map((item, index) => {
            return this.createGreeting(this.friends[index]);
        });
        return friendsGreeted;
    }
    printContactInfo() {
        console.log(`${this.name}'s Email:${this.email} and Phone: ${this.phone}.`)
    }

}
const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
const chauncey = new Person('Chauncey');
const arnold = new Person('Arnold');
const coco = new Person("Coco");
coco.addFriend(arnold, chauncey, sonny, jordan);
arnold.addFriend(coco.chauncey, sonny);
chauncey.addFriend(arnold, coco, jordan, sonny);
//console.log(arnold.friends);
//chauncey.greet(arnold);
//arnold.lazyGreet(chauncey);
//console.log(chauncey.friends);
// chauncey.createGreetingsForFriends();
// arnold.createGreetingsForFriends();
// sonny.greet(jordan);
// jordan.greet(sonny);
// jordan.printContactInfo();
// sonny.printContactInfo();


/*
Card Constructor
Create a class Card. A card object will have 2 properties:

point - the point value of the card: a number between 1 and 13.
suit - the suit of the card: one of diamonds, clubs, hearts and spades.
A card will be created thus:

> var myCard = new Card(5, 'diamonds')

And you can access the individual properties like:
> myCard.point 5
> myCard.suit 'diamonds'
*/



class Card {
    constructor (point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`;
    }

}

class Hand extends Card {
    constructor (point, suit, cards) {
        super(point, suit);
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
}

const myHand = new Hand();

// myHand.addCard(new Card(1, 'diamonds'));
// myHand.addCard(new Card(1, 'hearts'))

//console.log(myHand.cards);

/*
Deck constructor
A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle 
itself, and be asked to draw a card. We would like to be able to do this with a Deckconstructor:

> var myDeck = new Deck()
> myDeck.draw()
Card {point: 6, suit: "clubs"}
> myDeck.draw()
Card {point: 1, suit: "spades"}
> myDeck.shuffle()
> myDeck.numCardsLeft()
50
Implement a Deck constructor that will allow for the above code to work.


*/

class Deck {
    constructor (cards) {
        this.cards = [];
    }
    drawCard() {
        if (this.cards.length) {
            console.log(`You have drawn the ${this.cards[this.cards.length - 1].point} of ${this.cards[this.cards.length - 1].suit}`);
            myHand.addCard(this.cards.pop());
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

const myDeck = new Deck();


// console.log(myDeck);
// myDeck.drawCard();
// myDeck.shuffleDeck();
// console.log(myDeck);
// myDeck.drawCard();
// myDeck.drawCard();
// myDeck.drawCard();
const deckGenerator = (suit) => {
    let i = 1;
    while ( i <= 13) {
        myDeck.cards.push(new Card(i, suit));
        i++;
    }
}
deckGenerator('clubs');
deckGenerator('spades');
deckGenerator('hearts');
deckGenerator('diamonds');
myDeck.shuffleDeck();
console.log(myDeck);
myDeck.drawCard();
myDeck.drawCard();
console.log(myDeck.cards.length);