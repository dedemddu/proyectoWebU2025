//por declaración
function suma (a, b) {
    return a + b;
}
console.log(suma(5,6));

//Por expresion
const decremento = function (a, b){
    return a - b;
}
console.log(decremento(20,12));

//Por construcción de objeto
const saludo1 = new Function ('return `Hola`');
console.log(saludo1());