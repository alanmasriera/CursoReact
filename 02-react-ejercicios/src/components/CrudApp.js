import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable.'


const initialDB = [
    {
        id: 1,
        marca: "Yamaha",
        modelo: "WR",
        cilindrada: "450",
        tipo: "4t",
    },
    {
        id: 2,
        marca: "Yamaha",
        modelo: "WR",
        cilindrada: "250",
        tipo: "4t",
    },
    {
        id: 3,
        marca: "Honda",
        modelo: "Tornado",
        cilindrada: "250",
        tipo: "4t",
    },
    {
        id: 4,
        marca: "Honda",
        modelo: "CRF",
        cilindrada: "450",
        tipo: "4t",
    },
    {
        id: 5,
        marca: "Yamaha",
        modelo: "YZ",
        cilindrada: "250",
        tipo: "2t",
    },
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDB)
    const [dataToEdit, setDataToEdit] = useState(null)
    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data])
    }
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro '${id}'?`)
        if(isDelete){
            let newData = db.filter(el => el.id !== id)
            setDb(newData)
        }else{
            return
        }
    }
    
    return (
        <div>
            <h2>CRUD App</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
            </article>
        </div>
    )
}

export default CrudApp

