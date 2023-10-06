import React from 'react'
import { Link } from 'react-router-dom'
import Box from './Box'

const Home = () => {
  return (
   
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white w-full">
    <h1 className="text-4xl font-extrabold mb-4 animate-pulse">Magic Slide</h1>
     <Link to={"./Playgame"}>
     <button  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-lg shadow-md transition duration-300 transform hover:scale-105">
      Play Now
    </button>
     </Link>
   
  </div>
  )
}

export default Home
