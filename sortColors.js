
var sortColors = function(nums) {

    for(let i = 0; i <= nums.length - 1; i++){
        for(let j = i + 1; j <= nums.length - 1; j++){
        
            if(nums[j] < nums[i]){
                let now = nums[j];
                nums[j] = nums[i];
                nums[i] = now;
            }

        }
    }

    console.log(nums);
    
};

let nums = [2,0,2,1,1,0];

console.log(sortColors(nums));