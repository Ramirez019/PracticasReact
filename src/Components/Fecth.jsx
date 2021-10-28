import React, { useState, useEffect } from 'react'

const Fecth = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        const loadUsers=async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()

            setUsers(data)
            console.log(data)
        }
        loadUsers()
    },[])

    
    return (
        <>
            <ul>
                {users.map(item=>(
                    <li key={item.id}>
                        Nombre: {item.name} <br />
                        Apellido: {item.username} <br />
                        Email: {item.emaul} <br />
                        Phone: {item.phone} <br /><br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Fecth
