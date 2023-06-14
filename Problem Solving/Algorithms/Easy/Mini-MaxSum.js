let arr = [1, 20, 3, 4, 5];
let min = 0, max = 0, total = 0;
for(let i = 0; i < arr.length; i++){
    total += arr[i]
}
max = total - Math.min(...arr) //need to use "..." for array
min = total - Math.max(...arr)
console.log(min,max)


//Can alternatively be done by sorting the array
// arr.sort(function(a, b) {
//     return a - b;
//   });

//Find Sum of the array without the smallest left most value

//Find Sum of the array without the biggest right most value