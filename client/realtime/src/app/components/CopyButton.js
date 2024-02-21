import React, { useState } from "react";
import { HiOutlineClipboardCopy,HiClipboardCopy } from "react-icons/hi";

const CopyButton = ({ onClick, className}) => {
  const [copied, setCopied] = useState(false);

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
      className={` text-slate-800 dark:text-slate-100 font-semibold  ${copied ? ' cursor-not-allowed' : ''} text-sm  ${className}`}
      onClick={!copied ? handleClick : null}
    >
      {copied ? <HiClipboardCopy className="text-emerald-400" /> : <HiOutlineClipboardCopy/>}
    </button>
  );
};

export default CopyButton;
