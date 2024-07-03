import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter ]= useState(5)      //  react hook 
  // let counter = 5
  const addValue = ()=>{
    // counter = counter +1;
    setCounter(counter+1)
    console.log("Clicked  ", counter);
  }
  const subValue = ()=>{
    // counter = counter +1;
    setCounter(counter-1)
    console.log("Clicked  ", counter);
  }


  return (
    <>
    <h1>React</h1>
    <h3>Counter value : {counter}</h3>
    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={subValue}> decrease value {counter}</button>
    <p>footer: {counter}</p>

      </>
  )
}

export default App
