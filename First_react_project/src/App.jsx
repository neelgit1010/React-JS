import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
   if(count < 20) setCount(count+1)
  }
  const removeValue = () => {
    if(count > 0) setCount(count-1)
   }
  
  return (
    <>
      <h1>Beginning the React journey</h1>
      <button onClick={addValue}>Use counter</button>
      <button onClick={removeValue}>Remove count</button>
      <p>Counter current state : {count}</p>
      <br />
      <p>Counter state: {count}</p>
    </>
  )
}

export default App
