var equation = "";

function input(inputValue) {
    equation+=inputValue;
    document.getElementById("output-value").innerHTML = equation;

}


function clearStuff() {
    equation = equation.slice(1); 
    document.getElementById('output-value').innerHTML = equation;
}
function backspace() {
    equation = equation.substring(0, equation.length-1); 
    document.getElementById('output-value').innerHTML = equation;
}