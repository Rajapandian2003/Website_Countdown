const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function refreshTime(){

const currentYear = new Date().getFullYear();
const bDayYear = new Date(`May 15 ${currentYear} 00:00:00`);

const currentDate = new Date();
const dif = bDayYear - currentDate;

const days = Math.floor(dif/1000/60/60/24);
const hours = Math.floor((dif/1000/60/60)%24);
const mins = Math.floor((dif/1000/60)%60);
const secs = Math.floor((dif/1000)%60);

if (day<10){
    day.innerHTML="0"+days;
}
else{
    day.innerHTML=days;
}
hour.innerHTML = hours<10?"0"+hours:hours;
minute.innerHTML = mins<10?"0"+mins:mins;
second.innerHTML = secs<10?"0"+secs:secs;

}
setInterval(refreshTime,1000);