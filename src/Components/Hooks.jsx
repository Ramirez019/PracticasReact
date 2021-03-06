import React,{useState, useEffect} from 'react'

const Hooks = () => {
    const[color,setColor]=useState('yellow');
    const[contador,setContador] = useState(0);
    
    useEffect(() => {
        let interval = setInterval(() => {setContador(contador+1)},1000);
    
        return()=> {
            clearInterval(interval)
        }

    }, [contador])

    const Bottom ={
        width:'100%',
        height:'1000px',
        backgroundColor:color
    }

    const changeColor=()=>{
        if(color=== 'yellow')
            setColor('orangered');
        if(color === 'orangered') 
            setColor('yellow');
    }

    return (
        <>
            <div style={Bottom}  className="container">
                <button onClick={changeColor}>Cambia color</button>
                <h1>Contador:{contador}</h1>
            </div>
        </>
    )
}

export default Hooks
