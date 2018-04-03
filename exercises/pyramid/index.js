// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// -------

// SOLUTION #2 W/ RECURSION
function pyramid(n, row = 0, level = "") {
   const midpoint = Math.floor((2 * n - 1) / 2);
   if (n === row) {
      return;
   }

   if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid(n, row + 1);
   }

   let add =
      midpoint - row <= level.length && midpoint + row >= level.length
         ? "#"
         : " ";

   pyramid(n, row, level + add);
}

module.exports = pyramid;

// SOLUTION #1
// function pyramid(n) {
//    const midpoint = Math.floor((2 * n - 1) / 2);
//    for (let row = 0; row < n; row++) {
//       let level = "";

//       for (let col = 0; col < 2 * n - 1; col++) {
//          if (midpoint - row <= col && midpoint + row >= col) {
//             level += "#";
//          } else {
//             level += " ";
//          }
//       }

//       console.log(level);
//    }
// }

// // SNIPPET FROM Q&A (Justin - Lecture 42)
// function pyramid(n) {
//    const createSpace = num =>
//       Array(num)
//          .fill(" ")
//          .join("");
//    const createPound = num =>
//       Array(num)
//          .fill("#")
//          .join("");
//    for (let i = 1; i <= n; i++) {
//       console.log(
//          createSpace(n - i) + createPound(i * 2 - 1) + createSpace(n - i)
//       );
//    }
// }

// // SNIPET FROM Q&A (Samuel - Lecture 42)
// const pyramid = n => {
//    for (let i = 1; i < n + 1; i++) {
//       console.log(
//          " ".repeat(n - i) + "#".repeat(2 * i - 1) + " ".repeat(n - i)
//       );
//    }
// };
