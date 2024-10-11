import React, { useState } from 'react'
import Front from './assets/components/Front'

const App = () => {
  const [inputText, setinputText] = useState("")
  const [Todos, setTodos] = useState([])
  return (
    
    <div className='font-af w-screen h-screen bg-slate-700 text-white'>
      
     
     <Front Todos={Todos} setTodos={setTodos} inputText={inputText} setinputText={setinputText}/>
    </div>
  )
}

export default App