"use strict";

// Example without "modules"

var price = 10;

function buyMelon(evt) {
    alert("That melon cost $" + price);
}

$("#buy").on("click", buyMelon);
