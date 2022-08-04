const palindromes = function(str) {
    //remove unwanted characters
    var re = /[\W_]/g;
    let splitA = str.toLowerCase().replace(re, '');
    //reverse and compare
    let reverses = splitA.split('').reverse().join('');
    if (splitA === reverses) {
        console.log('Is a palindorme')
    } else {
        console.log('not a palindrom');
    }
    return splitA === reverses


};

// Do not edit below this line
module.exports = palindromes;