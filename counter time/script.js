//Define a tiemr element 
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('secounds');

function CounterDown() {
    const currentDate = new Date();
    const Birthday = new Date("5 Feb 2022");

    const totalSecond = (Birthday - currentDate) / 1000;
    
    if (totalSecond <= 0) {
        alert("Hey bro happy birthday");
        return;
    }
    const DayCount = Math.floor(totalSecond / 3600 / 24);
    const HoursCount = Math.floor( totalSecond / 3600) % 24;
    const MinsCount = Math.floor( totalSecond / 60 ) % 60;
    const SecondsCount = Math.floor(totalSecond ) % 60 ; 
    
    
    dayEl.innerHTML = DayCount;
    hoursEl.innerHTML = HoursCount; 
    minsEl.innerHTML = MinsCount;
    secondsEl.innerHTML = SecondsCount;
}
//Initional
CounterDown();

setInterval(CounterDown, 1000);