const obtenerUsuario = async () => {
    try {
        const respuesta = await fetch("https://reqres.in/api/users?page=2", {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }
        });
        const datos = await respuesta.json();
        return datos;    
    } catch (error) {
        console.log(error);
        throw error;
    }
    
};

export { obtenerUsuario };
