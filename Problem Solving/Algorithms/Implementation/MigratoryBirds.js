function migratoryBirds(arr) {
    // Write your code here
    let mostSighted = 0;
    let indexMostSighted = 0;
    
    let countArr = [0,0,0,0,0];
    // let one = 0, two = 0, three = 0, four = 0, five = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 1:
                countArr[0] += 1;
                break;
            case 2:
                countArr[1] += 1;
                break;
            case 3:
                countArr[2] += 1;
                break;
            case 4:
                countArr[3] += 1;
                break;
            case 5:
                countArr[4] += 1;
                break;
        }
    }
    
    for (let i = countArr.length - 1; i >= 0 ; i--) {
        if (countArr[i] >= mostSighted){
            mostSighted = countArr[i]
            indexMostSighted = countArr.indexOf(mostSighted) + 1;
        }
    }
    
    console.log(mostSighted)
    return indexMostSighted
    
// console.log(one, two, three, four, five)
// console.log(countArr)
}

const result = migratoryBirds(arr);