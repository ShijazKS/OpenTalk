import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const Buyme = () => {
  return (
    <a href="https://buymeacoffee.com/shijazks">
      <div className="fixed bottom-10 z-40 right-2  bg-amber-400  w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
        {/* You can put any content inside the circle */}
        <SiBuymeacoffee className="w-8 h-8" />
      </div>
    </a>
  );
};

export default Buyme;
