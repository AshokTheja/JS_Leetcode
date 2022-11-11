

var containsDuplicate = function(nums) {

   for(let i = 0; i <= nums.length-2; i++){

        console.log("i now" + nums[i])

        for(let j = i+1; j <= nums.length -1; j++){

            console.log("J now" + nums[j])

            if(nums[i] === nums[j]){
                return false
            }

        }

   }

   return true;
    
};

let nums = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(nums))