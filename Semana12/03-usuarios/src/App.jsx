import { useState, useEffect } from "react";
import axios from 'axios';

const App = ()=> {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const options = (num)=>{
    let opts = [];
    for (let i=1; i<=num; i++){
      opts.push(<option value={i} key={i}>Pagina {i}</option>)
    }
    console.log("OPTS: ", opts);
    return opts;
  }

  useEffect(() => {
    axios
    .get(`https://reqres.in/api/users?page=${pagina}`, {
      headers:{
        'Content-Type':'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    })
    .then((respuesta)=>{
      console.log(respuesta.status);
      console.log(respuesta.data)
      setUsuarios(respuesta.data.data);
      setTotalPaginas(respuesta.data.total_pages);
    })
    .catch((error)=> {
      console.log(error);
    })
    return ()=> {
      console.log("Limpiando el componente");
    }
  }, [pagina]);

  return (
    <div>
      <select
        value={pagina}
        onChange={(evento)=>{
          setPagina(+evento.target.value)
        }}
        >
          {options(totalPaginas)}
        </select>
        {usuarios.map((user) =>(
          <div key={user.id}>
            {user.first_name},
            {user.email}
          </div>
        ))}
    </div>
  )
}

export default App
