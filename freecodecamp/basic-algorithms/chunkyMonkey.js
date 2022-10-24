// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];

    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
    return newArr
}

// alt solution,
// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     while (arr.length > 0) {
//         newArr.push(arr.splice(0, size))
//     }
//     return newArr
// }

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// chunkArrayInGroups(["a", "b", "c", "d"], 2)
// should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
// should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
// should return [[0, 1], [2, 3], [4, 5]].
