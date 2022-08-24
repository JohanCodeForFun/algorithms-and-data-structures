const leapYears = function(leapYear) {

    return (year % 4 === 0 &&  year % 100 !== 0 || year % 400 === 0);


    // if (leapYear % 4 === 0 && leapYear % 100 !== 0) {
    //     return true;
    // }
    // else if (leapYear % 400 === 0) {
    //     return false;
    // }


    // pseudocode
    // if (leapYear / 4) (!&& leapYer / 100 !|| leapYear / 400)
    // return true
};

// Do not edit below this line
module.exports = leapYears;
