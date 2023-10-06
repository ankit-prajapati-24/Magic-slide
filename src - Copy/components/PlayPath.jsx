import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Box from './Box';

const PlayPath = ({ color,time }) => {
  const [show ,setshow] = useState(true);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new Slide component to the slides array
      setSlides((prevSlides) => [...prevSlides, <Slide key={prevSlides.length} />]);
    }, time); // Render a new slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`border-r border-white w-[280%] ${color} bg-red-400 border-l h-full`}>
    {
      show? slides.map((slide, index) => (
        <Slide setshow= {setshow}></Slide>
      )) : "" 
    }
    </div>
  );
};

export default PlayPath;
