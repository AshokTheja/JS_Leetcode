

var reverseWords = function(s) {


    let arrHere = s.trim().split(' ');
    
    let filteredArr = arrHere.filter(deleteSpaces);

    function deleteSpaces(str1){
        if(str1 != ' ') return str1;
    }

    return filteredArr.reverse().join(' ');
    
};


let str = "  hello world  ";

console.log(reverseWords(str));
