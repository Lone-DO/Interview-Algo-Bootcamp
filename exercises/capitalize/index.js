// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// MY SOLUTION
function capitalize(str) {
   const words = str.split(" ");
   let word = "",
      result = "";

   for (let i = 0; i < words.length; i++) {
      word = words[i];

      if (allLetter(word[0])) {
         //validation if alphabet
         if (result) {
            result += " " + word[0].toUpperCase() + word.slice(1);
         } else {
            result = word[0].toUpperCase() + word.slice(1);
         }
      } else {
         if (result) {
            result += " " + word[1].toUpperCase() + word.slice(2);
         } else {
            result = word[0] + word[1].toUpperCase() + word.slice(2);
         }
      }
   }
   return result;
}

//SNIPPET LETTER VALIDATION
function allLetter(txt) {
   var letters = /^[A-Za-z]+$/;
   if (txt.match(letters)) {
      return true;
   } else {
      return false;
   }
}

module.exports = capitalize;

// //SOLUTION #1
// function capitalize(str) {
//    const words = [];

//    for (let word of str.split(' ')) {
//       words.push(word[0].toUpperCase() + word.slice(1));
//    }

//    return words.join(' ');
// }

// // //SOLUTION #2
// function capitalize(str) {
//    let result = str[0].toUpperCase();

//    for (let i =1; i < str.length; i++) {
//       if (str[i -1] === ' ') {
//          result += str[i].toUpperCae();
//       } else {
//          result += str[i];
//       }
//    }

//    return result;
// }
