// copy.js

// 905. Sort Array By Parity
var sortArrayByParity = function(A) {
    let even = A.filter(a => a % 2 === 0);
    let odd = A.filter(a => a % 2 === 1);
    return even.concat(odd);
};


// 832. Flipping an Image
var flipAndInvertImage = function (A) {
    A.forEach((row, i) => {
        A[i] = row.reverse();
        A[i].forEach((cell, j) => {
            A[i][j] = cell ^ 1;
        });
    });
    return A;
};

var flipAndInvertImage = module.exports = function(A) {
    let N = A.length;
    let returnArray = Array(N).fill(0).map(() => Array(N).fill("0"));    

    for (let i = 0; i < N; i++) 
        for (let j = 0; j < N; j++)         
            returnArray[i][j] = A[i][N - 1 - j] == 0 ? 1 : 0; 

    return returnArray;

};

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


var uniqueMorseRepresentations = function(words) {
    
    const transformWord = (word) => Array.from(word).reduce((acc, char) => acc + morse[char], '')
    const addToSet = (set, word) => set.add(word)
    
    return words.map(transformWord).reduce(addToSet, new Set([])).size    
    
};