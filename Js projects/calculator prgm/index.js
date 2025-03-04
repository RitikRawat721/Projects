// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
 display.value += input;
}

function clearDisplay(){
display.value = ""
}

function calculate(){
try {
    display.value = eval(display.value); //eval is built in function which acts as an calculator
}
catch(error){
display.value = "Error"
}

}