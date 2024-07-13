import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(6)
  const [theme, setTheme] = useState('black')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('red')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('black')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>  
    </>
  )
}

export default App;
