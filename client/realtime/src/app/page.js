"use client";

import Screen from "./Screen";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-lime-200 dark:bg-slate-900">
        <Screen darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </div>
  );
}
