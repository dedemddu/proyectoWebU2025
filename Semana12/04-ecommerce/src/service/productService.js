import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

const obtenerProductos = async () => {
    try {
        const respuesta = await axios.get(`${URL}/productos`);        
        //console.log(respuesta.data);
        if (respuesta.status === 200) {
            return respuesta.data;
        }
        throw new Error ("Error al obtener la data");
    } catch (error) {
        
        throw error;
    }
}

const nuevoProducto = async (producto)=>{
    try {
        const respuesta = await axios.post(`${URL}/productos`, producto);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { obtenerProductos, 
         nuevoProducto 
        }