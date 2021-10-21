import React,{Component} from "react";
import Styles from './StylesModule.module.css'

class StylesModuleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1 className={Styles.titulo}>Prueba</h1>
            </>
         );
    }
}
 
export default StylesModuleComponent;