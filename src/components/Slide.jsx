import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Slide = ({ finish ,setshow}) => {

  const { gameover, SetGameOver ,score,Setscore,level,Setlevel} = useContext(AppContext);
  const {levelbar ,setlevelbar} = useContext(AppContext);
  const [visible, setVisible] = useState(true);
  const {levelnumber,setlevelnumber} = useContext(AppContext); 
  const [slide,setSlide] = useState(true);
  const [timer, setTimer] = useState(0); // Set the initial timer value to 10 seconds
  const [overLimit, setOverLimit] = useState(900);

  function clickHandler() {
    setVisible(false);
    Setscore((score) => score+1);
    // setTimer(0);
  }

  useEffect(() => {
    if(score == 30){
      
    setOverLimit(800);
      setlevelnumber(2);
     setlevelbar(false);
    setTimeout(() => {
        setlevelbar(true);
      }, 2000);
    //  setlevelbar(true);


      Setlevel("SlideDownLevel2");
    }
    else if(score == 50 ){
      setOverLimit(600);
      setlevelnumber(3);
     setlevelbar(false);
     setTimeout(() => {
         setlevelbar(true);
       }, 2000);
      //  600
      
 
      Setlevel("SlideDownLevel3");
    }
    else if(score == 100 ){
    // 400
    setOverLimit(350);
      setlevelnumber(4);
     setlevelbar(false);
     setTimeout(() => {
         setlevelbar(true);
       }, 2000);
      Setlevel("SlideDownLevel4");
    }
    else if(score == 200 ){
      // 400
      setOverLimit(200);
        setlevelnumber(5);
       setlevelbar(false);
       setTimeout(() => {
           setlevelbar(true);
         }, 2000);
        Setlevel("SlideDownLevel5");
      }
    const intervalId = setInterval(() => {
      if (timer <= 2) {
        setTimer((prevTimer) => prevTimer + 1);
        console.log(timer);
      } else {
        if(visible){
          Setlevel("");
          setshow(false);
          SetGameOver(true);
        }
      }
    }, overLimit); // Decrease the timer every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, [timer, SetGameOver,score]);

  return (
    <div className={`bg-black w-full  py-6 ${level} ${visible ? 'flex' : 'hidden'}`} onClick={clickHandler}></div>
    
  );
};

export default Slide;
