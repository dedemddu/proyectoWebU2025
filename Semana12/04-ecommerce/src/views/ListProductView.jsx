import { useEffect, useState } from "react";
import { obtenerProductos } from "../service/productService";
import TableProducts from "../components/TableProducts";

const ListProductView = () => {
    const [ productos, setProductos ] = useState([]);

    useEffect (()=> {
        try {
            const getProductos = async () => {
                const productos = await obtenerProductos();
                setProductos(productos);
            }
            getProductos();
        } catch (error) {
            console.log("Error")
            throw error;
        }
    },[])
    return (
        <div className="container py-3">
            <h3 className="mb-4">Lista de Productos</h3>
            <TableProducts productos={productos}/>
        </div>
    )
}

export default ListProductView