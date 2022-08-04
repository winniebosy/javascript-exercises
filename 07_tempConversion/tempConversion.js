const ftoc = function(F) {
    let convertC = (F - 32) / 1.8
    return Number(convertC.toFixed(1));

};
ftoc(20);

const ctof = function(C) {
    let convertF = (C * 1.8) + 32
    return Number(convertF.toFixed(1))

};

ctof(30)

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};