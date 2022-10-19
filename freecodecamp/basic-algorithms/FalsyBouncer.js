// Falsy Bouncer
//

let bouncer = arr => {
  let trueArr = [];

  arr.forEach(item => Boolean(item) ? trueArr.push(item) : false)
//   for (let i = 0; i < arr.length; i++) {
//     if (Boolean(arr[i])) {
//       trueArr.push(arr[i]);
//     }

    return trueArr;
  }

//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
//     }
//     for (const item in arr) {
//       console.log(item);
//     }
//   }

bouncer([7, "ate", "", false, 9]);
