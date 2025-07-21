import { obtenerUsuario } from "./service.js";

const main = async ()=> {
    try {
        const usuarios = await obtenerUsuario();
        console.table(usuarios.data);
        dibujarUsuario(usuarios.data);    
    } catch (error) {
        console.log(error);
    }   
}

const Card = (usuario)=> {
    const {first_name, last_name, email} = usuario;
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="user-card">
            <p><strong>Nombre:</strong> ${first_name}</p>
            <p><strong>Apellidos:</strong> ${last_name}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
    `
    return div;
};

const dibujarUsuario = (usuarios) => {
    const divRoot = document.getElementById('root')
    usuarios.forEach((user) => {
        const newCard = Card(user);
        divRoot.appendChild(newCard);
    });
}
main();