import React, { useState } from "react";
import { HiOutlineClipboardCopy,HiClipboardCopy } from "react-icons/hi";

const CopyButton = ({ onClick, className,mode}) => {
  const [copied, setCopied] = useState(false);

  const copy = {
    0: "text-slate-800 ", //light
    1: "text-slate-100", //dark
    2: "text-black", //prime
    3: "text-atheme4", //prime
  };
  const aftercopy = {
    0: "text-emerald-400", //light
    1: "text-slate-100", //dark
    2: "text-black", //prime
    3: "text-atheme1", //prime
  };

  const handleClick = () => {
    onClick();
    setCopied(true);

    // Automatically reset the copied state after 2 seconds 
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      className={`font-semibold  ${copied ? ' cursor-not-allowed' : ''} text-sm  ${className} ${copy[mode]}`}
      onClick={!copied ? handleClick : null}
    >
      {copied ? <HiClipboardCopy className={` ${aftercopy[mode]} `} /> : <HiOutlineClipboardCopy/>}
    </button>
  );
};

export default CopyButton;
