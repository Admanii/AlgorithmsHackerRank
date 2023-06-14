let grades = [73, 67, 38, 33];

for (let i = 0; i < grades.length; i++) {
    
    if(grades[i] < 37 || (grades[i] % 5 < 3)){
        // no change
        // console.log(grades[i])
    
    } else {
        grades[i] += (5 - grades[i] % 5) 
        // console.log("Round off "+ grades[i] +" "+ grades[i] % 5)
    }
}
// return grades;
console.log(grades)