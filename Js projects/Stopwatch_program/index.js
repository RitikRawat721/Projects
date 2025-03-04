const display = document.getElementById("display");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const data4 = document.getElementById("data4");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now()- elapsedTime; // Start time will be in miliseconds which we will convert later
        // it will give us a time since EPIC(when your computer think time began) 
        timer = setInterval(update, 10); // 10 is in miliseconds for the interval
        isRunning = true;
    }
}


function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"

}

function update(){

const currentTime = Date.now();
elapsedTime = currentTime - startTime // Elapsed time will be in miliSeconds
// we will convert elapsed time in redable format hours, minutes......

let hours = Math.floor(elapsedTime / (1000 * 60 * 60)) // 1000 = ms. 60 and 60 = seconds and minutes.
                                     // this is a formula to get the miliseconds in seconds(the one in the dividend)

let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
                                    //Formula to convert seconds into minutes 

let seconds = Math.floor(elapsedTime / 1000 % 60);

let miliSeconds = Math.floor(elapsedTime % 1000 / 10); // we divide it by 10 to get first 2 digits

hours= String(hours).padStart(2, 0); // padStart is to give some space in display of the timer
minutes= String(minutes).padStart(2, 0);
seconds= String(seconds).padStart(2, 0);
miliSeconds= String(miliSeconds).padStart(2, 0);

display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;

// for study purpose
data1.textContent = `starting time = ${startTime} `;
data2.textContent = `current time = ${currentTime} `;
data3.textContent = `current time - starting time = ${elapsedTime} `;

}






