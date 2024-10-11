import React from 'react'
import { IoAddSharp } from "react-icons/io5";


const Front = ({inputText, setinputText, Todos, setTodos}) => {

    const inputData=(e)=>{
        setinputText(e.target.value)
    }

    const submitButton=(e)=>{
        e.preventDefault();
        setTodos([
            ...Todos,
            {
                text:inputText,
                completed:false,
                id:Math.random()*1000
            }
        ])
        setinputText("");
    }


  return (
    <div>
        <div className=' h-screen flex gap-2 justify-center items-center'>

            <div className='flex relative'>
                <div  onChange={inputData} className='input'>
                    <input value={inputText} className=' focus:outline-none px-3 pr-[2.5vw] text-2xl border-none text-black w-[30vw] h-[2.5vw]' type="text" placeholder='Enter tasks lists' />
                </div>
                <div onClick={submitButton} className='cursor-pointer text-[1.5vw] top-[50%] right-[0%] -translate-x-[50%] -translate-y-[50%]  absolute text-black'>
                    <IoAddSharp/>
                </div>
            </div>




            <div className='filters text-black'>
                <select className='cursor-pointer text-xl focus:outline-none w-[10vw] h-[2.5vw]' name="todos" id="">
                    <option value="default" disabled selected>Filter by</option>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="remaining">Remaining</option>
                </select>
            </div>
        </div>


    </div>
  )
}

export default Front