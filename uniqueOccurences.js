

var uniqueOccurrences = function(arr) {

    let flag = true;

    let mapNow =  getOccurenecesMap(arr);
    let arrNow = createArrayFromMapValues(mapNow);
    flag = toDecide(arrNow);

    function getOccurenecesMap(arr){

            let mapHere = new Map();

            for(let i = 0; i<= arr.length -1; i++){

                if(mapHere.has(arr[i])){
                    mapHere.set(arr[i], mapHere.get(arr[i]) + 1);
                } else {
                    mapHere.set(arr[i], 1);
                }

            }

            return mapHere;

    };

    function createArrayFromMapValues(mapNow){

        let arrHere = [];

        for(let now of mapNow.values()){
            arrHere.push(now);
        }

        return arrHere;

    };  

    function toDecide(arrNow){

        for(let i = 0; i <= arrNow.length - 1; i++){

            if(arrNow.lastIndexOf(arrNow[i]) != i){
                flag = false;
                break;
            }

        };

        return flag;
        
    }

    return flag;

};

let arr = [1,2];

console.log(uniqueOccurrences(arr))