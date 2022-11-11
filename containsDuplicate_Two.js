

var containsDuplicate = function(nums, k) {

    if(nums.length < k){
        return false;
    } else {
        for(let i = 0; i <= nums.length-2; i++){

                for(let j = i+1; j <= nums.length -1; j++){

                    if((nums[i] === nums[j]) && ((j - i) <= k)){
                        return true;
                    }

                }

        }

        return false;
    }
    
};

let nums = [99,99];

console.log(containsDuplicate(nums, 2))