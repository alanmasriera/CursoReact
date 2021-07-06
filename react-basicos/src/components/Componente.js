import React, { Component} from "react";

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg + "desde una class"}</h2>
//     }
// }

// function Componente(props){
//     return <h2>{props.msg + "desde una funcion"}</h2>
// }

const Componente = props => <h2>{props.msg + " desde una funcion expresada"}</h2>
export default Componente