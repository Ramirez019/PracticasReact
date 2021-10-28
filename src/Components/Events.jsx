import React from 'react'
/*
    onFocus(Cuando un input esta activado o en foco)
    onBlur(cuando pulsamos fuera de un input que esta en foco)
    onChange(cuando hay un cambio en el componente o input)
    onClick(cuando se hace un click en el ratos sobre el elemento)
    onDoubleClick(cuando se hace un click  en el ratos sobre el elemento (nativamente))
    onKeyDown(Cuando pulsamos un boton del teclado)
    onKeyPress(cuando presionamos una tecla)
    onMouseDown(cuando presionamos el boton del mouse mouse hace abajo)
    onMouseOver(cuando pasamos por encia el raton)
    onMouseLeave(cuando salimos del elemento)

*/ 

const focus =()=> console.log("estoy en foco")
const blur  =()=> console.log("No estoy en foco")
const change =()=> console.log("he Cambiado")
const click =()=> console.log("me has cliqueado")
const doubleClick =()=> console.log("me has cliqueado 2 veces")
const push =()=> console.log("me estas pulsando")
const pres =()=> console.log("me estas presionando")


const Events = () => {
    return (
        <>
            <form>
                <input onBlur={blur}
                        onFocus={focus}
                        onChange={change}
                        onKeyDown={push}
                        onKeyPress={pres}
                        type="text"></input>
                <button onClick={click}
                        onDoubleClick={doubleClick} type="button">Click</button>
            </form>
        </>
    )
}

export default Events
