// From lecture - used in conj with testing-js.js

function adder(x, y) {
    return x + y;
}
c

$('#calc-form').on('submit', function (evt) {
    evt.preventDefault();

    var x = parseInt($('#x-field').val());
    var y = parseInt($('#y-field').val());

    $('#result').text(adder(x, y));

});

