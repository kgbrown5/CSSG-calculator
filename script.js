const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const output = document.getElementById("output")

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

add.addEventListener("click", function(){

    
    const firstArg= Number(firstInput.value);
    const secondArg= Number(secondInput.value);
    
    if (!isNaN(firstArg) && !isNaN(secondArg)) {
        const result = addFunction(firstArg,secondArg);
        output.textContent = `${result}`;
        
    }else{
        output.textContent = "Enter valid numbers only!";

    }
    
    
    });



subtract.addEventListener("click", function(){
    
    const firstArg= Number(firstInput.value);
    const secondArg= Number(secondInput.value);
        
    
    if (!isNaN(firstArg) && !isNaN(secondArg)) {
        const result = subtractFunction(firstArg,secondArg);
        output.textContent = `${result}`;
    }else{
        output.textContent = "Enter valid numbers only!";
    
    }
        
    });

multiply.addEventListener("click", function(){
    

    const firstArg= Number(firstInput.value);
    const secondArg= Number(secondInput.value);
            
        
    if (!isNaN(firstArg) && !isNaN(secondArg)) {
        const result = multiplyFunction(firstArg,secondArg);
        output.textContent = `${result}`;
    }else{
        output.textContent = "Enter valid numbers only!";
        
    }
            
    });

divide.addEventListener("click", function(){
    
    const firstArg= Number(firstInput.value);
    const secondArg= Number(secondInput.value);
            
        
    if (!isNaN(firstArg) && !isNaN(secondArg)) {
        if(secondArg == 0) {
            output.textContent = "Undefined (can't divide by zero)";
        }else{
        const result = divideFunction(firstArg,secondArg);
        output.textContent = `${result}`;
        }
    }else{
        output.textContent = "Enter valid numbers only!";
        
    }
            
    });


   
