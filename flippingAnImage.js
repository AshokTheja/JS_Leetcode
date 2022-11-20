

var flipAndInvertImage = function(image) {
    
    
    for(let here of image){
        here = here.reverse();
    }

    for(let now of image){
        now = help(now);
    }

    function help(here){

        for(let i = 0; i <= here.length -1; i++){
            if(here[i] === 0){
               here[i] = 1;
            } else {
                here[i] = 0;
            }
        }
        
    }

    return image;


};

let image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

console.log(flipAndInvertImage(image))