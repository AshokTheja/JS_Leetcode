
var halvesAreAlike = function(s) {

   s = s.toUpperCase();

   now = s.length / 2;

   let flag = false;
   let countfirstHalf = 0, countSecondHalf = 0;
   
   let req = ['A', 'E', 'I', 'O', 'U'];

   for(let i = 0; i <= s.length - 1; i++){
       
        if(i < now){
            if(req.includes(s[i]))
                countfirstHalf += 1;
            
        } else {
            if(req.includes(s[i]))
                countSecondHalf += 1;
            
        }

   }

   if(countfirstHalf === countSecondHalf) return true;

    return flag;
    
};

let s = 'textbook';

console.log(halvesAreAlike(s));