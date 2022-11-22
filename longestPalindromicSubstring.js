
var longestPalindrome = function(s) {

    var str = '';
    var strRev = '';
    var palindrome = '';

    if(s.length <= 1){
        return s;
    } else if(s.length <= 2 && s[0] != s[1]) {
        return s[0];
    }

    let flag = isPalindrome(s);

    if(flag) {
        return s
    } else {

            for(let i = 0; i <= s.length -2; i++){

                for(let j = i+1; j <= s.length -1; j++){

                    if((s[i] == s[j])){
                        str = s.substring(i, (j+1));
                        strRev = reverseString(str)
                        if((str === strRev) && (palindrome.length < str.length)){
                            palindrome = str;
                        }
                    } else {
                        continue;
                    }

                }

            };

    }

    function reverseString(strHere){

        var newString = '';

        for(var k = strHere.length -1; k >= 0; k--){
            newString += strHere[k]
        };

        return newString;
    };

    function isPalindrome(x){
    
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

    if(palindrome.length === 0 && s.length > 0){
        palindrome = s[0]
    }

    return palindrome;
    
};

let input = 'babad';

console.log(longestPalindrome(input))
