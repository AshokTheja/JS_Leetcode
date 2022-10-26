

  var removeDuplicates = function(nums) {
    
    var k = 0;

    for(let i = 0; i <= nums.length - 1; i++){
       
       child: for(let j = i + 1; j <= nums.length - 1; j++){

            if(nums[i] === nums[j]){
                continue;
            } else if(nums[j] > nums[i]){
                let now = nums[j];
                nums[j] = nums[i+1];
                nums[i+1] = now;
                break child;
            }

       }
       
    };

    for(let l = 0; l <= nums.length - 1; l++){
        if(nums[l + 1] > nums[l]){
            k += 1 ;
        } else {
            k += 1;
            return k;
        }
    }

};

var arr = [1,1,2];

console.log(removeDuplicates(arr));
