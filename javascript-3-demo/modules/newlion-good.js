"use strict";

// Good example with "modules"

function newlion() {
    var price = 2;

    function shipOrder(evt) {
        alert("Shipping cost is $" + price);
    }

    $("#ship").on("click", shipOrder);
}

newlion();