
var firstUniqChar = function(s) {

    for(let i = 0; i <= s.length -1; i++){
        if(i === s.lastIndexOf(s[i]) && i === s.indexOf(s[i])){
            return i;
        }
    };

    return -1;
    
};

let s = "loveleetcode";

console.log(firstUniqChar(s));