import { useState } from 'react'

import './App.css'

function App() {

 const [ counter, setCounter] = useState(12);


  const addValue = () => {
   setCounter(counter + 1);  
  }
  const removeValue = () => {
    setCounter(counter -1 );
  }
  return (
    <>
      <h1>Learn React{counter}</h1>
      <h2> Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      > Add value </button> {" "}
      <button
        onClick={removeValue} 
      > Remove value</button>

      <p> footer:{counter}</p>
    </>
  )
}

export default App
    