
const startTimerButtonElement = document.getElementById('startTimer');
const hoursInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

const hoursOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');

let targetTime;
let timerInterval;


const updateTimer = () => {

    if(hoursInputElement.value == 0 && minutesInputElement.value == 0 && secondsInputElement.value == 0){
        hoursOutputElement.textContent = `0 hours`;
        minutesOutputElement.textContent = `0 minutes`;
        secondsOutputElement.textContent = `0 seconds`;
    }else{
       if (targetTime) {
        const differenceInSeconds = Math.floor((targetTime - Date.now()) / 1000);
        if (differenceInSeconds < 1) {
            clearInterval(timerInterval);
        }

        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor(differenceInSeconds / 60) % 60;
        const seconds = Math.floor(differenceInSeconds % 60);

        hoursOutputElement.textContent = `${hours} hours`;
        minutesOutputElement.textContent = `${minutes} minutes`;
        secondsOutputElement.textContent = `${seconds} seconds`;
    }  
    }
    
}



startTimerButtonElement.addEventListener('click', ()=> {
    const targetHours = parseInt(hoursInputElement.value);
    const targetMinutes = parseInt(minutesInputElement.value);
    const targetSeconds = parseInt(secondsInputElement.value);

    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    date.setHours(currentHours + targetHours);
    date.setMinutes(currentMinutes + targetMinutes);
    date.setSeconds(currentSeconds + targetSeconds);

    targetTime = date.getTime();
    localStorage.setItem('targetTime', targetTime);
    updateTimer();
    timerInterval = setInterval(updateTimer, 500);
});


const storedTime = localStorage.getItem('targetTime');

if(storedTime){
    targetTime = storedTime;
    updateTimer();
    timerInterval = setInterval(updateTimer, 500);
}



    