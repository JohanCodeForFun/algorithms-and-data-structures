// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

const moneyLookUp = [
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
  const cidOrig = cid.map((x) => x);
  let index = 0;
  let cidSum = 0;

  let change = Math.round(cash * 100) - Math.round(price * 100);
  let changeArray = [];

  for (let value of cid) {
    value[1] = Math.round(value[1] * 100);
    cidSum += value[1];
  }

  if (cidSum < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    if (change > moneyLookUp[i][1]) {
      if (cid[i][1] !== 0) {
        changeArray.push([moneyLookUp[i][0], 0]);

        while (cid[i][1] !== 0 && change >= moneyLookUp[i][1]) {
          change -= moneyLookUp[i][1];
          cid[i][1] -= moneyLookUp[i][1];
          changeArray[index][1] += moneyLookUp[i][1];

          if (cid[i][1] === 0 || change < moneyLookUp[i][1]) {
            index++;
          }
        }
      }

      if (!changeArray.length && change < cidSum) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
      if (!changeArray.length) {
        for (let value in cidOrig) {
          cidOrig[value][1] /= 100;
        }

        return { status: "CLOSED", change: cidOrig };
      }
    }
  }

  for (let value in changeArray) {
    changeArray[value][1] /= 100;
  }

  return { status: "OPEN", change: changeArray };
}

const test6 = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.log(test6);
console.log(
  'should return: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}'
);
