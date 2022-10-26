

var isPalindrome = function(x){

    
    let number = String(x);
    let count = Math.round(number.length / 2)
    let j = number.length;
    let flag = true;

     for(let i = 0; i <= count-1; i++){

            if(number[i] === number[j - (i+1)]){
                continue;
            } else {
                flag = false;
            }

     }

     return flag;

};

console.log(isPalindrome(12311))