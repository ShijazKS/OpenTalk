"use client";

import Screen from "./Screen";
import { useEffect, useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState(0);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setMode(storedTheme); 
    }else{
      localStorage.setItem('theme', mode);
    }
  
    
  }, [])
  

  const container = {
    0: "bg-gray-200", //light
    1: "bg-slate-900",//dark
    2: "bg-black",//b/w
    3: "bg-atheme1",//b/w
  };

  return (
    <div className={mode === 1 ? "dark" : mode==2? "prime":""}>
      <main className={`${container[mode]}`}>
        <Screen mode={mode} setMode={setMode} />
      </main>
    </div>
  );
}
