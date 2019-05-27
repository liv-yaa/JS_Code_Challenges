// Practice for Buzz Solutions - Node.js hackbright lectures
// Notes and demos



"use strict"

function adder(x, y) {
    return x + y;
}



function adding(x, y, z) {
    var result = x + y;

    if (z == "double") {
        var results = (x + y) * 2;
    }

    return result;
};


console.log(adding(5, 6, "double"));