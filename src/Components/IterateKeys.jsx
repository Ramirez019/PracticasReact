import React from 'react'

const IterateKeys = () => {
    const animals ={
        nombre:'coco',
        especie:'delfin',
        edad: 5,
        acuario:'Valencia',
        adiestrador:'Marcelo'
    }
    const key = Object.keys(animals)
    return (
        <>
            <ul>
                {key.map(k=>(
                    <li>{k} : {animals[k]}</li>
                ))}
            </ul>
        </>
    )
}

export default IterateKeys
