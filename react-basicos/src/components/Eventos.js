import React ,{Component, component} from "react"

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state ={
            contador: 0,
        }
        this.sumar = this.sumar.bind(this) 
        this.restar = this.restar.bind(this) 
    }
    sumar(e){
        this.setState({contador: this.state.contador + 1,})
    }
    restar(e){
        this.setState({contador: this.state.contador - 1,})
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

//Property initializer
export class EventosES7 extends Component{
    state ={
        contador: 0,
    }

    sumar = (e)=>{
        this.setState({contador: this.state.contador + 1,})
    }
    restar = (e)=>{
        this.setState({contador: this.state.contador - 1,})
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(props){
//     return(<button onClick={props.myOnClick}>Boton hecho componente</button>)
// }

// const Boton = (props) =>(
//     <button onClick={props.myOnClick}>Boton hecho componente</button>
// )

const Boton = ({myOnClick}) =>(
    <button onClick={myOnClick}>Boton hecho componente</button>
)

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) => {
        console.log(e)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,"pasando parametro desde el evento")}>Saludar</button>

            {/* Evento personalizado */}
            <Boton myOnClick={(e) => this.handleClick(e,"pasando parametro desde el evento")}/>
            </div>
        )
    }
}