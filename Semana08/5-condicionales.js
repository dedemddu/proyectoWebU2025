const edad = 18;

// if (edad >= 18){
//     console.log("Es mayor de edad");
// }
// else {
//     console.log("Es menor de edad");
// }

// if (edad < 18 ){
//     console.log("Fiorella es menor de edad");
// }
// else if (edad >=18 && edad <=21){
//     console.log("Fiorella esta entre las edades de 18 a 21 años");
// }
// else {
//     console.log("Fiorella tiene mas de 21 años");
// }
let base =  prompt("Ingrese la base del triangulo: ");
console.log(base);

let altura = prompt("Ingrese la altura del triangulo: ");
console.log(altura);

let areaTriangulo = (base * altura) / 2;
console.log("El área del triangulo es: ", areaTriangulo);
alert(`El área del triángulo es ${areaTriangulo}`);