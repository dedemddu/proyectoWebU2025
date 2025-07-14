// En un restaurante típico se ofrece tres tipo de comidas, los cuales consisten en los siguientes:

// Opción 1: Incluye especial de pescado a la hoja, acompañado de salsa de cocona
// Opción 2: Incluye especial de tacacho con cecina mas su refresco de carambola.
// Opción 3: Incluye caldo de gallina, acompañado de su arroz sin sal.
//  En caso de no seleccionar ninguna de las opciones, se ofrecerá solo su menú del día.

let opcion = prompt("Ingresa la opción ");
opcion = parseInt(opcion);

switch (opcion){
    case 1:
        console.log("Seleccionaste pescado a la hoja, acompañado de salsa de cocona");
        break;
    case 2:
        console.log("Seleccionaste especial de tacacho con cecina mas su refresco de carambola");
        break;
    case 3:
        console.log("Seleccionaste caldo de gallina, acompañado de su arroz sin sal");
        break;
    default:
        console.log("Menú del día");
}