function steamrollArray(arr) {
  const oneArray = [];
  flatten(arr);

  function flatten(arr) {
    arr.forEach((element) => {
      if (!Array.isArray(element)) {
        oneArray.push(element);
      } else {
        flatten(element);
      }
    });
  }

  return oneArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
