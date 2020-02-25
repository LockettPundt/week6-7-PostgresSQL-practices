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
    showInfo: function() {
        console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
    }
};

let daughter  = {
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
    constructor (name, email, phone) {
        this.name = name;
        this.friends = [];
        this.email = email;
        this.phone = phone;
    }
    addFriend(friend) {
        // const friendArr = friend.split(',');
        this.friends.push(friend);
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
coco.addFriend(arnold);
coco.addFriend(chauncey);
arnold.addFriend(coco);
arnold.addFriend(chauncey);
chauncey.addFriend(arnold);
chauncey.addFriend(coco);
//console.log(arnold.friends);
//chauncey.greet(arnold);
//arnold.lazyGreet(chauncey);
//console.log(chauncey.friends);
chauncey.createGreetingsForFriends();
arnold.createGreetingsForFriends();
sonny.greet(jordan);
jordan.greet(sonny);
jordan.printContactInfo();






