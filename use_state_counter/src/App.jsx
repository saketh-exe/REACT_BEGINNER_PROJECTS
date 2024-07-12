import { useState } from 'react'
import './App.css'

function App() {

   let [value,setvalue] = useState(0)
    
  return (
    <>
      <div>{value}</div>
      <button onClick={() => setvalue(val=> val+1)}>ADD</button>
      <button onClick={() => setvalue(val => val-1)}>SUBTRACT</button>
    </>
  )
}

export default App
