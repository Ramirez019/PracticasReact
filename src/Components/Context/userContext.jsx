import { createContext, useState,useEffect } from "react";
import axios from "axios";

//creamos context
export const userContext = createContext()

//creamos el provider

const UserProvider=(props)=>{
    //Creamos el state del context
    const[users, setUsers]= useState([])

    //ejecutamos el pedido del api

    useEffect(() => {
        const getUsers = async()=>{
            const url = 'https://jsonplaceholder.typicode.com/users'
            const res = await axios.get(url)

            setUsers(res)
        }
        getUsers();
    }, [])

    return(
        <userContext.Provider value={{users}}>
            {props.children}
        </userContext.Provider>
    )

}
export default UserProvider