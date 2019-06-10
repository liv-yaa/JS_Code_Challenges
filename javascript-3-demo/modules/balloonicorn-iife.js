"use strict";

// Example with IIFE "modules"

(function () {
    var price = 10;

    function buyMelon(evt) {
        alert("That melon cost $" + price);
    }

    $("#buy").on("click", buyMelon);
})();