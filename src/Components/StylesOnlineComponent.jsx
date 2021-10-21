import React,{Component} from "react";

class StylesOnlineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let age = 5

        const titulo={
            textAlign:'center',
            color:'green',
            backgroundColor: age>= 37 ? 'green':'orangered',
        }
        return ( 
            <>
                <h1 style={titulo} >Hola</h1>
            </>
             );
    }
}
 
export default StylesOnlineComponent;