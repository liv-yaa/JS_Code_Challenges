/* 
Challenges from coderbyte...
https://coderbyte.com/challenges */



/* */



/* 1. LongestWord
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. 

Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"
*/

function LongestWord(sen) {

    // Take out all non characters
    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Zsd]/g, '');

    // Split
    var arr = sen.split(' ');

    // Sort by going through pairwise, determining if each
    // pair is longer, and switching them if so.
    arr.sort(function(a, b) {return b.length - a.length});

    // Remov3 the first item from an array and return it
    return arr.shift();

}




console.log(LongestWord('hello'));
console.log(LongestWord('fun$%^ time'));
console.log(LongestWord('I love dogs'));
