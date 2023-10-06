import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';

const Gameover = () => {
  const {score,Setscore}  = useContext(AppContext);
  return (
    <div className='bg-black text-white absolute text-lg font-bold p-9 flex flex-col items-center justify-center gap-3'>
      <h1>Game Over</h1>
       <p> Your Score {score}</p>
       
       <button className='px-4 py-2 bg-blue-500 rounded-md' onClick={()=>{window.location.href = window.location.href}}> Re-Start </button>
      
    </div>
  )
}

export default Gameover
