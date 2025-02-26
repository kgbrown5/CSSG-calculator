const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const output = document.getElementById("output")
const previous = document.getElementById("previous")
const clear = document.getElementById("clear")

let previousAnswer = 0

function addFunction(a,b){
    return a + b
}

function subtractFunction(a,b){
    return  a - b
}

function multiplyFunction(a,b){
    return a * b
}

function divideFunction(a,b){
    return a / b
}

add.addEventListener("click", () => {
    let result = addFunction(Number(firstInput.value),Number(secondInput.value));
    previousAnswer = result;
    output.textContent = `${result}`;
    });



subtract.addEventListener("click", () => {
    let result = subtractFunction(Number(firstInput.value),Number(secondInput.value));
    previousAnswer = result;
    output.textContent = `${result}`;   
    });

multiply.addEventListener("click", () => {
    let result = multiplyFunction(Number(firstInput.value),Number(secondInput.value));
    previousAnswer = result;
    output.textContent = `${result}`;      
    });

divide.addEventListener("click", () => {
    let result = divideFunction(Number(firstInput.value),Number(secondInput.value));
    previousAnswer = result;
    output.textContent = `${result}`;
    });


clear.addEventListener('click', () => {
    firstInput.value = "";
    secondInput.value = "";
    output.textContent = "";
});

previous.addEventListener('click', () => {
    firstInput.value = `${previousAnswer}`;
})
