
// /*
//  * Complete the 'dayOfProgrammer' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts INTEGER year as parameter.
//  */

// function dayOfProgrammer(year) {
//     let dayOfProg;

//     if (year == 1918) {
//         dayOfProg = 26
//         return dayOfProg + ".09." + year
//     }
//     if (year <= 2700 && year >= 1919) {
//         if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//             dayOfProg = 256 - 244
//             return dayOfProg + ".09." + year

//         }
//         else {
//             dayOfProg = 256 - 243
//             return dayOfProg + ".09." + year
//         }
//     }

//     if (year <= 1917 && year >= 1700) {
//         if (year % 4 == 0) {
//             dayOfProg = 256 - 244
//             return dayOfProg + ".09." + year

//         }
//         else {
//             dayOfProg = 256 - 243
//             return dayOfProg + ".09." + year
//         }
//     }


// }


// function main() {
//     let year = 2018
//     const result = dayOfProgrammer(year);
//     console.log(result)
// }

let year = 2016

let dayOfProg;

    if (year == 1918) {
        dayOfProg = 26
        console.log(dayOfProg + ".09." + year) 
    }
    if (year <= 2700 && year >= 1919) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            dayOfProg = 256 - 244
            console.log(dayOfProg + ".09." + year) 

        }
        else {
            dayOfProg = 256 - 243
            console.log(dayOfProg + ".09." + year) 
        }
    }

    if (year <= 1917 && year >= 1700) {
        if (year % 4 == 0) {
            dayOfProg = 256 - 244
            console.log(dayOfProg + ".09." + year) 

        }
        else {
            dayOfProg = 256 - 243
            returdayOfProg + ".09." + yearn 
        }
    }
