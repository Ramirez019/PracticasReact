import React from 'react'

const SpreadOperator = () => {

    const wildAnimals =['Ciervo', 'Lobo', 'Jabali','Oso']
    const domesticAnimals =['Perro', 'Gato', 'Hasmter', 'Canario']

    const animals =[...wildAnimals,...domesticAnimals]

    const modelosEuropeas={
        Alemania:'Dina',
        Francia:'Cristine',
        Espain:'Carmen',
        Senegal: 'Martha'
    };

    const modelosAfricanas={
        Senegal2:{Senegal:'Sonia'},
        Sudafrica: 'Carmele',
        Sudan:'Sandra'
    };
    const modelos = {...modelosEuropeas, ...modelosAfricanas}
    console.log(modelos);

     console.log(animals);
    return (
        <>
            
        </>
    )
}

export default SpreadOperator
