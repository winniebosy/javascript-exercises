const fibonacci = function(count) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
        let nextSequence = b
        b = a + b;
        a = nextSequence
    }
    return b

};

// Do not edit below this line
module.exports = fibonacci;