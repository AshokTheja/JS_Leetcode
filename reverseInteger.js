
var reverse = function(x) {

    let here;

    reverseInt(x);

    if(here < -2147483648 || here > 2147483647){
        return 0;
    } else {
        return here;
    }

    function reverseInt(x){

        if(x >= 0){

            here = Number(String(x).split('').reverse().join(''));
        
        } else {

            let now = String(x).split('');
            here = String(now.splice(1, now.length-1).reverse().join(''));
            here = Number(now + here);
          
        }
    }
    
};

let x = 1534236469;

console.log(reverse(x))