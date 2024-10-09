const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value +=  input;
    
    
}
const clearDisplay = () => {
        display.value = "";
}
const calculate = () => {
    display.value = eval(display.value);
}