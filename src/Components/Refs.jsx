import React, { createRef } from 'react';

export const Refs = () => {

    const changeColor = createRef()

    const changeColorText=()=>{
       changeColor.current.style.color='blue'
    }

    return (
        <>
           <h1 ref={changeColor}>Soy un titulo y cambio de color</h1> 
           <button onClick={changeColorText}>Cambia color</button>
        </>
    )
}
