const hours  = document.getElementById("hours");
const minutes  = document.getElementById("minutes");
const seconds  = document.getElementById("seconds");
const amorpm = document.getElementById("amorpm");

function updateTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = "AM";

    if(hour > 12){
        hour -=12; 
        ampm = "PM";
    }

    hour = hour<10 ? "0"+hour : hour;
    minute = minute<10 ? "0"+minute : minute;
    second = second<10 ? "0"+second : second;

    hours.innerText = hour;
    minutes.innerHTML = minute;
    seconds.textContent = second;
    amorpm.innerHTML = ampm;
    setTimeout(()=>{updateTime()},1000);

}

updateTime();


