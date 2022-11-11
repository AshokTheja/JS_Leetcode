
var moveZeroes = function(nums) {
    

    for(let i = 0; i<= nums.length -1; i++){

                if(nums[i] === 0){
                    child : for(let j = i + 1; j<= nums.length -1; j++){
                                if(nums[i] != nums[j]){
                                    let now = nums[i];
                                    nums[i] = nums[j];
                                    nums[j] = now;
                                    break child;
                                }
                            }
                }
        
    };
  
    return nums;

};


let nums = [1,0,0,1];

console.log(moveZeroes(nums));

