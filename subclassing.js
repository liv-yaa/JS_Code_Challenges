// subclassing.js - Copy of cats-es6.js from lecture

"use strict";

// Standard cat class in ES6:
class Cat {
    constructor(name) {
        this.name = name;
        this.hunger = 10;
    }

    greet() {
        return "Meow, I'm " + this.name;
    }

    eat(calories) {
        this.hunger -= calories;
        return "Nom" + this.food;
    }
}


// There is no way to add a class attribute
Cat.prototype.food = "kibble";

var fluffy = new Cat();



// Subclassing:
class FrenchCat extends Cat {
    constructor(name) {
        // Call our parent's constructor
        super(name);
        this.hunger = 20;

    }

    greet () {
        // Use super to call our parent's method
        return "Bonjour " + super.greet();
    }

    get doubleHunger() {
        return this.hunger * 2;
    }

    static kibbleToCal(kibble) {
        return kibble * .1234;
    }
}

FrenchCat.prototype.food = 'Brie';

var pierre = new FrenchCat('Pierre');
























