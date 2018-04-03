// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
   for (let i = 1; i <= n; i++) {
      let fizz = i % 3,
         buzz = i % 5,
         result = "";

      if (fizz === 0) {
         result = "fizz";
      }
      if (buzz === 0) {
         result += "buzz";
      }

      if (result === "") {
         result = i;
      }

      console.log(result);
   }
}

module.exports = fizzBuzz;
