import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './Components/Hooks';
// import LifeCycleComponent from './Components/LifeCycleComponent.jsx';
// import { Refs } from './Components/Refs';
// import StylesStyledComponent from './Components/StylesStyledComponent';
// import StylesModuleComponent from './Components/Styles Module';
// import StylesOnlineComponent from './Components/StylesOnlineComponent';
// import StylesComponent from './Components/StylesComponent';
// import FirstComponent from './Components/FirstComponent.jsx';
// import Props from './Components/Props';
// import StateComponent from './Components/StateComponent';

const list = ['pera ','manzana ', 'uvas']
function App() {
  return (
    // <div>
    //   <h1>Hola mundo</h1>
    //   <h2></h2>
    // </div>

    // <>
    //   <h1>Hola mundo</h1>
    //   <h2></h2>
    // </>
    
    <Fragment>
      <Hooks/>
      {/* <LifeCycleComponent/> */}
      {/* <Refs/> */}
      {/* <StylesStyledComponent/> */}
      {/* <StylesModuleComponent/> */}
      {/* <StylesOnlineComponent/> */}
      {/* <StylesComponent/> */}
      {/* <Props frutas={list}/> */}
      {/* <StateComponent/> */}
      {/* <FirstComponent/> */} 
    </Fragment>
  );
}

export default App;
