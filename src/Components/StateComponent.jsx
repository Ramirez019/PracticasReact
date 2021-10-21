import React,{Component} from "react";

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Cristian",
            apellido:"Ramirez"
         }
    }

    ChangeData(){
        if(this.state.name === "Cristian")
            this.setState({name:"Eunice", apellido: "Castillo"})
        else
            this.setState({name:"Cristian", apellido:"Ramirez"})
    }

    render() { 
        return ( 
            <>
            <h2>Mi nombre es: {this.state.name} {this.state.apellido}</h2>

            <button onClick={this.ChangeData.bind(this)}>Cambiar Datos</button>
            </>
         );
    }
}
 
export default StateComponent;