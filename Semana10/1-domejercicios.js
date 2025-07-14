let inputProducto = document.getElementById('idProducto');
let btnAgregar = document.getElementById('btnAgregar');
let ulProductos = document.querySelector('.productos');

//Obtener productos
function obtenerProductos(){
    let textoProducto = inputProducto.value;
    return textoProducto;
}

let listProductos = [];
function dibujarProductos(){
    let htmlProductos = "";
    listProductos.forEach(function(item){
        htmlProductos= htmlProductos + `
            <li>${item}</li>
        `
    });
    ulProductos.innerHTML = htmlProductos;
}

btnAgregar.addEventListener('click', function(){
    let textoObtenido = obtenerProductos();
    console.log('texto Obtenido', textoObtenido);
    listProductos.push(textoObtenido);
    console.table(listProductos);
    dibujarProductos();
})