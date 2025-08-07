import { useEffect, useState } from "react";
import { obtenerProductos } from "../service/productService";
import TableProducts from "../components/TableProducts";

const ListProductView = () => {
    const [ productos, setProductos ] = useState([]);

    useEffect (()=> {
        try {
            const getProductos = async () => {
                const productos = await obtenerProductos();
                setProductos(productos)
            }
            getProductos();
        } catch (error) {
            throw error;
        }
    })
    return (
        <div className="container">
            <h3>Lista de Productos</h3>
            <TableProducts productos={productos}/>
        </div>
    )
}

export default ListProductView