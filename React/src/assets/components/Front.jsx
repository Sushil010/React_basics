import React from 'react'
import { IoAddSharp } from "react-icons/io5";


const Front = ({setinputText}) => {

    const inputData=(e)=>{
        // console.log(e.target.value)
        setinputText(e.target.value)
    }

    const added=()=>{
        console.log("added")
    }


  return (
    <div>
        <div className=' h-screen flex gap-2 justify-center items-center'>

            <div className='flex relative'>
                <div onChange={inputData} className='input'>
                    <input className=' focus:outline-none px-3 pr-[2.5vw] text-2xl border-none text-black w-[30vw] h-[2.5vw]' type="text" placeholder='Enter tasks lists' />
                </div>
                <div onClick={added} className='cursor-pointer text-[1.5vw] top-[50%] right-[0%] -translate-x-[50%] -translate-y-[50%]  absolute text-black'>
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