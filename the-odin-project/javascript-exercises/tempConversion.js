const ftoc = function(fahrenheit) {
  let fahrenheitConversion = (((fahrenheit - 32) * 5) / 9);
  let fahrenheitConversionRounded = Math.round(fahrenheitConversion * 10) / 10;
  console.log(fahrenheitConversionRounded);
  return fahrenheitConversionRounded;
};

const ctof = function(celcius) {
  let celciusConversion = (((celcius * 9) / 5) + 32);
  let celciusConversionRounded = Math.round(celciusConversion * 10) / 10;
  console.log(celciusConversionRounded);
  return celciusConversionRounded;
};
 
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
