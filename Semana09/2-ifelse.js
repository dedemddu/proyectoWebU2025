// Cualquiera de las discotecas tienen que acatar las disposiciones generales impuestas por la MPT, ello de acuerdo a los siguiente términos:
// Si es menor de edad, no puede ingresar a la Disco.
// Si es menor de edad pero está acompañado de un adulto, puede ingresar a la Disco.
// Si es mayor o igual de 18 hasta 29, puede ingresar pero no tiene ningún beneficio.
// Si es mayor o igual de 30 y menor o igual que 60, tiene derecho a una chela.
// Si es mayor que 60, tiene descuentos en bebidas y tragos de un 10%.

// Algunos aspectos más a evaluar: menor de 18 años no ingresan salvo excepción descrita anteriormente.

let edad  = prompt("Ingresar edad");
let edadNum = parseInt(edad);

let estaAcompanado = confirm("Esta acompañad@ por un adulto");

if (edadNum > 60) {
    console.log("Tiene descuentos en bebidas y tragos de un 10%");
}else if (edadNum>= 30 && edadNum <= 60){
    console.log("Tiene derecho a una chelita!!");
}else if (edadNum >=18 && edadNum < 30){
    console.log("Puedes ingresar!!");
}else if (edadNum < 18 && estaAcompanado ===true){
    console.log("Puede pasar");
}else {
    console.log("No puede pasar!");
}