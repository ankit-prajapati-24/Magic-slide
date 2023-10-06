
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
// // import './BubbleBox.css'; // Import a CSS file for styling

// const Box = () => {
    
//   const { gameover, SetGameOver ,score,Setscore,level,Setlevel} = useContext(AppContext);
//   const {levelbar ,setlevelbar} = useContext(AppContext);
//   const [visible, setVisible] = useState(true);
//   const {levelnumber,setlevelnumber} = useContext(AppContext); 
//   const [slide,setSlide] = useState(true);
//   const [timer, setTimer] = useState(0); // Set the initial timer value to 10 seconds

//   const [burst, setBurst] = useState(false);

//   const handleClick = () => {
//     // setVisible(false);
//     Setscore((score) => score+1);
//     setBurst(true);
//     setTimeout(() => {
//       setBurst(false);
//     }, 1000); // Reset the burst animation after 1 second
//   };

//   useEffect(() => {
//     if(score == 3){
//       setlevelnumber(2);
//      setlevelbar(false);
//     setTimeout(() => {
//         setlevelbar(true);
//       }, 2000);
//     //  setlevelbar(true);


//       Setlevel("SlideDownLevel2");
//     }
//     else if(score == 10 ){
      
//       setlevelnumber(3);
//      setlevelbar(false);
//      setTimeout(() => {
//          setlevelbar(true);
//        }, 2000);
 
//       Setlevel("SlideDownLevel3");
//     }
//     else if(score == 20 ){
    
//       setlevelnumber(4);
//      setlevelbar(false);
//      setTimeout(() => {
//          setlevelbar(true);
//        }, 2000);
//       Setlevel("SlideDownLevel4");
//     }
//     const intervalId = setInterval(() => {
//       if (timer <= 2) {
//         setTimer((prevTimer) => prevTimer + 1);
//         console.log(timer);
//       } else {
//         if(visible){
//           SetGameOver(true);
//         }
//       }
//     }, 900); // Decrease the timer every 1000 milliseconds (1 second)

//     return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
//   }, [timer, SetGameOver,score]);


//   return (
//     <div
//       className={`box ${level}  ${burst ? 'burst' : ''}`}
//       onClick={handleClick}
//     ></div>
//   );
// };

// export default Box;


const Box = () => {
  const [burst, setBurst] = useState(false);
  
  const { gameover, SetGameOver ,score,Setscore,level,Setlevel} = useContext(AppContext);
//   const [slideDown, setSlideDown] = useState(false);
//   setSlideDown(true);

  const handleClick = () => {
    setBurst(true);
    setTimeout(() => {
      setBurst(false);
    }, 1000); // Reset the burst animation after 1 second

};

  return (
    <div
      className={`box ${burst ? 'burst' : ''} ${level} slide-down}`}
      onClick={handleClick}
    ></div>
  );
};

export default Box;
