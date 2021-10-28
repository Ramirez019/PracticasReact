import React from 'react'

const IterateArray = () => {

    const animals =['pato','loro','gato','perro']

    const personal =[
                        {
                            id:0,
                            nombre:'Maria',
                            puesto: 'limpiadora'
                        },
                        {
                            id:1,
                            nombre:'Pepi',
                            puesto: 'lavanderia'
                        },
                        {
                            id:2,
                            nombre:'Sara',
                            puesto: 'Bar'
                        }
                    ]
    return (
        <>
            <ul>
                {animals.map(item=>(
                    <li>{item}</li>
                ))}
            </ul>

            <ul>
                {personal.map(item=>(
                    <li key={item.id}> Id: {item.id} -
                                    Nombre: {item.nombre} -
                                    Puesto: {item.puesto} 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default IterateArray
