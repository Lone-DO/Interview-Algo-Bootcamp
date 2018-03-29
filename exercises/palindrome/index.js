// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// --------

//SOLUTION #1 W/ If Statment
//function palindrome(str) {
// let revStr = str
//       .split("")
//       .reverse()
//       .join("");

//    if (str == revStr) {
//       return true;
//    } else {
//       return false;
//    }
//}

// --------

//SOLUTION #2 W/ return boolean
//function palindrome(str) {
// let revStr = str
//       .split("")
//       .reverse()
//       .join("");

//    return str === revsersed;
//}

//SOLUTION #3 W/ If Statment
function palindrome(str) {
   return str.split("").every((char, i) => {
      return char === str[str.length - i - 1];
   });
}

module.exports = palindrome;
