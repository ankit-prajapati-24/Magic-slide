import React, { createContext, useState } from "react"; // Make sure to import React
import App from "../App";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  // Destructuring children from props
 
  const [gameover, SetGameOver] = useState(false); // Declare setLogin before using it
  const [level,Setlevel] = useState("SlideDownLevel1");
  const [score,Setscore] = useState(0);
  const [levelbar ,setlevelbar] = useState(false);
  const [levelnumber,setlevelnumber] = useState(1);
  
  const [flag,setFlag] = useState(true);

  const value = {
  gameover,
  SetGameOver,
  level,
  Setlevel,
  score,
  Setscore,
  flag,
  setFlag,
  setlevelbar,
  levelbar,
  levelnumber,
  setlevelnumber
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
