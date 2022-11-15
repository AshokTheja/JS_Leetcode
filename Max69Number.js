

var maximum69Number  = function(num) {
    
    let numToString = String(num);
    
    for(let i = 0; i<= numToString.length-1; i++){

        if(numToString[i] === '9'){

            if(num < Number(numToString.substring(0, i) + '6' + numToString.substring(i+1))) {
                num = Number(numToString.substring(0, i) + '6' + numToString.substring(i+1))
            };
                
            continue;

        } else {

            if(num < Number(numToString.substring(0, i) + '9' + numToString.substring(i+1))) {
                num = Number(numToString.substring(0, i) + '9' + numToString.substring(i+1))
            };
            continue;

        }

    };

    return num;

};
    
console.log(maximum69Number(9669))