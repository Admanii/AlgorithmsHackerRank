let n = 6;
for(let i = 0; i<n; i++){
    // console.log(i)
    for(let j = n-1-i; j>0; j--){
        
        process.stdout.write(" ")

    }

    for(let j = 0; j<=i; j++){
        
        process.stdout.write("#")

    }
    console.log()
}