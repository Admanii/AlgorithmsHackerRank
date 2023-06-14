let arr = [-4, 3, -9, 0, 4, 1];
let pos  =0; 
let neg =0 ;
let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log("arr[i] = "+arr[i])
        // console.log("i = " + i)
        if (arr[i] < 0) {
            // console.log("Negative true", neg);
            neg += 1;
        } else if (arr[i] > 0) {
            pos += 1;
            // console.log("Positive true",pos);
        } else {
            zero += 1;
            // console.log("Zero true",zero);
        };
    };
    console.log((pos/arr.length).toFixed(5));
    console.log((neg/arr.length).toFixed(5));
    console.log((zero/arr.length).toFixed(5));