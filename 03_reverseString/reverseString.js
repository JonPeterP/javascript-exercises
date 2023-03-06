const reverseString = function (str) {
    const letters = [];

    for (var i = 0; i < str.length; i++) {
        var count = i;
        if (i == 0) {
            letters[i] = str.slice(-1 * (count + 1));
        } else {
            letters[i] = str.slice(-1 * (count + 1), -1 * (count));
        }
    }

    return (letters.join(""));
};

// Do not edit below this line
module.exports = reverseString;
