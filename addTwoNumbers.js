

var addTwoNumbers = function(l1, l2) {
   
    return  String((Number(String(l1).replaceAll(',','')) + Number(String(l2).replaceAll(',','')))).split('').reverse().map(item => Number(item));

};


let l1 = [2,4,3];
let l2 = [5,6,4];

console.log(addTwoNumbers(l1,l2));