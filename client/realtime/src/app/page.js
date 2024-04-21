"use client";

import Screen from "./Screen";
import { useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState(0);

  const container = {
    0: "bg-gray-200", //light
    1: "bg-slate-900",//dark
    2: "bg-black",//prime
  };

  return (
    <div className={mode === 1 ? "dark" : mode==2? "prime":""}>
      <main className={`${container[mode]}`}>
        <Screen mode={mode} setMode={setMode} />
      </main>
    </div>
  );
}
