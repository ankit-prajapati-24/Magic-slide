import React, { useContext, useEffect } from 'react'
import PlayPath from './PlayPath'
import { useState } from 'react'
import Gameover from './Gameover'
import { AppContext } from '../context/AppContext'

const Play = () => {
    const {gameover,SetGameOver} = useContext(AppContext);
    const {levelbar ,setlevelbar} = useContext(AppContext);
    const {score,Setscore,levelnumber,setlevelnumber} = useContext(AppContext); 

    
    useEffect(() => {
       setTimeout(()=>{
         setlevelbar(true);
       },400)
    }, [])
    

  return (
    <div className='flex justify-center  items-center  w-full h-screen border border-white'>
        <PlayPath color=" bg-blue-500  " time="3000"></PlayPath>
        <PlayPath color = "bg-yellow-500" time="5000"></PlayPath>
        <PlayPath color = "bg-slate-500" time="2000"></PlayPath>
        <PlayPath color = "bg-purple-500" time="9000"></PlayPath>
        {gameover?<Gameover></Gameover>:""}
        <div className='text-blue-500  text-3xl top-0 left-[50%]  font-bold absolute '>
          {score}
        </div>
        
        <div className={`bg-gradient-to-r from-green-400 to-blue-500 text-white text-4xl font-semibold rounded-full py-3 px-6 absolute top-1/ left-1/2 transform -translate-x-1/2 ${levelbar ? 'scale-0' : 'scale-100'} transition-all duration-200 shadow-lg`}>
  <p className="text-center">Level {levelnumber}</p>
</div>

    </div>
  )
}

export default Play
