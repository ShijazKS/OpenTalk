import { useState } from "react";
import { Copy, Check } from "lucide-react";

// Utility class merge
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChatMessage({ msg, isSent }) {
  const [copied, setCopied] = useState(false);
  const [localToast, setLocalToast] = useState("");

  const isDark = document.documentElement.dataset.theme === "dark";

const planetGradients = {
  Mercury:  "bg-gradient-to-r from-[#a1a1a1] to-[#6b7280] bg-clip-text text-transparent",   // bright silver → slate
  Venus:    "bg-gradient-to-r from-[#fda4af] to-[#fb7185] bg-clip-text text-transparent", // 🌸 pink → rose (NEW)
  // Earth:    "bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent",   // blue → green (unique!)
  Mars:     "bg-gradient-to-r from-[#ef4444] to-[#b91c1c] bg-clip-text text-transparent",   // bright red → deep red
  Jupiter:  "bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent",   // orange → deep orange
  Saturn:   "bg-gradient-to-r from-[#eab308] to-[#a16207] bg-clip-text text-transparent", // 🌕 gold → brown (NEW)
  Uranus:   "bg-gradient-to-r from-[#2dd4bf] to-[#0ea5e9] bg-clip-text text-transparent",   // teal → sky blue
  Neptune:  "bg-gradient-to-r from-[#6366f1] to-[#4338ca] bg-clip-text text-transparent",   // indigo → deep indigo
  Pluto:    "bg-gradient-to-r from-[#c084fc] to-[#a855f7] bg-clip-text text-transparent",   // lavender → purple
};



const bubbleGradient = planetGradients[msg.senderSocketId] || defaultGradient;



  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(msg.message);
      setCopied(true);

      // local popup message
      setLocalToast("Copied!");
      setTimeout(() => setLocalToast(""), 1800);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setLocalToast("Failed to copy");
      setTimeout(() => setLocalToast(""), 1800);
    }
  };

  function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
      const href = url.startsWith("http") ? url : `https://${url}`;
      return `<a href="${href}" target="_blank" class="text-amber-200 underline break-all">${url}</a>`;
    });
  }

  return (
    <div
      className={cn(
        "flex w-full mb-3 animate-messageIn group lg:px-52 md:px-12",
        isSent ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[70%] md:max-w-[60%]",
          isSent && "items-end flex flex-col"
        )}
      >
        {/* Username */}
        {!isSent && (
          <div className="flex items-center gap-2 mb-1 px-1">
            <span className={`text-xs font-semibold ${bubbleGradient}`} >
              {msg.senderSocketId}
            </span>
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={cn(
            "relative rounded-2xl px-4 py-2.5 shadow-sm transition-all hover:shadow-md break-words",
            isSent
              ? isDark
                ? "bg-gradient-to-br from-[#6128c4] to-[#36038d] rounded-br-xs"
                : "bg-gradient-to-br from-[#6128c4] to-[#36038d] rounded-br-xs"
              : isDark
              ? "bg-gradient-to-br from-[#1a2b3d] to-[#0e1824] rounded-bl-xs"
              : "bg-gradient-to-br from-[#1a2b3d] to-[#0e1824] rounded-bl-xs" // light-mode purple glass
          )}
        >
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={cn(
              "absolute -top-2 -right-2 h-7 w-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
              isSent ? "bg-[#4d18a9]" : "bg-[#132232]"
            )}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>

          <p
            className="text-sm leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: linkify(msg.message) }}
          />

          {/* Timestamp */}
          <span
            className={cn(
              "text-[10px] block mt-1",
              isSent ? "text-white/70" : "text-white/40"
            )}
          >
            {msg.time}
          </span>

          {/* Local popup message */}
          {localToast && (
            <div
              className="
                absolute -bottom-7 left-1/2 -translate-x-1/2
                bg-black/70 text-white text-xs rounded-md px-2 py-1
                animate-fadeInOut pointer-events-none
              "
            >
              {localToast}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
