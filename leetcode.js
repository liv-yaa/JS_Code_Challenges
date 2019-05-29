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