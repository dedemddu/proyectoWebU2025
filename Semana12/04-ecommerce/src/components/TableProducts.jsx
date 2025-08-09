import CircleColor from "./CircleColor"
const TableProducts= ({productos}) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Color</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(({nombre, descripcion, marca, precio, color, id})=>(
                        <tr key={id}>
                            <td>{nombre}</td>
                            <td>{descripcion}</td>
                            <td>{marca}</td>
                            <td>{precio}</td>
                            <td> <CircleColor color = {color} /></td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>                        
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableProducts