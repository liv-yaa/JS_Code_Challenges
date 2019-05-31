// leetcode.js
// Copying from copy


// From HB JS-1 Lecture:

/* These formats are 'function expressions' , or long-winded 
    'arrow functions' - you don't need the name of the function to last,
    but you do want to keep the result of it stored in a variable.

    Why? We don't want to call them immediately.

    Later, 'function expressions' are useful for callbacks such as:
        >> setTimeout(flipAndInvertImage, 1000);

    If the body of the function is short, just do a one liner:
        >> setTimeout(function () { alert("Time's Up"); }, 7000);

    ** Function expressions and object literals both need semicolons! 
    ** Since they are not blocks:

        var adder = function (x, y) {
          return x + y;
        };

        var states = {
          "MD": "Annapolis",
          "CA": "Sacramento"
        };

        function adder(x, y) {
          return x + y;
        }                           // No semicolon - be careful


*/

/* ARRAY methods:
    var states = ['MD', 'VA', 'CA'];

    states.push('NY');

    states[2];            // 'CA'
    states.slice(2);      // ['CA', 'NY']
    states.slice(2, 3);   // ['CA']

    for (var state of states) {
        console.log("I love " + state);
    }

    for (var i = 0; i < states.length; i++) {
        console.log("I love " + states[i]);
    }

    
    ******* Arrays use 'of' ***********
*/

/* DICTIONARY methods:
    var capitals = {
      "MD": 'Annapolis',
      "CA": 'Sacramento',
      "OR": 'Salem'
    };

    capitals.NY = 'Albany';
    capitals["WA"] = 'Olympia';

    Object.keys(capitals)
    Object.values(capitals)
    Object.entries(capitals)

    for (var k in capitals) {
        console.log(capitals[k] +
                    " is the capital of " +
                    k);
    }


    *** Dictionaries use 'in' ***********


    *** Note that in JavaScript, you don’t need to quote the keys of objects if those keys are acceptable JavaScript identifier names.
        var capitals = {
          MD: 'Annapolis'           // Strange but ok
        };


    *** Dot notation for Dictionaires ****
        capitals.MD         
        capitals['New York']
*/

// 905. Sort Array By Parity
var sortArrayByParity = function(A) {
    let even = A.filter(a => a % 2 === 0);
    let odd = A.filter(a => a % 2 === 1);
    return even.concat(odd);
};


// 832. Flipping an Image
var flipAndInvertImage = function(A) {
    A.forEach((row, i) => {
        A[i] = row.reverse();
        A[i].forEach((cell, j) => {
            A[i][j] = cell ^ 1;
        });
    });
};


// 832. Flipping an Image 2 
var flipAndInvertImage2 = function(A) {
    let N = A.length;
    let returnArray = Array(N).fill(0).map(() => Array(N).fill("0"));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            returnArray[i][j] = A[i][N - 1 - j] == 0 ? 1 : 0;
        }
    }
};


/** 771. Jewels and Stones
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    var jewels = J.split("");
    
    for (let stone of S) {
        
        if (jewels.includes(stone)) {
            count += 1;
        }
    }
    
    return count;
      
};



/** 709. To Lower Case
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let outstring = "";
    
    for (let char of str) {
        l = char.toLowerCase()
        outstring += l;
    }
    
    return outstring;
};


/** 804. Unique Morse Code Words - my solution
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    
    var codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    var result = {}; // keys are alpha and codes are values
    
    for (var i = 0; i < alpha.length; i ++ ) {
        result[alpha[i]] = codes[i];
    }
    
    // Create a list of all transformations (t)
    let transforms = [];
    
    for (let word of words) {
        
        // Get each word's transformation and add it to array
        t = "";
        for (let char of word) {
            
            if (Object.keys(result).includes(char)) {
                
                t += result[char];
            }
        }
        
        transforms.push(t);
        
    }
        
    // Count unique items in the array
    let set = new Set(transforms);

    return set.size;
    
};













