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
    // Split by all non-characters
    var regex = new RegExp('^a-zA-Z');

    var sen_list = sen.split(regex);


    // Keep track of longest length

    // Keep track of longest word so far

    // Iter through list , updating longest word if longer

    return sen_list;

}




console.log(LongestWord('hello'));
console.log(LongestWord('fun$%^ time'));
console.log(LongestWord('I love dogs'));
