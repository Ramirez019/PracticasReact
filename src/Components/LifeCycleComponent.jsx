import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:'Cristian',
            evento: null
         }
    }

    changeName(){
        this.setState({nombre:'Eunice'});
    }

    //se monta el componenete(eventos, peticiones http)
    componentDidMount() {
        this.state.evento = window.addEventListener('resize',()=>{
            console.log(window.innerWidth)
        })
    }

    //Actualizacion del componente(atualizaciones)
    componentDidUpdate(prevProps, prevState) {
            //prevProps, PrevState
            if(prevState === this.state.nombre){
                console.log("Mi estado no ha cambiado")
            }
            else    
                console.log('Mi estado si ha cambiado y ahora me llamo ', this.state.nombre);
    }

    // desmontaje del componente(limpia eventos y timers)
    componentWillUnmount() {
        window.removeEventListener(this.state.evento);
    }

    render() { 
        return ( 
            <>
                <h1>Mi nombre es {this.state.nombre}</h1>
                <button onClick={this.changeName.bind(this)}>Cambiar nombre</button>
            </>
         );
    }
}
 
export default LifeCycleComponent;