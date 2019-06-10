"use strict"; 

// Example of multi-class inheritance in JavaScript
//
// Joel Burton <joel@joelburton.com>
//
// This code is ES5 JS; in ES6, this becomes much easier with
// class ... extends. See cats-es6.js for ES6 version.

// =====================================================================
// Our base cat class:

function RegularCat(name) { 
    this.name = name;
    this.hunger = 10;
}

// The methods for cats:

RegularCat.prototype.speak = function () {
    return "Meow, I am " + this.name;
};

RegularCat.prototype.eat = function (calories) {
    this.hunger -= calories;
    return "Nom nom nom, I love " + this.food;
};

// A class attribute:

RegularCat.prototype.food = "kibble";

// This regular cat works fine and this is great style ---
// everything below this point demonstrates how to subclass this.


// =====================================================================
// Now down to inheritance.
// We want to make a FrenchCat that's a lot like a RegularCat.

// We need to make a FrenchCat constructor function. We could do
// it like this:
//
//   function FrenchCat(name) {
//       this.name = name;
//       this.hunger = 10;
//   }
//
// but we'd be repeating all that code from Cat() --- which is
// bad.
//
// In Python, we could use super(), but JS doesn't have super()
// built-in (in ES6, it does!)
//
// We'll make the constructor for FrenchCat call the constructor for
// RegularCat --- but instead of RegularCat getting the newly-made
// RegularCat instance, we want to have it called on the newly-made
// FrenchCat object:

function FrenchCat(name) {

    // Call the parent classes' constructor function properly:

    RegularCat.apply(this, arguments);

    // ^^^ There's a lot to learn in that line:
    //
    // - .apply(obj, args) is a method on all JS functions. It means
    //   "call the function [named before the dot], but have it's
    //   "this" variable always be my first argument [the one we're
    //   calling "obj"]. The arguments for this function call should
    //   be passed as the second argument to .apply(). Since we want
    //   to call RegularCat on the newly-constructed FrenchCat,
    //   and in our constructor function that newly-constructed
    //   FrenchCat is 'this', we're saying use "our this" as the
    //   "this" for the RegularCat constructor. [Whew!]
    //
    // - arguments is a magic name inside a function in JS; it means
    //   "the list of arguments this function was called with". This
    //   is useful when you want to build variadic functions (functions
    //   that take an arbitrary number of arguments) or when you need
    //   to do meta-programming type things, like this, where one
    //   function passing all its arguments to the other function.

    // We could be slightly less fancy here and instead of that line
    // have this one:
    //
    //    RegularCat.call(this, name)
    //
    // which says "call the RegularCat function, making sure it's 'this'
    // argument is the first arg to call()" [so far this is just like
    // .apply()], but instead of giving it a list of arguments, we'll
    // provide them directly here.
    //
    // I prefer .apply(obj, args) for things like this because I don't
    // have to remember to add more thing to call(...) if I add new
    // arguments --- so it's a bit like my_func(*args) in Python.

    this.hunger = 20;           // French cats are hungrier
}

// We want the prototype for a FrenchCat to not just `e a plain JS
// object (like for RegularCat), but to be a RegularCat instance. This way,
// if you look for an attrib/method on a french cat and don't find it,
// it will look at the prototype for FrenchCat and find attribs/methods
// on RegularCat. (This makes it be the "parent class" or "superclass")

FrenchCat.prototype = Object.create(RegularCat.prototype);

// ^^^ We could have written that as:
//
//    FrenchCat.prototype = new RegularCat("it doesn't matter")
//
// (make the FrenchCat prototype object be a perfectly-good RegularCat)
//
// This is certainly shorter and perhaps clearer-looking. However,
// this actually runs the RegularCat constructor when all we were trying
// to do was tell FrenchCat about it's parent class. As such, if the
// RegularCat constructor had side-effects or was expensive to run,
// we'd pay those costs now, needlessly.
//
// Instead, we use another advanced JS idea: the standard JS Object
// has a method, ".create(proto)", which creates an object, making
// that object's prototype the one provided. So, in essence this gives
// us a RegularCat-derived-instance, getting all the right prototyping
// stuff, but without actually calling the function now.
//
// Since this doesn't actually call RegularCat's constructor, it does
// mean if that does things you need to happen (as we do; we need the
// .name and .hunger assigned), you should make sure your subclasses
// call it in their constructor functions (as we already do, above,
// in the FrenchCat constructor.

// WEIRD AND ADVANCED NOTE ABOUT PROTOTYPICAL INHERITANCE:
//
// As a different way to think about OO, you can use Object.create()
// to have OO without an object constructor.
//
// For example, instead of making a "cat class", we could just
// make a cat that we think is perfectly good:
//
// var eve = {
//      name: "Eve, the original cat",
//      hunger: 10,
//
//      greet: function() { return "Hi, I'm " + this.name }
// }
//
// Now we have a reasonable, functioning cat, Eve. If we wanted
// to derive another cat, we could do so with Object.create():
//
//   var auden = Object.create(eve)
//
// (make Auden, using Eve as his prototype. Note this doesn't mean
// "copy Eve to Auden" --- there's still only copy of that function
// and those attributes)
//
// And now Auden will have access all of her .name. hunger, and .greet
// through prototypical inheritance.
//
// We would want to give him his own name and hunger instance attrs:
//
//    auden.name = "Auden";
//    auden.hunger = 10;
//
// This works fine and is how some people envisioned developers would
// want to use JS for OO. It never quite caught on, though --- most
// people enjoying hiding the realities of prototypical inheritance
// via constructor functions that make it feel like classical OO.

// Change our class attribute; french cats eat brie, not kibble

FrenchCat.prototype.food = "brie";

// Override the speak method

FrenchCat.prototype.speak = function () {
    return "Bonjour, I am " + this.name;
};


// =====================================================================
// Another example: a SpanishCat that subclasses RegularCat.
// Most of this is the same as FrenchCat, above:

function SpanishCat(name) {
    RegularCat.apply(this, arguments);
}

SpanishCat.prototype = Object.create(RegularCat.prototype);

SpanishCat.prototype.speak = function () {
    return "Hola, I am " + this.name;
};

SpanishCat.prototype.food = "tapas";

// And we can add a new method, too:

SpanishCat.prototype.salsa = function () {
    return "cha cha cha";
};


// =====================================================================
// Make some examples of our cats:

var fluffy = new RegularCat("Fluffy");
var pierre = new FrenchCat("Pierre");
var consuela = new SpanishCat("Consuela");
