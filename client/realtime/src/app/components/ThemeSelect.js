import React, { useState } from "react";
import Theme from "./Theme";

const ThemeSelect = ({ isOpen, closeModal,setMode,mode }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const Submit = () =>{
    setMode(selectedOption);
    localStorage.setItem('theme', selectedOption);
    closeModal();
  }

  if (!isOpen) return null;

  const box = {
    0: "bg-gray-200", //light
    1: "bg-slate-900",//dark
    2: "bg-black",//b/w
    3: "bg-atheme1",//b/w
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className={`p-4 shadow-md rounded-xl bg-white`}>
        <div className=" grid grid-cols-2 gap-4">
        <label
        className={`w-32 h-20 rounded-2xl relative ${
          selectedOption === 0 ? "ring-4 ring-black" : ""
        }`}
      >
        <input
          type="radio"
          name="test"
          value={0}
          checked={selectedOption === 0}
          onChange={() => handleOptionChange(0)}
          className="hidden"
        />
  
        <Theme from="from-slate-200" to="to-slate-200"/>
      </label>
      <label
        className={`w-32 h-20 rounded-2xl relative ${
          selectedOption === 1 ? "ring-4 ring-black" : ""
        }`}
      >
        <input
          type="radio"
          name="test"
          value={1}
          checked={selectedOption === 1}
          onChange={() => handleOptionChange(1)}
          className="hidden"
        />
        <Theme from="from-slate-900" to="to-slate-900"/>
      </label>
      <label
        className={`w-32 h-20 rounded-2xl relative ${
          selectedOption === 2 ? "ring-4 ring-black" : ""
        }`}
      >
        <input
          type="radio"
          name="test"
          value={2}
          checked={selectedOption === 2}
          onChange={() => handleOptionChange(2)}
          className="hidden"
        />
       <Theme from="from-black" to="to-white"/>
      </label>
      <label
        className={`w-32 h-20 rounded-2xl relative ${
          selectedOption === 3 ? "ring-4 ring-black" : ""
        }`}
      >
        <input
          type="radio"
          name="test"
          value={4}
          checked={selectedOption === 3}
          onChange={() => handleOptionChange(3)}
          className="hidden"
        />
      <Theme from="from-atheme3" to="to-atheme4"/>
      </label>
        </div>
        <div className="flex justify-between m-2">
          <button
            className="p-2 mr-1 w-1/2 bg-red-500 rounded-lg text-white font-semibold"
            onClick={closeModal}
          >
            Close
          </button>
          <button className="p-2 ml-1 w-1/2 bg-green-600 rounded-lg text-white font-semibold" onClick={Submit}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;