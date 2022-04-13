import React from 'react';
import useStoreState from '../StateManagement/customHook';

function Counter() {
  const [ counter, setCounter ] = useStoreState(null);
  console.log(counter);
  const increment = () => {
    setCounter('increment');
  }
  const decrement = () => {
    setCounter('decrement');
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