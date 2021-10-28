import React,{useState, Fragment} from 'react'
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import Contador from './Components/Contador.jsx';
// import UserProvider from './Components/Context/userContext';
// import ListUser from './Components/ListUser';
// import { useCount } from './Components/Hooks/useCount';
// import Father from './Components/Routes/Father';
// import Axios from './Components/Axios';
// import Fecth from './Components/Fecth';
// import ComunicationComponent1 from './Components/ComunicationComponent1';
// import ComunicationComponent2 from './Components/ComunicationComponent2';
// import FatherComponent from './Components/IterateComponent/FatherComponent';
// import IterateKeys from './Components/IterateKeys';
// import IterateArray from './Components/IterateArray';
// import SpreadOperator from './Components/SpreadOperator';
// import ConditionalRendering from './Components/ConditionalRendering'
// import Events from './Components/Events';
// import Forms from './Components/Forms';
// import Hooks from './Components/Hooks';
// import LifeCycleComponent from './Components/LifeCycleComponent.jsx';
// import { Refs } from './Components/Refs';
// import StylesStyledComponent from './Components/StylesStyledComponent';
// import StylesModuleComponent from './Components/Styles Module';
// import StylesOnlineComponent from './Components/StylesOnlineComponent';
// import StylesComponent from './Components/StylesComponent';
// import FirstComponent from './Components/FirstComponent.jsx';
// import Props from './Components/Props';
// import StateComponent from './Components/StateComponent';



function App() {
  // const[contador]=useCount(0)

  // const list = ['pera ','manzana ', 'uvas']
  // const [estado,setEstado]=useState(null)

  // const estadoComponente=()=>{
  //     setEstado(true)
  // }

  // const childCallFather=()=>{
  //   console.log("llamando a padre desde el componente hijo")
  // }

  // const callBrother2=()=>{
  //   setEstado(false)
  // }

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
      {/* <h1>{contador}</h1> */}
      {/* <Father/> */}
      {/* <Axios/> */}
      {/* <Fecth/> */}
      {/* <ComunicationComponent1 callFather={childCallFather} cambioestado={estado} callBrother={callBrother2}/>
      <button onClick={estadoComponente} > Pulsa</button>
      <ComunicationComponent2 item={estado}/> */}
      {/* <FatherComponent/> */}
      {/* <IterateKeys/> */}
      {/* <IterateArray/> */}
      {/* <SpreadOperator/> */}
      {/* <ConditionalRendering/> */}
      {/* <Events/> */}
      {/* <Forms/> */}
      {/* <Hooks/> */}
      {/* <LifeCycleComponent/> */}
      {/* <Refs/> */}
      {/* <StylesStyledComponent/> */}
      {/* <StylesModuleComponent/> */}
      {/* <StylesOnlineComponent/> */}
      {/* <StylesComponent/> */}
      {/* <Props frutas={list}/> */}
      {/* <StateComponent/> */}
      {/* <FirstComponent/> */} 

      {/* <UserProvider>
        <ListUser/>
      </UserProvider> */}
      <Provider store={store}>
        <Contador/>
      </Provider>
    </Fragment>
  );
}

export default App;
