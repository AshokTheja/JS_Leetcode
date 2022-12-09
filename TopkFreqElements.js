
var topKFrequent = function(nums, k) {

    let mapNow = new Map();
    let arrNow = [];

    for(let i = 0; i <= nums.length -1; i++){

        if(mapNow.has(nums[i])){
            mapNow.set(nums[i], mapNow.get(nums[i]) + 1)
        } else {
            mapNow.set(nums[i], 1);
        }

    };

    for(let a of mapNow.keys()){
        if(mapNow.get(a) >= k){
            arrNow.push(a);
        }
    }

    return arrNow;
    
};

let nums = [1,1,2,2,3,1], k = 1;

console.log(topKFrequent(nums, k));