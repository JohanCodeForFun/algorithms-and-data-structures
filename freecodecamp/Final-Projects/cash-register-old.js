// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

const moneyLookup = [
  ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
  ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
  ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
  let change = Math.round(cash * 100) - Math.round(price * 100);
  let cashFromCustomer = {};
  let cashToReturn = {};

  cid.forEach(elem => {
    cashFromCustomer[elem[0]] = Math.round(elem[1] * 100)
  })

  let index = moneyLookup.length - 1;

  while (index >= 0 && change > 0) {
    let moneyBill = moneyLookup[index][0];
    let moneyValue = moneyLookup[index][1];

    if (change - moneyValue > 0 && cashFromCustomer[moneyBill], change) {

      cashToReturn[moneyBill] = 0;
      while (cashFromCustomer[moneyBill] > 0 && change - moneyValue >= 0) {
        cashFromCustomer[moneyBill] -= moneyValue;
        cashToReturn[moneyBill] += moneyValue;
        change -= moneyValue;
      }
    }
    index--;
  }

  if (change === 0) {
    let isRegisterEmpty = true

    Object.keys(cashFromCustomer).forEach(moneyBill => {
      if (cashFromCustomer[moneyBill] > 0) {
        isRegisterEmpty = false
      }
    });

    if (isRegisterEmpty) {
      return { status: "CLOSED", change: cid }
    } else {
      let changeArray = [];
      Object.keys(cashToReturn).map(moneyBill => {
        if (cashToReturn[moneyBill] > 0) {
          changeArray.push([moneyBill, cashToReturn[moneyBill] / 100])
        };
      });

      return { status: "OPEN", change: changeArray }
    }
  }
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

const case1 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(case1)



const DENOMINATIONS = [
  ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
  ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
  ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round(cash * 100) - Math.round(price * 100);
  let cashOnHand = {};
  let cashToGive = {};

  cid.forEach(denomination => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100)
  })

  let index = DENOMINATIONS.length - 1;

  while (index >= 0 && amountToReturn > 0) {
    let moneyName = DENOMINATIONS[index][0];
    let moneyValue = DENOMINATIONS[index][1];

    if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn) {

      cashToGive[moneyName] = 0;
      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        amountToReturn -= moneyValue;
      }
    }

    index--;
  }

  if (amountToReturn === 0) {
    let isRegisterEmpty = true

    Object.keys(cashOnHand).forEach(moneyType => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterEmpty = false
      }
    });

    if (isRegisterEmpty) {
      return { status: "CLOSED", change: cid }
    } else {
      let changeArray = [];
      Object.keys(cashToGive).map(moneyType => {
        if (cashToGive[moneyType] > 0) {
          changeArray.push([moneyType, cashToGive[moneyType] / 100])
        };
      });

      return { status: "OPEN", change: changeArray }
    }
  }
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

const case1 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(case1)



const DENOMINATIONS = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
];

function checkCashRegister(price, cash, cid) {
  let amountToReturn = cash * 100 - price * 100;
  let cashOnHand = {};
  let cashToGive = {};

  cid.forEach((denomination) => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
  });

  let index = DENOMINATIONS.length - 1;

  while (index >= 0) {
    let moneyName = DENOMINATIONS[index][0];
    let moneyValue = DENOMINATIONS[index][1];

    if (amountToReturn - moneyValue > 0 && cashOnHand[moneyType] > 0) {
      cashToGive[moneyName] = 0;
      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        amountToReturn -= [moneyValue];
      }
    }

    index--;
  }

  if (amountToReturn === 0) {
    let isRegisterEmpty = true;

    Object.keys(cashOnHand).forEach((moneyType) => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterEmpty = false;
      }
    });

    if (isRegisterEmpty) {
      return { status: "CLOSED", change: cid };
    }
  } else {
    let changeArray = [];
    Object.keys(cashToGive).map((moneyType) => {
      if (cashToGive[moneyType] > 0) {
        changeArray.push([moneyType, cashToGive[moneyType] / 100]);
      }
    });

    return { status: "OPEN", change: changeArray };
  }
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

let case1 = checkCashRegister(3.26, 100, cid);
console.log(case1);

// function checkCashRegister(price, cash, cid) {
//   let cashInRegister = cid.reverse();
//   let changeToReturn = Math.round(cash * 100) - Math.round(price * 100);
//   const changeToReturnArr = [];
//   const currencyLookupTable = [
//     ["PENNY", 1],
//     ["NICKEL", 5],
//     ["DIME", 10],
//     ["QUARTER", 25],
//     ["ONE", 100],
//     ["FIVE", 500],
//     ["TEN", 1000],
//     ["TWENTY", 2000],
//     ["ONE HUNDRED", 10000],
//   ];
//   currencyLookupTable.reverse();
//   currencyLookupTable.forEach((elem) => {
//     if (changeToReturn > elem[1]) {
//       changeToReturnArr.push(elem[1]);
//       changeToReturn -= elem[1];
//       console.log(changeToReturnArr);
//     }
//   });

//   cashInRegister.forEach((elem) => {
//     const currencyText = elem[0];
//     let currencyValue = elem[1];
//     elem[1] *= 100;
//   });
//   // console.log(cashInRegister)

//   return changeToReturn;

//   return { status: "INSUFFICIENT_FUNDS", change: [] };
// }

// const case1 = checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// console.log(case1);

// previous code...

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
