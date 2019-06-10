"use strict";

// Example with "modules"

function balloonicorn() {
    var price = 10;

    function buyMelon(evt) {
        alert("That melon cost $" + price);
    }

    $("#buy").on("click", buyMelon);
}

balloonicorn();