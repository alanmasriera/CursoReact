import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {marca, modelo, cilindrada, tipo, id} = el
    return (
        <tr>
            <td>{marca}</td>
            <td>{modelo}</td>
            <td>{cilindrada}</td>
            <td>{tipo}</td>
            <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
        </tr>
    )
}

export default CrudTableRow
