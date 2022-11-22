
var threeSum = function(nums) {
    
    let masterArr = [];

    for(let l = 0; l <= nums.length -1; l++){
        if(nums[l] !== 0){
            break;
        } else if(nums[l] === 0 && l === nums.length -1){
            masterArr.push([0,0,0])
            return masterArr;
        }
    }

    for(let i = 0; i <= nums.length - 3; i++){

        for(let j = i + 1; j <= nums.length - 2; j++){

            for(let k = j + 1; k <= nums.length - 1; k++){

                let sum = nums[i] + nums[j] + nums[k];

                if(sum === 0){
                    let now = [nums[i], nums[j], nums[k]];
                    masterArr.push(now);
                    now = [];
                }
        
            }
        
        }

    }

    for(let now = 0; now <= masterArr.length -1; now++){

        mapHere(masterArr[now])

    }

    function mapHere(arr){

        arr.sort( function(a,b) { return a - b; } )

    };

    for(let now = 0; now <= masterArr.length -2; now++){

        for(let now1 = now + 1; now1 <= masterArr.length -1; now1++){

            if(JSON.stringify(masterArr[now]) === JSON.stringify(masterArr[now1])){

                masterArr.splice(now1, 1)
                now1 = now1 - 1;

            }

        };

    };

    return masterArr;

};

let inputs = [0,-6,0,-14,2,0,-9,5,-9,-8,-7,12,-4,14,-6,6,0,5,-2,6,-7,1,10,-10,-5,3,-2,-3,-13,-6,1,-6,3,9,-5,12,-6,-7,2,0,1,11,-11,4,2,-2,-5,-13,11,0,9,11,-13,-4,-13,-11,14,-8,1,8,1,9,-13,-11,3,-11,9,12,-2,-4,-11,6,14,-7,-5,1,-1,-3,-4,-5,12,12,13,6,-7,-15,10,14,14,-12,8,0,13,2,-3,1,-1,-9,-9,12,-6,-5,-5,-6,4,5,2,10,-13,13,12,6];

console.log(threeSum(inputs));