import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Axios = () => {

    const [users,setUsers]=useState([])

    useEffect(() => {
        const loadUsers= async()=>{
            const res= await axios('https://jsonplaceholder.typicode.com/users')

            setUsers(res.data)
            console.log(users)
        }
        loadUsers()
    }, [])

    return (
        <>
          <ul>
              {users.map(item=>(
                      <li key= {item.id}>
                          Nombre: {item.name} <br />
                          Apellido: {item.username} <br />
                          email: {item.email} <br />
                          phone: {item.phone} <br /><br />
                      </li>
                  ))

              }
          </ul>
        </>
    )
}

export default Axios
