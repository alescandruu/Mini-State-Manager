import React from 'react';
import useStoreState from '../StateManagement/customHook';

function Counter() {
  const [ counter, setCounter ] = useStoreState(0);

  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;