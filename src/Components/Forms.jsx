import React,{useState} from 'react'

const Forms = () => {

    const[name,setName]= useState(false)
    const[firstName,setFirstName]= useState(false)
    const[email,setEmail]= useState(false)
    const[password,setPassword]= useState(false)

    const nameRegex = /^[a-zA-Z]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
    const fistNameRegex = /^[a-zA-z]{3,16}$/
    const passwordRegex = /^[a-z0-9_-]{6,18}$/

    const ValueName=(nameValid)=>{
        if(nameValid.trim()){
            if(nameRegex.test(nameValid))
            {
                setName(true);
            }
        }
    }

    const ValueFirsName=(firstnameValid)=>{
        if(firstnameValid.trim()){
            if(fistNameRegex.test(firstnameValid))
            {
                setFirstName(true);
            }
        }
    }

    const ValueEmail=(emailValid)=>{
        if(emailValid.trim()){
            if(emailRegex.test(emailValid))
            {
                setEmail(true);
            }
        }
    }

    const ValuePassword=(passwordValid)=>{
        if(passwordValid.trim()){
            if(passwordRegex.test(passwordValid))
            {
                setPassword(true);
            }
        }
    }

    const Send=(e)=>{
        e.preventDefault();

        if(name===true &&
            firstName === true &&
            email === true &&
            password === true
            ) 
            {
                console.log("Los datos han sido validados correctamente");
            }
            else{
                console.log("enviar datos correctos");
            }

            setTimeout(()=>{window.location.reload()},10000);
    }

    return (
        <>
            <form onSubmit={e=>Send(e)}>
                <h3>Nombre:</h3>
                <input type="text" onChange={e=>ValueName(e.target.value)} />
                <h3>Apellido:</h3>
                <input type="text" onChange={e=>ValueFirsName(e.target.value)} />
                <h3>Email:</h3>
                <input type="email" onChange={e=>ValueEmail(e.target.value)} />
                <h3>Password:</h3>
                <input type="password" onChange={e=>ValuePassword(e.target.value)} />
                <br />
                <input type="submit" />
            </form> 
        </>
    )
}

export default Forms
