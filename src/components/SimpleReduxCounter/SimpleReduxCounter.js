import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/reducer';

const SimpleReduxCounter = () => {
  const count = useSelector(state => state?.count);
  // Use useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default SimpleReduxCounter;
