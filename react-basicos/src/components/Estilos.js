import React from 'react';
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos(){
    let myStyles = {
        borderRadius:".5rem",
        margin: "2rem auto",
        maxWidth: "50%",
    }
    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 
            className="bg-react" 
            style={{borderRadius: ".75rem", margin: "1rem"}}
            >Estilos en linea (atributo style)</h3>
            <h3 
            className="bg-react" 
            style={myStyles}
            >Estilos en linea </h3>
            <h3 
            className="bg-react" 
            >Agregando normalize con 
            <br/>
            <code>@import-notmalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>


        </section>

    )
}

// INSTALAR:
// npm install node-sass
// npm install --save styled-components
// Extension: styled-components-snippets