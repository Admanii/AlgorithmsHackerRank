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