import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import { BrowserRouter, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'
import './Father.css'
import DinamicRoutes from './DinamicRoutes';

const Father = () => {
    return (
        <BrowserRouter>
            {/* <Route path="/" exact component={Component1}></Route>
            <Route path="/pagina2" sensitive component={Component2}></Route>
            <Route path="/pagina3" component={Component3}></Route>
            <Route path="/pagina4" component={()=><h2>Hola estamos en componente 4</h2>}></Route> */}

            <Route path='/' exact>
                <Component1/>
            </Route>
            <Route path='/pagina2' exact>
                <Component2/>
            </Route>
            <Route path='/pagina3' exact>
                <Component3/>
            </Route>

            <Route path="/*">
                <Redirect to="/"></Redirect>
            </Route>

            <NavLink activeStyle={{color:'red'}} to="/pagina2">A componenten 2</NavLink><br />
            <NavLink activeClassName="estiloLink" to="/pagina3">A componenten 3</NavLink>
            {/* <Link to="/pagina3">A componenten 3</Link> */}

            <Route path="/users/:id" component={DinamicRoutes}></Route>


        </BrowserRouter>
    )
}

export default Father

