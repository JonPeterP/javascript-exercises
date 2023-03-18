const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let curr = 0;
    if(parseInt(num) < 0){
        return "OOPS";
    }else if(parseInt(num) == 1){
        return 1;
    }
    for(let i = 1; i < parseInt(num); i++){
        curr = n1 + n2;
        n1 = n2;
        n2 = curr;
        
       
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
