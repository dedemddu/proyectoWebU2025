import { useState } from "react"
import { nuevoProducto } from "../service/productService";
import Swal from "sweetalert2";

const CreateProductView = () => {
    const [values, setValues] = useState({
        nombre: '',
        descripcion: '',
        marca: '',
        precio: 0,
        foto: "https://prueba.com/foto1",
        color: 'ffffff'
    })

    const handleValues = (ev) => {
        console.log(ev.target.name)
        const nombrePropiedad = ev.target.name;
        const valorPropiedad = ev.target.value;

        const productoNuevo = {
            ...values,
            [nombrePropiedad]: valorPropiedad
        }
        setValues(productoNuevo);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const resultado = await nuevoProducto(values);
        console.log(resultado);
        // alert("Producto Creado");
        Swal.fire({
            title:"Producto creado!",
            text: `${values.nombre} se guardó correctamente`,
            icon: 'success',
            confirmButtonText:'Ok'
        })
    }

    return (
        <div className="container pt-4">
            <h1 className="mb-3">Producto Nuevo</h1>
            <form onSubmit={handleSubmit}>
                {/* nombre */}
                <div className="mb-3">
                    <label
                        htmlFor="nombre"
                        className="form-label">
                        Nombre del Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Ingrese nombre del producto"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleValues}
                    />
                </div>
                {/* descripcion */}
                <div className="mb-3">
                    <label
                        htmlFor="descripcion"
                        className="form-label">
                        Descripción del Producto
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="descripcion"
                        placeholder="Ingrese la descripción del prodcuto" 
                        name="descripcion"
                        value={values.descripcion}
                        onChange={handleValues}/>
                </div>
                {/* marca */}
                <div className="mb-3">
                    <label
                        htmlFor="marca"
                        className="form-label">
                        Marca del Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="marca"
                        placeholder="Ingrese marca del producto"
                        name="marca"
                        value={values.marca}
                        onChange={handleValues}
                    />
                </div>
                {/* Precio */}
                <div className="mb-3">
                    <label
                        htmlFor="precio"
                        className="form-label">
                        Precio del Producto
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="precio"
                        placeholder="0.00"
                        name="precio"
                        value={values.precio}
                        onChange={handleValues}
                    />
                </div>
                {/* Color */}
                <div className="mb-3">
                    <label
                        htmlFor="color"
                        className="form-label">
                        Color
                    </label>
                    <input
                        type="color"
                        className="form-control"
                        id="color"
                        name="color"
                        value={values.color}
                        onChange={handleValues}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                 >
                       Nuevo Producto 
                 </button>
            </form>

        </div>
    )
}

export default CreateProductView


// <th></th>
//<th>Descripción</th>
// <th>Marca</th>
//<th>Precio</th>
//<th>Color</th>