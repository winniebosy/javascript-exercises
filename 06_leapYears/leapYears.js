const leapYears = function(year) {
    if (year % 4 === 0 && year % 400 === 0 || year % 100 !== 0) {
        console.log(year)
        return true
    } else {
        return false;
    }
};
leapYears(1985)

// Do not edit below this line
module.exports = leapYears;