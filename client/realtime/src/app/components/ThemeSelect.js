import React, { useState,useEffect } from "react";

const ThemeSelect = ({ isOpen, closeModal, setMode, mode }) => {
  const [selectedOption, setSelectedOption] = useState(mode);


  const handleSelectOption = (value) => {
    setSelectedOption(value);
  };

  const Submit = () => {
    setMode(selectedOption);
    localStorage.setItem("theme", selectedOption);
    closeModal();
  };

  if (!isOpen) return null;

  const box = {
    0: "bg-gray-200 text-blue-950 ", //light
    1: "bg-slate-900 text-gray-300 ", //dark
    2: "bg-black text-white  ", //b/w
    3: "bg-atheme1 text-atheme4 ", //b/w
  };
  const unsel = {
    0: " border-blue-950 ", //light
    1: " border-gray-300", //dark
    2: " border-white", //b/w
    3: " border-atheme4", //b/w
  };
  const sel = {
    0: " text-gray-200 bg-blue-950 border-blue-950", //light
    1: " text-slate-900 bg-gray-300 border-gray-300", //dark
    2: " text-black bg-white border-white", //b/w
    3: " text-atheme1 bg-atheme4 border-atheme4", //b/w
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className={`p-4 select-none shadow-md rounded-xl border ${box[mode]} ${unsel[mode]}`}>
        <div className="flex-col">
          <div
            className={`border-2 h-10 w-[200px] text-center py-2 mb-2 ${
              selectedOption === 0 ? `${sel[mode]}` : `${unsel[mode]}`
            }`}
            onClick={() => handleSelectOption(0)}
          >
            <h2 className="font-bold">Light Mode</h2>
          </div>

          <div
            className={`border-2 h-10 w-[200px] text-center py-2 mb-2 ${
              selectedOption === 1 ? `${sel[mode]}` : `${unsel[mode]}`
            }`}
            onClick={() => handleSelectOption(1)}
          >
            <h2 className="font-bold">Dark Mode</h2>
          </div>

          <div
            className={`border-2 h-10 w-[200px] text-center py-2 mb-2 ${
              selectedOption === 2 ? `${sel[mode]}` : `${unsel[mode]}`
            }`}
            onClick={() => handleSelectOption(2)}
          >
            <h2 className="font-bold">B/W Mode</h2>
          </div>

          <div
            className={`border-2 h-10 w-[200px] text-center py-2 mb-2 ${
              selectedOption === 3 ? `${sel[mode]}` : `${unsel[mode]}`
            }`}
            onClick={() => handleSelectOption(3)}
          >
            <h2 className="font-bold">Choco Mode</h2>
          </div>
         
        </div>
        <div className="flex justify-between mt-2">
          <button
            className="p-2 mr-1 w-1/2 bg-red-700  rounded-lg text-white font-semibold"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="p-2 ml-1 w-1/2 bg-green-700 rounded-lg text-white font-semibold"
            onClick={Submit}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
