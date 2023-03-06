const repeatString = function(str, num) {
    if(num < 0){
        return ("ERROR");
    }else if(num == 0){
        return ("");
    }
    var word = str
    for (var i = 0; i < num-1; i++){
        str += `${word}`;
    }

    return (str);

};

// Do not edit below this line
module.exports = repeatString;
