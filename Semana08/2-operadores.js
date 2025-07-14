let monitor = 400;
let cpu = 300;
let memoria = 200;

//suma
let precioTotal = monitor + cpu + memoria;
console.log("El precio total es: ", precioTotal);

let adicional = 50 + 20;
console.log("Adicional: ", adicional);

//Resta
let descuento = 25;
let precioDescuento = precioTotal - descuento;
console.log("El precio con Dscto es: ", precioDescuento);

//Dividir en cuotas
let cuotas = precioDescuento / 2;
console.log("Con 2 cuotas: ", cuotas);

//Multiplicación
let totalPorDos = precioDescuento * 2;
console.log("El precio con dscto x 2: ", totalPorDos);

let ganancia = 1.15;
let precioFinal = (totalPorDos + adicional) * ganancia;
console.log("Precio Final: ", precioFinal);

//Módulo
let modulo = 1000 % 300;
console.log("Módulo: ", modulo);

//incrementos
let a = 10;
//a = a + 1;
a++;
console.log("a: ", a);

let b = 20;
//b = b + 5;
b+=5;
console.log("b: ", b);

//Decremento

let c = 30;
//c = c - 1;
c--;
console.log("c: ",c);

let d = 40;
//d = d - 7;
d-=7;
console.log("d: ", d);


//Concatenar

let nombre = "Jorge";
let saludo = "Hola " + nombre;
let apellido = "Diaz";
console.log(saludo);

let num = 20;
let num1 = "10";
let totalNum = num + num1
console.log(totalNum);

//concatenar con template string -> ${JAVASCRIPT, variable, etc}
//`` backstic o llamadas comillas invertidas alt + 96 

let despedida = `Nos vemos 
${nombre} ${apellido}
hasta luego ${10 + 20}`;
console.log("Despedida: ", despedida);
