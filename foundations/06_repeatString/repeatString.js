const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeat = "";
    for (let i = 0; i < num; i++) {
        repeat = repeat + string;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
