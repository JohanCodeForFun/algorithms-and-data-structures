// Fix the code so the variable result is set to the value returned from calling the function getNine.

//before
// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
  
//   let result = getNine;
//   console.log(result);


// after
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);