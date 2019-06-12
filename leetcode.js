// leetcode.js PLUS whirlwind JS review  5/31/19


// From HB JS-1 Lecture:
/*
    var vs const vs let: https://hackernoon.com/js-var-let-or-const-67e51dbb716f
    - var is NOT block scoped. That is, it will be valid outside the block.
    - let IS block scoped. So it will not be valid outside the block. 
        Specific scope -- less namespace error
    - const is a constant. TypeError if you try to re-assign it.

*/

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
/* STRING (String.prototype)** methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

    *** All String instances inherit from String.prototype.
    *** Changes to the String prototype object are propagated
    *** to all String instances. And, PROPERTIES are:
        - String.prototype.constructor
        - String.prototype.length
            .. the length of the string

        - N
            .. Used to access a character at the N position


    - convert anything to a string using the .toString() method


    - .indexOf()
        Returns the index within the String object, 
        or -1 if not found


    - String.prototype.charAt()
        Returns the character at the specified index


    - eval() 
        Takes a string and evaluates the expression:
        
        eval('2 + 2');
        // 4

        eval(new String('2 + 2'));
        // '2 + 2'

        eval('2 + 2') === eval('4');
        // true


    - SPLITTING
        var myString = 'ca,bc,a,cbd,a';

        var splitt = myString.split(',');
        // splitt is ['ca', 'bc', 'a', 'cbd', 'a']

        var splits = myString.split(['a', 'b']);
        // splits is ['c', 'c', 'c']

        var myString2 = 'Hello 1 word. Sentence number 2.';
        var splits2 = myString2.split(/(\d)/);
        // splits2 is [ "Hello ", "1", " word. Sentence number ", "2", "." ]


    - REVERSING    


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

/* SET methods:

    mySet = new Set(); // Have to use constructor, not just {}
    mySet.add(value); // Adds value

    
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
    if ('x' in dictionary) {
        whatever
    }


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
    
    // Created a JSON (JavaScript Object Notation) Object:
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
// Here is their better solution (https://leetcode.com/problems/unique-morse-code-words/discuss/128738/Declarative-Javascript)
var uniqueMorseRepresentations2 = function(words) {
    var morse = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.."
    }

    const transformWord = (word) => Array.from(word).reduce((acc, char) => acc + morse[char], '')
    const addToSet = (set, word) => set.add(word)

    return words.map(transformWord).reduce(addToSet, new Set([])).size
};


/* 961. N-Repeated Element in Size 2N Array

    In a array A of size 2N, there are N+1 unique elements, and exactly one of these
    elements is repeated N times. Return the element repeated N times.
 */
var repeatedNTimes = function(A) {
    
    let N = A.length / 2;
    
    var counts = {}
    for (var num of A) {
        if (num in counts) {
            counts[num] += 1;
        }
        else {
            counts[num] = 1;
        }
        
        // Check if we have reached our N value:
        if (counts[num] === N) {
            return num;
        }
    }  
};


/** 929. Unique Email Addresses
 * @param {string[]} emails
 For local names (before '@'):
     - take out all '.'s
     - ignore all after '+'
 * @return {number} // How many emails after edits ^?
 */
var numUniqueEmails = function(emails) {
    
    let set = new Set();
    
    for (let email of emails) {
        
        let domain = '@' + email.split('@')[1];
        
        let plusOmitted = email.split('+')[0];
      
        let dotLocal = plusOmitted.split('.').join('');
        
        let final = dotLocal + domain;

        set.add(final);
        
    }
        
    
    return set.size;
};



/** 415. Add Strings
 * Given two non-negative integers num1 and num2 represented as string, 
 return the sum of num1 and num2.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    console.log(num1 + " " + num2);
    
    var ints = "0123456789";
    var n1 = 0;
    var n2 = 0;

    var factor = 1;
    while (num1.length != 0) {
        console.log("num1 " + num1);
        console.log("factor " + factor);

        var x = num1[num1.length - 1] * factor;
        console.log('x ' + x);

        // Add it
        n1 = n1 + x;
        console.log('n1 ' + n1);

        // Increment 
        factor = factor * 10;
        num1 = num1.slice(0, num1.length - 1);

        console.log()

    }
    
    console.log('n1 ' + n1);


    var factor = 1;
    while (num2.length != 0) {
        console.log("num2 " + num2);
        console.log("factor " + factor);

        var x = num2[num2.length - 1] * factor;
        console.log('x ' + x);

        // Add it
        n2 = n2 + x;
        console.log('n2 ' + n2);

        // Increment 
        factor = factor * 10;
        num2 = num2.slice(0, num1.length - 1);

        console.log()

    }
    
    console.log('n2 ' + n2);
    
    var out = (n1 + n2).toString();

    console.log('out ' + out);
    
    return out;
    
};

addStrings('4568', '89');



/* https://leetcode.com/problems/number-of-recent-calls/
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

Example 1:

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]
 

Note:

Each test case will have at most 10000 calls to ping.
Each test case will call ping with strictly increasing values of t.
Each call to ping will have 1 <= t <= 10^9.
*/

var RecentCounter = function() {
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */