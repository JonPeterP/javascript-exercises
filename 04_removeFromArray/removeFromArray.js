const removeFromArray = function (arr, ...theArgs) {

    for (const arg of theArgs) {
        const index = arr.indexOf(arg);
        if(index != -1){
            arr.splice(index, 1);
        }
        
      
    }
  
    console.log(arr.join(''));
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
