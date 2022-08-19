import React from 'react';
import useStoreState from '../StateManagement/customHook';
import "../Counter/Counter.css"

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