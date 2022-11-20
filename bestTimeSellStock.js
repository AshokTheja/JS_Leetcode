

var maxProfit = function(prices) {

   let max = 0;

   for(let i = 0; i <= prices.length -2; i++){

        for(let j = i+1; j <= prices.length -1; j++){

            if(prices[i] < prices[j] && (prices[j] - prices[i]) > max){
                max = (prices[j] - prices[i]);
            } 
            
        }
   }

   return max;
    
};


let prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));