// Map the Debris

// Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const newArr = [];

  arr.forEach((element) => {
    let numberToSquare = Math.pow(earthRadius + element.avgAlt, 3) / GM;
    let squaredResult = Math.sqrt(numberToSquare);
    let orbitalPeriodResult = Math.round(2 * Math.PI * squaredResult);

    newArr.push({ name: element.name, orbitalPeriod: orbitalPeriodResult });
  });
  return newArr;
}

// const case1 = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
const case2 = orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
console.log(case2);
