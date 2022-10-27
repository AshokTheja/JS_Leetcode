

var searchInsert = function(nums, target) {

    for(let i = 0; i <= nums.length -1; i++){
        if((nums[i] === target) | (nums[i] > target)){
            return i;
        // } else if(nums[i] > target){
        //     return i;
        } else if(i === nums.length -1){
            return i+1;
        }
    }
    
    
};


let numsHere = [1,3,5,6];
let targetHere = 5;

console.log(searchInsert(numsHere, targetHere));
