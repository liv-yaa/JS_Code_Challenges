"use strict";

// Create a class for cats

// We do this by:
//
// - making a constructor function

function Cat(name) {
    this.name = name;
    this.hunger = 10;
}

// - editing its prototype

Cat.prototype.greet = function () {
    return "Meow, I'm " + this.name
};

Cat.prototype.eat = function(calories) {
    this.hunger -= calories;
    return "Nom, nom, nom.";
};

Cat.prototype.food = "kibble";
