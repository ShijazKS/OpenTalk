import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { ArrowDown } from "lucide-react";

export default function ChatWindow({ messages, username }) {
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Detect scroll position
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    setShowScrollButton(!isAtBottom);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-14 md:pt-16 h-full relative flex flex-col">
      <div
        ref={containerRef}
        className="flex-1 px-6 mb-20 pt-6 space-y-4 overflow-y-auto custom-scrollbar"
      >
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            msg={msg}
            isSent={msg.senderSocketId === username}
          />
        ))}

        <div ref={bottomRef} />
      </div>

      {showScrollButton && (
        <button
          onClick={() =>
            bottomRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="
  fixed bottom-28 left-1/2 -translate-x-1/2 z-40
  bg-[#0f2030] border border-white/10 shadow-lg 
  rounded-full p-3 text-white hover:bg-[#152a40] transition
"
        >
          <ArrowDown size={20} />
        </button>
      )}
    </div>
  );
}
