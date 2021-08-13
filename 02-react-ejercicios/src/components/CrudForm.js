import React, { useState, useEffect } from 'react';

const initialForm = {
        id: null,
        marca: "",
        modelo: "",
        cilindrada: "",
        tipo: "",
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm)
   
    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!form.marca || !form.modelo || !form.cilindrada || !form.tipo){
            alert("Datos incompletos")
            return
        }
        if (form.id === null){
            createData(form)
        }else{
            updateData(form)
        }
        handleReset()
    }
    
    const handleReset = (e) =>{
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>{dataToEdit ? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="marca" placeholder="Marca" onChange={handleChange} value={form.marca}/>
                <input type="text" name="modelo" placeholder="Modelo" onChange={handleChange} value={form.modelo}/>
                <input type="text" name="cilindrada" placeholder="Cilindrada" onChange={handleChange} value={form.cilindrada}/>
                <input type="text" name="tipo" placeholder="Tipo" onChange={handleChange} value={form.tipo}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
