let s  = "06:01:00PM";
let time = s.substring(0, s.length-2);
let hour = Number(s.substring(0, 2));
let isAM = s.includes("AM");
console.log(s);

if (isAM){
    if(hour<12){
    s = time;
    }else {
        hour = "00";
        s = String(hour) + time.substring(2,time.length)
    }
}else {
    if(hour<12){
        hour = hour + 12;
        s = String(hour) + time.substring(2,time.length);
    }else {
        s = String(hour) + time.substring(2,time.length);
    }
}
// return s;
console.log(s);


// OPTIMISED CODE 
// let s = "12:01:00AM";
// let hour = parseInt(s.substring(0, 2));
// let isAM = s.includes("AM");

// if (!isAM && hour < 12) {
//   hour += 12;
// } else if (isAM && hour === 12) {
//   hour = 0;
// }

// s = hour.toString().padStart(2, "0") + s.substring(2, s.length - 2);
// console.log(s);
