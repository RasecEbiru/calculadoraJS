const classesNumber   = document.getElementsByClassName("number");
const classesOperator = document.getElementsByClassName("operator");
const classesFunction = document.getElementsByClassName("function");
const display         = document.getElementById("display");
let   memoria         = "";
//Función permite ir desplegando los digitos y operadores en pantalla al hacer click
let verDigitoOperador = function() {
    let digUoperador  = this.innerHTML;
    display.innerHTML = (display.innerHTML == "0") ? "" : display.innerHTML;
    display.innerHTML = display.innerHTML + digUoperador;
};

//Ejecuta función seleccionada en la calculadora y entrega resultado
let ejecutaFuncion = function() {
    let funcionEjecutar = this.innerHTML;
    switch (funcionEjecutar) {
        case '=':
            display.innerHTML = eval(memoria + display.innerHTML);
            break;
        case 'AC':
            memoria = display.innerHTML;
            display.innerHTML = "0";
            break;
        case 'C':
            memoria = "";
            display.innerHTML = "0";
            break;            
        case '%':
            let expresion =  display.innerHTML.split('*');
            display.innerHTML = eval('('+expresion[0]+'*'+expresion[1]+')/100');
            break;     
        case '√':
            display.innerHTML = Math.sqrt(eval(display.innerHTML));
            break;                 
        default:
            statement;
    }    
};

//Escuchar evento click de los elementos de la clase "number"
for (i = 0; i < classesNumber.length; i++) {
    classesNumber[i].addEventListener('click', verDigitoOperador);
}

//Escuchar evento click de los elementos de la clase "operator"
for (i = 0; i < classesOperator.length; i++) {
    classesOperator[i].addEventListener('click', verDigitoOperador);
}

//Escuchar evento click de los elementos de la clase "function"
for (i = 0; i < classesFunction.length; i++) {
    classesFunction[i].addEventListener('click', ejecutaFuncion);
}