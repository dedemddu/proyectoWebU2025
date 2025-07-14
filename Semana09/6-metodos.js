let productos = [
    {
        nombre:"Iphone 15",
        precio: 4500
    },
    {
        nombre:"Televison 4k",
        precio: 2350
    },
    {
        nombre:"Laptop Mac",
        precio: 5600
    },
    {
        nombre:"Antena Wifi Portatil",
        precio: 1500
    },
    {
        nombre:"Samsung AS6",
        precio: 3850
    },
    {
        nombre:"Laptop Lenovo",
        precio: 4550
    },
    {
        nombre:"Disco SDD",
        precio: 280
    },
    {
        nombre:"Mouse Inalambrico",
        precio: 50
    },
    {
        nombre:"Placa Madre Intel",
        precio: 1800
    },
    {
        nombre:"Procesador Intel",
        precio: 560
    }
]

// let precioProductoIncremento = productos.map((precioProducto)=>{
//     let precioFinal = precioProducto.precio * 1.20;
//     return precioFinal;
// })

// console.log("Los precios finales son: ", precioProductoIncremento);

// let precioCaros = productos.filter((precioProducto)=>{
//     return precioProducto.precio > 1500
// })
// console.log("Los precios caros son: ", precioCaros);

let articulosPrecios = productos.forEach((articulo)=> {
    console.log(`${articulo.nombre} tiene el precio de  ${articulo.precio}` )
})
