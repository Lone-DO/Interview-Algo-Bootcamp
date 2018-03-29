// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ---------

//MY SOLUTION #1
function reverseInt(n) {
   //convert to string
   let str = n.toString(),
      rev,
      result;

   //reverse string
   for (let num of str) {
      rev = num + rev;
   }

   //use math.sign to decide if negative number
   if (Math.sign(n) === -1) {
      rev = "-" + rev;
   }

   //combine and convert to number
   return parseInt((result = rev));
}

// Solution #2
// function reverseInt(n) {
//    const reversed = n.toString()
//       .split('')
//       .reverse()
//       .join('');
//    return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
