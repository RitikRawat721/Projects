const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
const countDisplay = document.getElementById("count-num");

let count = 0;
let color = 100;

add.addEventListener('click', () => {

    if(count < 20){
        count++;
        color -= 2;
    }

    document.body.style.backgroundColor = `hsl(0, 100%, ${color}%)`
    countDisplay.textContent = count;
})

sub.addEventListener('click', () => {

    if(count > 0){
        count--;
        color += 2;
    }
    document.body.style.backgroundColor = `hsl(0, 100%, ${color}%)`
    countDisplay.textContent = count;
})

reset.addEventListener('click', () => {
    
    count = 0;
    document.body.style.backgroundColor = `hsl(0, 100%, 100%)`
    countDisplay.textContent = count;
})