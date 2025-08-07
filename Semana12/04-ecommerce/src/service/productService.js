import axios from 'axios';

const URL = 'https://669579174bd61d8314cb63e8.mockapi.io'

const obtenerProductos = async () => {
    try {
        const respuesta = await axios.get(`${URL}/productos`);        
        console.log(respuesta.data);
        if (respuesta.status === 200) {
            return respuesta.data;
        }
        throw new Error ("Error al obtener la data");
    } catch (error) {
        console.error(error);
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