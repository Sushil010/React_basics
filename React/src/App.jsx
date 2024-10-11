import React, { useState } from 'react'
import Front from './assets/components/Front'

const App = () => {
  const [inputText, setinputText] = useState("")
  return (
    
    <div className='font-af w-screen h-screen bg-slate-700 text-white'>
      
     {/* <h1>TO-DO LIST {inputText}</h1> */}
     <Front setinputText={setinputText}/>
    </div>
  )
}

export default App