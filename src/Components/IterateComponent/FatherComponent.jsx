import React from 'react'
import ChildComponent from './ChildComponent'

const FatherComponent = () => {

    const names =['Luis', 'Carlos', 'Angel']
    return (
        <>
            <ul>
                {names.map(item=>(
                    <ChildComponent nameList={item}/>
                ))}
            </ul>
        </>
    )
}

export default FatherComponent
