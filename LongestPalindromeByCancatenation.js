


var longestPalindrome = function(words) {


   for(let i = 0; i <= words.length -1; i++){

        for(let j = i + 1; j <= words.length -1; j++){

            if((words[i] === words[j]) && (words[i][0] != words[i][1])){
                words[i] = '';
                words[j] = '';
            }

        }

   }

   let arrNow = words.filter(filterHere);

   return arrNow.length * 2;

   function filterHere(now){

        if(now != '') return now;

   }




    
};


let wordss =  ["cc","ll","xx"];

console.log(longestPalindrome(wordss));