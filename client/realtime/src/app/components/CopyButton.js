import React, { useState } from "react";

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
      className={`bg-green-200 hover:bg-gray-600 text-slate-800 font-semibold py-[5px] px-[5px] rounded  ${copied ? 'opacity-50 cursor-not-allowed' : ''} text-[10px]  ${className}`}
      onClick={!copied ? handleClick : null}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyButton;
