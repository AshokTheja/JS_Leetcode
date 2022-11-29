

var isValidSudoku = function(board) {

    let flag = true;

    // if(decideByRow(board)){
    //     decideByColumn(board)
    // }

    console.log(decideBySubBoxes(board));


    function decideByRow(board){

        parent: for(let i = 0; i <= board.length - 1; i ++){

            let here = [];
    
            for(let j = 0; j <= board[i].length - 1; j ++){
    
                    if(board[i][j] === '.'){
                        continue;
                    } else if(!here.includes(board[i][j])){
                        here.push(board[i][j]);
                    }    else {
                        flag = false
                        break parent;
                    };
    
            };
    
        };

        return flag;

    };

    function decideByColumn(board){

        parent: for(let i = 0; i <= board.length - 1; i ++){

            let here = [];

                    for(let j = 0; j <= board.length - 1; j ++){

                        if(board[j][i] === '.'){
                            continue;
                        }  else if(!here.includes(board[j][i])){
                            here.push(board[j][i]);
                        } else {
                            flag = false
                            break parent;
                        };

                    }

           
        };

        return flag;

    };

    function decideBySubBoxes(board){

        let arr = [];

        for(let i = 0; i <= board.length - 1;){
            
            console.log("Inisde one")
            let arr1 = [];

            let now = 0;
            let now1 = 3;

                for(let j = 0; j <= 2; j++){

                        console.log("Inisde sec")

                        let one = board[i].slice(now, now1);
                        let two = board[i+1].slice(now, now1);
                        let three = board[i+2].slice(now, now1);

                        arr1.push(one);
                        arr1.push(two);
                        arr1.push(three);

                        arr.push(arr1);
                        arr1 = [];

                        now = now1;
                        now1 = now1 + 3;

                }

                i += 3;

        }
            
        return arr;

    };



    return flag;
    
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board))