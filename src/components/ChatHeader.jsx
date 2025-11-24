"use client";

import { LogOut, Sun, Users, Moon } from "lucide-react";
import { Skranji } from "next/font/google";

const skranji = Skranji({
  weight: ["400", "700"], // pick weights you need
  subsets: ["latin"],
  display: "swap",
});

export default function ChatHeader({
  roomId,
  userCount,
  username,
  onLeave,
  setMode,
  mode,
}) {
  return (
    <header
      className="
    fixed top-0 left-0 w-full z-50
    py-3 flex items-center justify-between px-4 md:px-6
    bg-opacity-80 backdrop-blur-md
      "
      style={{
        borderBottom: "1px solid var(--header-border)",
      }}
    >
      {/* LEFT SIDE → two columns */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* COLUMN 1 — Title only */}
        <h1
          className={`${skranji.className} md:text-3xl text-xl  font-bold
           bg-gradient-to-r from-[#b06ef5] via-[#d59cff] to-[#9e5bff] 
  bg-clip-text text-transparent`}
        >
          OpenTalk
        </h1>

        {/* COLUMN 2 — identity block */}
        <div className="flex flex-col leading-tight">
          {/* Row 1 — identity chip */}
          <div
            className="
              flex items-center gap-1 md:gap-2 text-xs px-2 py-0.5 md:py-1 rounded-md
              bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] shadow-md

            "
            style={{
              // background: "var(--chip-bg)",
              border: `1px solid var(--chip-border)`,
              color: "var(--chip-text)",
            }}
          >
            <span className="font-medium">{username}</span>
            <span className="opacity-50">•</span>
            <span className="opacity-90 flex">
              <span className="hidden md:block pr-1">Room</span> {roomId}
            </span>
          </div>

          {/* Row 2 — usercount */}
          <div
            className="flex items-center gap-1 md:gap-2 pt-0.5 md:pt-1 
          text-[10px] md:text-sm px-1 md:px-2"
            style={{ color: "var(--subtext-color)" }}
          >
            <Users size={12} className="opacity-80" />
            <span>{userCount} online</span>
            <span
              className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500 
          shadow-[0_0_6px_rgba(34,197,94,0.9)] ml-1"
            ></span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE CONTROLS */}
      <div className="flex items-center md:gap-8 gap-4">
        {/* THEME TOGGLE
        {mode === "dark" ? (
          <Sun
            onClick={setMode}
            size={34}
            className="py-2 px-2 rounded-md transition cursor-pointer 
      hover:bg-[#fbbf24] hover:text-black"
          />
        ) : (
          <Moon
            onClick={setMode}
            size={34}
            className="py-2 px-2 rounded-md transition cursor-pointer 
      hover:bg-[#0f172a] hover:text-white"
          />
        )} */}

        {/* LEAVE BUTTON */}
        <button
          onClick={onLeave}
          className="
        flex items-center gap-1 md:gap-2 px-2 py-2 md:px-4 md:py-1.5
         text-white text-xs md:text-sm rounded-lg
         bg-gradient-to-br from-[#dc2626] to-[#7f1d1d]
         hover:opacity-80 transition-all active:scale-95 cursor-pointer
      "
        >
          <LogOut size={14} className="md:hidden" />
          <LogOut size={15} className="hidden md:block" />
          <span className="hidden md:block">Leave</span>
        </button>
      </div>
    </header>
  );
}
