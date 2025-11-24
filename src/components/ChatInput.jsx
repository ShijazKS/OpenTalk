"use client";

import { useState, useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;

    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  }, [text]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) return;
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-0 w-full px-4 pb-4 flex justify-center ">
      {/* Outer wrapper */}
      <div
        className="
          w-full md:w-[85%] lg:w-[55%]
          border border-[#b669e25a]
          rounded-xl shadow-lg
          flex items-end gap-3 px-4 py-2
        "
      >
       <textarea
  ref={textareaRef}
  rows={1}
  placeholder="Message..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={handleKeyDown}
  className="
    flex-1 bg-transparent text-white placeholder-gray-400
    focus:outline-none text-[15px]
    leading-[1.3]
    resize-none 
    overflow-y-auto scrollbar-none
    max-h-40
    mb-3
  "
/>

        {/* SEND BTN */}
        <button
          onClick={send}
          className="
            h-11 w-11 flex items-center justify-center rounded-xl
            bg-gradient-to-tr from-[#1a1f3c] via-[#3b2f74] to-[#1a1f3c]
            hover:opacity-80 active:scale-95 cursor-pointer
            transition-all shadow-md
          "
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
