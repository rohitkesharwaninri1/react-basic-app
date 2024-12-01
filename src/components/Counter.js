import React from 'react'
import useCounter from '../customhooks/useCounter';

export default function Counter() {
  const initialState = 10;
  const { handleIncreament, counter, handleClean } = useCounter(initialState);
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={()=>handleIncreament(5)}>Increment</button>
      <button onClick={()=>handleClean()}>Clean</button>
    </div>
  )
}
