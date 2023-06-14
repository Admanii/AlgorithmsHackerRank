let candles = [3,2,3,1,3];
let maxCount = 0;
let maxHeight = Math.max(...candles);
// console.log(maxHeight);

for(let i = 0; i < candles.length; i++){
    if (candles[i] === maxHeight){
        maxCount++;
    }
}

console.log(maxCount);

//FOR HACKERRANK SUBMISSION USE:
// return maxCount;
