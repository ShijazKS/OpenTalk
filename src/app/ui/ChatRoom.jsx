"use client";

import { useEffect, useState } from "react";
import { getSocket } from "@/lib/socket";

import ChatHeader from "@/components/ChatHeader";
import ChatWindow from "@/components/ChatWindow";
import ChatInput from "@/components/ChatInput";

export default function ChatRoom({ roomId, username,userCount, onLeave, socket,setMode,mode }) {
  const [count, setCount] = useState(userCount);
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
    if (!socket) return;

    const handleMsg = (msg) => setMessages((prev) => [...prev, msg]);

    socket.on("user_count", (count) => {
      console.log("ChatRoom received user_count:", count);
      setCount(count);
    });
    socket.on("receive_msg", handleMsg);

    return () => {
      socket.off("user_count");
      socket.off("receive_msg");
    };
  }, [socket]);



  const sendMessage = (text) => {
    const message = {
      type: "user",
      message: text,
      senderSocketId: username,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, message]);
    socket.emit("send_msg", message);
  };

  return (
    <div className="h-screen w-full flex flex-col  text-white overflow-hidden">
      <ChatHeader
        roomId={roomId}
        userCount={count}
        username={username}
        onLeave={onLeave}
        setMode={setMode}
        mode={mode}
      />

      <div className=" flex-1 overflow-hidden">
        <ChatWindow messages={messages} username={username} />
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}
