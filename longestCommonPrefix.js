
var longestCommonPrefix = function(strs) {
    
   var str;

   for(let i = 0; i <= strs.length - 1; i++){

      if(i === 0){
         str = strs[i];
         continue;
      } else if(str == str[i]){
         str = str;
         continue;
      } else {
         child: for(let j = 0; j <= str.length - 1; j++){
               if(str[j] == strs[i][j]){
                  continue;
               } else {
                  str = str.substring(0, j);
                  break child;
               }
         }
      }

   };

   return str;

};

let strings = ["dog","racecar","car"];

console.log(longestCommonPrefix(strings))