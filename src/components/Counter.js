import {useContext} from 'react'
import {CounterContext} from "../context/CounterContext";

function Counter(){
    const {state, dispatch} = useContext(CounterContext)
    
    return (<div>
        <h4>Counter {state.count}</h4>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    </div>)
}
export default Counter;
