import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color,setcolor] =useState("white  f");

 
  return (
    <>
   
    <div className='h-screen  w-full flex justify-center items-center' style={{backgroundColor:color}}>
<div className='flex justify-center gap-2 px-3 py-2  items-center rounded-md  w-full  '  style={{backgroundColor:color}}>
   

 <button onClick={()=> setcolor("green")} className='bg-green-500'>Green</button>
 <button onClick={()=> setcolor ("blue")} className='bg-blue-600'>Blue</button>
 <button onClick={()=> setcolor ("red")} className='bg-red-500'>Red</button>
 <button onClick={()=> setcolor ("yellow")} className='bg-yellow-500'>Yellow</button>
 <button onClick={()=> setcolor ("purple")} className='bg-purple-700'>Purple</button>
 <button onClick={()=> setcolor ("black")} className='bg-black'>Black</button>
 <button onClick={()=> setcolor ("orange")} className='bg-orange-500'>Orange</button>
 <button onClick={()=> setcolor ("pink")} className='bg-pink-400'>pink</button>
         
</div>
</div>


     
    </>
  )
}

export default App
