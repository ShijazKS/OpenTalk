"use client";

import React, { useState,useEffect } from "react";
import { useSocket } from "@/providers/SocketProvider";

import ChatRoom from "./ui/ChatRoom";
import JoinRoom from "./ui/JoinRoom";

export default function Page() {

  const socket = useSocket();

  const [session, setSession] = useState({
    roomId: null,
    username: null,
    userCount: 0,
  });

 const [mode, setMode] = useState("dark");

  // load saved mode
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  // apply mode to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = mode;

    localStorage.setItem("theme", mode);
  }, [mode]);

  const handleJoin = (data) => {
    setSession((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleLeave = () => {
    socket.emit("leave_room", session.roomId, (res) => {
      if (res.success) {
        setSession({
          roomId: null,
          username: null,
        });
      }
    });
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("Toggled mode to:", mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen">
      {!session.roomId ? (
        <JoinRoom onJoin={handleJoin} socket={socket} />
      ) : (
        <ChatRoom
          roomId={session.roomId}
          username={session.username}
          userCount={session.userCount}
          onLeave={handleLeave}
          socket={socket}
          setMode={toggleMode}
          mode={mode}
        />
      )}
    </div>
  );
}
