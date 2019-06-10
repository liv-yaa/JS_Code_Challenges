"use strict";

// ============================================================
// Demo ES6 classes
//
// Joel Burton <joel@joelburton.com>



class CatES6 {
    constructor(name) {
        this.name = name;
        this.hunger = 10;
    }

    greet() {
        return "Meow, I'm " + this.name;
    }

    eat(calories) {
        this.hunger -= calories;
        return "Nom nom nom, i love " + this.food;
    }
}

// Sadly, there's no way to add a class attribute with
// this new syntax directly (this comes in ES7). You can
// still do this the old-fashioned way:

CatES6.prototype.food = "kibble";

var fluffy6 = new CatES6();


// ============================================================
// It's much easier to do subclassing in ES6:

class FrenchCatES6 extends CatES6 {
    constructor(name) {
        // Call our parent's constructor
        super(name);
        this.hunger = 20;
    }

    greet() {
        // Use super to call our parent's method
        return "Bounjour and " + super.greet();
    }

    // A "getter" property --- this acts like a simple
    // property but it run this code. Use this with
    //
    //    pierre.doubleHunger   // no ()

    get doubleHunger() {
        return this.hunger * 2;
    }

    // A static method --- you can call this on
    // the FrenchCatES6 class itself, like
    //
    //    FrenchCatES6.kibbleToCal(10);
    //
    // or on a french cat:
    //
    //    pierre.kibbleToCal(10);

    static kibbleToCal(kibble) {
        return kibble * .12345;
    }
}

// Override the class attribute; french cats eat brie

FrenchCatES6.prototype.food = "brie";

var pierre6 = new FrenchCatES6("Pierre");


// ============================================================
// A simpler subclass

class SpanishCatES6 extends CatES6 {
    greet() {
        return "Hola, I'm " + this.name;
    }

    salsa() {
        return "cha cha cha";
    }
}

SpanishCatES6.prototype.food = "tapas";

var consuela6 = new SpanishCatES6("Consuela");