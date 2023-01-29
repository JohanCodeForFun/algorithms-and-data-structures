// Fun project stuff
// wealth calculator
// input sum and calculate totalSum month for month.

let currentIndexMoney = 9200;
let currentFUmoney = 12700;

const wealthGenerator = (sum) => {
  let investedForXmonthsCount = 0;
  let totalSum = currentFUmoney + currentIndexMoney;
  let investingMonths = 6;

  let index20percent = sum * 0.2;
  let fu80percent = sum * 0.8;

  for (let i = 0; i < investingMonths; i++) {
    currentIndexMoney += index20percent;
    currentFUmoney += fu80percent;
    currentIndexMoney *= 1.012;
    investedForXmonthsCount++;
    totalSum = currentFUmoney + currentIndexMoney;
    console.log(
      `After ${investedForXmonthsCount} months of investing, 
      your wealth is: ${totalSum}.
      With FU money: ${currentFUmoney}, 
      and Invested money: ${currentIndexMoney}`
    );
  }

  return `Total sum: ${totalSum}, for ${investedForXmonthsCount} months of investing.`;
};

console.log(wealthGenerator(8000));
console.log(wealthGenerator(16000));
