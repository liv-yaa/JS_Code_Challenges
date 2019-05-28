// Practice for Buzz Solutions - Node.js hackbright lectures
// Notes and demos



"use strict"

// function adder(x, y) {
//     return x + y;
// }



function adding(x, y, z) {
    var result = x + y;

    if (z == "double") {
        var results = (x + y) * 2;
    }

    return result;
};


console.log(adding(5, 6, "double"));


// Arrow functions!

// var materials = {
//     'Hycrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// };

// console.log(materials.map(material => material.length));


// How to make Objects

var capitals = {
    "MD": 'Anapolis',
    "CA": 'Sacramento',
    "OR": 'Salem'
};

// Add using dictionary addition
capitals.NY = 'Albany';
capitals["WA"] = 'Olympia';

// What does this do?
Object.keys(capitals)
Object.values(capitals)
Object.entries(capitals)

for (var k in capitals) {
    console.log(capitals[k] + "is the captial of " + k);
}
