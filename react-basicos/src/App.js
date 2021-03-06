import React from "react"
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  let nombre = "Alan"
  let auth = false
  let estaciones = ["primavera","verano","otoño","invierno"]
  return (
    
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <label htmlFor = "nombre"> nombre </label>
          <input type="text" id="nombre"/>
          <h1>{nombre}</h1>
          <p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
          <ul>
            {estaciones.map((el, index)=>(
              <li key={index}>{el}</li>
            ))}
          </ul> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Componente msg="Hola soy un componente desde una prop"/>
          <hr />
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto = {{nombre:"Alan", correo: "alan.masriera@gmail.com"}}
            funcion = {num => num * num}
            elementoReact = {<i>Esto es un elemento React</i>}
            componenteReact = {<Componente msg="Sou un componente pasado como prop"/>}
            />
          <hr/>
          <Estado/>
          <RenderizadoCondicional/>
          <RenderizadoElementos/>
          <EventosES6/>
          <EventosES7/>
          <MasSobreEventos/>
          <ComunicacionComponentes/>
          <CicloVida/>
          <AjaxApis/>
          <ContadorHooks titulo="Seguidores"/>
          <ScrollHooks/>
          <RelojHooks/>
          <AjaxHooks/>
          <HooksPersonalizados/>
          <Referencias/>
          <Formularios/>
          <Estilos/>
          
          <ComponentesEstilizados/>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
