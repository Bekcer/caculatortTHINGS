var equation = "";

function input(inputValue) {
    equation+=inputValue;
    document.getElementById("output-value").innerHTML = equation;

}

function clear() {
    console.log("hello")
    equation = "";
    document.getElementById("output-value").innerHTML = equation;
    console.log(equation)
}

function backspace(list) {
    equation.splice(-1, 1); 
    document.getElementById('output-value').innerHTML = equation;
}