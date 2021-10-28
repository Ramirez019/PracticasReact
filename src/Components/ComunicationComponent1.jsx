import React from 'react'

const ComunicationComponent1 = (props) => {

    if(props.cambioestado===true)
    {
        console.log("El estado es verdadero");
    }

    const call=()=>{
        props.callFather();
    }

    const callBrother=()=>{
        props.callBrother()
    }

    return (
        <>
            <button onClick={call}>llama padre </button>
            <button onClick={callBrother}>llama Hermano </button>
        </>
    )
}

export default ComunicationComponent1
