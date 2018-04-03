// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   const words = str.split(" ");
   console.log(words);
}

module.exports = capitalize;

// function capitalize(str) {
//    const words = str.split(" ");
//   for (let word of words) {
//     console.log(word);
//     for (let letter of word) {
//      console.log(word);
//     }
//   }
// }

// capitalize("jerry is a little man");
