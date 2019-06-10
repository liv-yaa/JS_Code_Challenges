"use strict";

// Bad example without "modules"

var price = 2;

function shipOrder(evt) {
    alert("Shipping cost is $" + price);
}

$("#ship").on("click", shipOrder);
