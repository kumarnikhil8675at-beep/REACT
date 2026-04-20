import React, { useState } from 'react'

function App() {
  let [a,b]= useState(false);
  return (
    <div>
    <div className={`size-[90px] bg-red-900 m-[12px] p-[12px] ${a ?"text-white": "text-red-500"}`}>{a ? "hello":"raja jee"}</div>
    
    <button onClick={()=>{b(!a)}} className='size-[50px] bg-zinc-900 rounded-lg text-white ml-[12px] p-[12px]'>click</button>
    </div>
  )
}

export default App

