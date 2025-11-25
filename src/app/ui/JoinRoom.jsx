"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { IoChatboxOutline } from "react-icons/io5";
import { getSocket } from "@/lib/socket";

import { Skranji } from "next/font/google";

const skranji = Skranji({
  weight: ["400", "700"], // pick weights you need
  subsets: ["latin"],
  display: "swap",
});

export default function JoinRoom({ onJoin, socket }) {
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const [serverLoading, setServerLoading] = useState(true);

  useEffect(() => {
    const warmup = async () => {
      try {
        // await fetch("http://localhost:5000/", {
        //   cache: "no-store",
        // });
        await fetch("https://opentalk-server.onrender.com", {
          cache: "no-store",
        });
      } catch (err) {
        console.error("Server health check failed:", err);
      } finally {
        setServerLoading(false);
      }
    };

    warmup();
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleUserName = (name) => {
      onJoin({ username: name });
    };

    socket.on("user_name", handleUserName);

    socket.on("user_count", (count) => {
      console.log("ChatRoom received user_count:", count);
      onJoin({ userCount: count });
    });
    return () => socket.off("user_name", handleUserName);
  }, [socket]);

  const joinRoom = (e) => {
    e.preventDefault();

    const trimmed = room.trim();
    if (!trimmed) return;

    // frontend validation
    if (!/^[a-zA-Z0-9]+$/.test(trimmed)) {
      setError("Room ID must be alphanumeric only.");
      return;
    }

    setError("");

    // send request to server
    socket.emit("join_room", trimmed, (response) => {
      if (response?.error) {
        setError(response.error);
        return;
      }
      // no error → navigate
      console.log("Attempting to join room:", room);
      onJoin({ roomId: trimmed });
    });
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6b21a8] via-[#9333ea] to-[#4c1d95] text-white shadow-lg mb-4">
            {/* <IoChatboxOutline className="w-8 h-8 text-slate-200" /> */}
            <MessageSquare className="w-8 h-8 text-slate-200" />
          </div>

          <h1
            className={`${skranji.className} text-4xl font-extrabold bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#9333ea]  bg-clip-text text-transparent`}
          >
            OpenTalk
          </h1>

          <p className="text-gray-300 mt-2 text-base">
            Start a chat. No signup, no hassle.
          </p>
        </div>

        <div
          className="bg-gradient-to-br from-[#0d1521] via-[#111a2a] to-[#0b111a]
 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-8 py-8"
        >
          {serverLoading ? (
            <div className="text-center py-3">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#c084fc] to-[#a855f7] bg-clip-text text-transparent">
                Warming up the server...
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                This usually takes{" "}
                <span className="text-gray-300">20–40 seconds</span>.
              </p>

              <div className="mt-4 flex items-center justify-center space-x-1">
                <div className="w-3 h-3 bg-purple-400 rounded animate-[pulse_0.6s_ease-in-out_infinite]"></div>
                <div className="w-3 h-3 bg-purple-500 rounded animate-[pulse_0.6s_ease-in-out_infinite_150ms]"></div>
                <div className="w-3 h-3 bg-purple-600 rounded animate-[pulse_0.6s_ease-in-out_infinite_300ms]"></div>
              </div>

              <p className="text-xs text-gray-500 mt-4 italic">
                Getting things ready for you
              </p>
            </div>
          ) : (
            <form onSubmit={joinRoom} className="space-y-6">
              {/* <label className="text-sm font-medium text-gray-200 sr-only">Room ID</label> */}

              <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Enter room number"
                className="mt-1 w-full h-11 rounded-lg bg-gradient-to-br from-[#0c1118] via-[#111a22] to-[#0c1118]
 border border-white/10 text-white px-3 focus:outline-none focus:ring-2 focus:ring-[#994ce1] placeholder:text-gray-500"
              />

              <button
                type="submit"
                disabled={!room.trim()}
                aria-label="Join Room"
                className="w-full h-11 rounded-lg bg-gradient-to-br from-[#9333ea] to-[#6b21a8]
 text-white font-semibold shadow-lg hover:bg-[#0099bb] disabled:opacity-40 disabled:text-gray-300 transition-colors"
              >
                Join Now!
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 
    ${error ? "max-h-10 opacity-100" : "max-h-0 opacity-0"} `}
              >
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </form>
          )}

          <div className="pt-3 mt-3 border-t border-white/10 text-center">
            <p className="text-xs text-gray-400">
              No authentication required. Just enter a room number and start
              chatting anonymously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
