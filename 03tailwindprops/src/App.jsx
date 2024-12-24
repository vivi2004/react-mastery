import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)
  // let newArr = [ 1,3,4,6,7,7,8];
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Tailwind - Virat - The King </h1>
      <Card username="Virat Kohli" />
      <Card username="Chiku " post='The Celeberity ' />
      <Card username="The GOAT" />
    </>
  )
}

export default App  
