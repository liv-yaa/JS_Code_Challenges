/* Testing JS topics!

from JS Testing Lecture 
https://fellowship.hackbrightacademy.com/materials/ft25a/lectures/testing-js/

Uses calc.js and calc-spec.js

    4 Features of a test spec (Nested in each other - see calc-spec.js)
        "Spec File" - the entire following things:
        "Suite" - describe( "text", function () { ... } ); 
        "Specs" - it("should do something", function () { ... });
        "Expects" - any matcher such as expect(sum).toBe(5);

Topics: 
    - Jasmine (a JS testing framework)\
    - Matchers


*/

// **************************************************************
// Jasmine is a JS testing framework that runs in broswer, using JS
// To include it, add the link and script tags to head and body:
    // <head>
    //     <link rel='stylesheet' href="path-to/jasmine.css">
    // </head>
    // <body>
    //      <script src="path-to/jasmine.js"></script>
    // </body>

// You can get Jasmine CSS and JS links at http://cdnjs.com/libraries/jasmine


/* **************************************************************
 'Matchers'
  are the fxns used in an expect clause:

    ~ Matcher ~             ~ Means... ~
    x.toBe(val)             x === val (strict, strong typed)
    x.toEqual(val)          x == val (nonstrict, any type)
    x.toMatch(val)          x matches the regex of val
    x.toBeDefined()         x is a defined variable
    x.toBeNull()            x is null
    x.toBeTruthy()          x is a true value
    x.toBeFalsy()           x is a false value
    x.toContain(val)        val is in the array x
    x.toBeLessThan(val)     x < val
    x.toBeGreaterThan(val)  x > val
    x.toBeCloseTo(val, n)   x == val, round to n places   


*/

