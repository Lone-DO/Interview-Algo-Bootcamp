/**
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
**/

// SOLUTION #1 W/ HELPER
// function reverse(str) {
//    // return str
//    //    .split("")
//    //    .reverse()
//    //    .join("");

//    //OR
//    // let splitStr = str.split(""),
//    //    reverseArr = splitStr.reverse(),
//    //    result = reverseArr.join("");
//    // return result;
// }

// --------------

// SOLUTION #2 W/ FOR LOOP
// function reverse(str) {
//
//    let reversed = "";
//    for (let char of str) {
//       reversed = char + reversed;
//    }

//    return reversed;

// }

// --------------

// SOLUTION #3 W/ REDUCE
function reverse(str) {
   // Manual Solution
   return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
