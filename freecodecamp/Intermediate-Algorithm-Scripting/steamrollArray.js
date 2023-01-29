// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// // using for each
// function steamrollArray(arr) {
//   const oneArray = [];
//   flatten(arr);

//   function flatten(arr) {
//     arr.forEach((element) => {
//       if (!Array.isArray(element)) {
//         oneArray.push(element);
//       } else {
//         flatten(element);
//       }
//     });
//   }

//   return oneArray;
// }

// // using for of recursive function
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// }

console.log(steamrollArray([1, [2], [3, [[4]]]]));
