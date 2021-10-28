import { connect } from 'react-redux'
import { increment, decrement } from '../Redux/Actions/CounterActions'
import contador from '../Redux/Reduces/CounterReduces'


const Contador = ({increment, decrement, counter}) => {
    return (
        <>
            <button onClick={increment}>Incrementa</button>
            <button onClick={decrement}>Decrementa</button>
            <h1>{counter}</h1>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        counter:state.contador
    }
}

const mapDisatchToProps=(dispatch)=>{
    return {
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement())
        
    }
}

export default connect(
    mapStateToProps,
    mapDisatchToProps
)(Contador)