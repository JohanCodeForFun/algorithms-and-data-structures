// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// Uppgift
// DONE! Ta fram skillnaden på pris - cash mottaget
// - Summan som är kvar, ge tillbaks växel eller berätta att det inte finns pengar nog
// - hitta växel på summan som blir kvar (tempChange)
// - returnera ett objekt värde
// - returnera flera växel summor

function checkCashRegister(price, cash, cid) {
  let change = [];
  let tempChange = cash - price;

  // find nearest value of change
  // tempChange currently 0.5
  // neareat number is quarter, 0.5 (2x 0.25)
  let changeValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  console.log(changeValues);

  function getIndexToIns(cid, tempChange) {
    if (tempChange === 1) {
      return 0;
    }
    const findInsertionIndex = (element) => element >= tempChange;
    const compareNumbers = (a, b) => a - b;
    changeValues.sort(compareNumbers);

    if (changeValues.findIndex(findInsertionIndex) === -1) {
      return changeValues.length;
    }

    return changeValues.findIndex(findInsertionIndex);
  }

  const result = getIndexToIns(cid, tempChange);
  console.log(result);

  // cid.find((element) => element === 0.5);
  // console.log(cid.forEach((element) => element.forEach((element) => element)));
  for (let i = 0; i < cid.length; i++) {
    for (let j = 0; i < cid[i][j].length; j++) {
      // get each cid in array
      console.log(cid[i]);
      // get cid change amount
      // console.log(cid[i][j + 1]);
    }
  }

  return { status: undefined, change: tempChange };
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(result);
console.log('should return, {status: "OPEN", change: [["QUARTER", 0.5]]}.');

// value of,
// penny, 1c
// nickel, 5c
// dime, 10c
// quarter, 25c
// dollar, 1
