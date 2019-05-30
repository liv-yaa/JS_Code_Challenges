// leetcode.js

// Copying from copy

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
















