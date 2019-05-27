"use strict";

function adder(x, y) {
  return x + y;
}

var adding = function (x, y, z){
  var result = x + y;

  if (z == "double") {
    results = (x + y) * 2;  // hooray, this will throw an error
  }

  return result;
};

adding(5, 6, "double");