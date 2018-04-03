// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My Solution
function chunk(array, size) {
   let result = [],
      index = 0,
      slice = 0;

   while (index < array.length) {
      slice = index + size;

      result.push(array.slice(index, slice));
      index += size;
   }

   return result;
}

module.exports = chunk;

// Solution #1
// function chunk(array, size) {
//    const chunked = [];

//    for (let element of array) {
//       const last = chunked[chunked.length - 1];

//       if (!last || last.length === size) {
//          chunked.push([element]);
//       } else {
//          last.push(element);
//       }
//    }

//    return chunked;
// }
