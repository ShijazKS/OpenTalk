import React, { useState } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import ThemeSelect from "./ThemeSelect";

const Footer = ({ mode, setMode }) => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logo = {
    0: "text-slate-800 hover:text-purple-950 ", //light
    1: "text-slate-50 hover:text-purple-500", //dark
    2: "text-slate-50 ", //prime
    3: "text-atheme4 hover:text-atheme3", //prime
  };
  const github = {
    0: "text-slate-800 hover:text-purple-900 ", //light
    1: "text-white hover:text-purple-600", //dark
    2: "text-white ", //prime
    3: "text-atheme4 hover:text-atheme3", //prime
  };
  const setting = {
    0: "text-slate-800 hover:text-purple-900", //light
    1: "text-white hover:text-purple-600", //dark
    2: "text-white", //prime
    3: "text-atheme4 hover:text-atheme3", //prime
  };

  const toggleMode = () => {
    if (mode === 1) {
      setMode(2);
    } else if (mode === 2) {
      setMode(0);
    } else {
      setMode(1);
    }
  };

  return (
    <footer className="select-none fixed w-full px-2 bottom-3 md:bottom-0  md:pb-2 ">
      <div className="foot">
        <a href="https://shijazks.vercel.app">
          <h4 className={`font-serif text-md italic pl-2 ${logo[mode]}`}>
            jazDesign
          </h4>
        </a>
        <div className="flex items-center">
        <button onClick={openModal} className={`mr-2  ${setting[mode]}`}>
        <IoMdSettings className="w-5 h-5 " />
        </button>
          <a href="https://github.com/ShijazKS/OpenTalk" className="svg-link">
          <TbBrandGithubFilled className={` w-4 h-4 ${github[mode]}`} />
          </a>
        </div>
      </div>
      <ThemeSelect isOpen={isOpen} closeModal={closeModal} setMode={setMode} mode={mode}/>
    </footer>
  );
};

export default Footer;
