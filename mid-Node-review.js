/* More advanced JS topics from classes, methods, etc 

from JS OO Lecture https://fellowship.hackbrightacademy.com/materials/ft25a/lectures/js-oo/

Topics:
- Objects
- Creating adn using classes
- Inheritance

*/

// **************************************************************
// 1. In Javascript, dictionaries and Objects are the same thing:

let ezra = new Object();

// Create new key:value pairs in this 'dict-like' Object
ezra.name = 'ezra';
ezra.hunger = 30;       // You don't need quotes 
ezra.mood = 'grump';
ezra['age'] = 4;



const dog = {
  'name': 'Freida',
  'color': 'brown/black',
  'hunger': 40,
  'mood': 'feisty',
  'age': 9,
};



// **************************************************************
// 2. JS objects can be iterated over like dictionaries

for (let attribute in dog) {
    console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
}


// **************************************************************
// 3. In JavaScript, Maps are ORDERED collections of key-value pairs. 
// They’re used for key-value pairs that need to maintain order










// **************************************************************
// 4. In JavaScript, CLASSES are similar to py, but 'this' instead of 'self'

class Cat {
    constructor(name) {
        this.name = name;
        this.hunger = 10;

    }

    greet() {
        return `Meow, I am ${this.name}.`  // Note, Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.

    }

    feed(calories) {
        this.hunger -= calories;
        return `Om nom nom ${this.food}`
    }
}




// **************************************************************
// 5. Create instances!

const pisces = new Cat('pisces');

const auden = new Cat('Auden');

console.log(pisces.name + " " 
            + pisces.hunger + " " 
            + auden.name + " " 
            + auden.hunger);




// **************************************************************
// 6. Prototypes = similar to classes in JS.
// Every object in JS points to a prototype. 
// 'Prototype Chain' - all the ancestry

// This is how you add an attribute to a prototype & make a class attribute:
Cat.prototype.food = 'kibble';

// Now each cat shares that value:
console.log(auden.food); 
console.log(ezra.food);





// **************************************************************
// 7. Inheritance 
// A class inherits from another class using `extends` keyword

class SpanishCat extends Cat {

    greet() {
        return `Hola, I'm ${this.name}.`;
    }

    salsa() {
        return `cha cha cha`;
    }
}




// If you want to use the parent class attributes, SUPER it!
class FrenchCat extends Cat {

    greet() {
        // Call parent method using `super` 
        return `Bonjour and ${super.greet()}`;
    }
}




// **************************************************************
// 8. Advanced this 
// 















