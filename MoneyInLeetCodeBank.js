

var totalMoney = function(n) {
    
    let now = 1;
    let use = 1;
    let sum = 0;
    let run = 0;

    for(let i=0; i<=7; i++){

        if(run == n){
            break;
        } else if(i == 7){
            i = 0;
            run = run + 1;
            now = now + 1;
            sum = sum + now;
            console.log("Inside else if")
            continue;
        }
        else {
            run = run + 1;
            sum = sum  + (i+now);
            console.log("Inside else")
        }

    }

    return sum;
    
};

console.log("Final money in bank: " + totalMoney(4));

