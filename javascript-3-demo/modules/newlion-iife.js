"use strict";

// Good example with IIFE "modules"

(function () {
    var price = 2;

    function shipOrder(evt) {
        alert("Shipping cost is $" + price);
    }

    $("#ship").on("click", shipOrder);
})();