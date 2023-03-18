const getTheTitles = function(arr) {
    let inc = 0;
    let arrTitle = [];
    for(obj of arr){
        arrTitle[inc] = obj.title;
        inc++;
    }
    return arrTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
