"use client";
import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoomSection from "./components/RoomSection";
import ChatScreen from "./components/ChatScreen";
import TextInput from "./components/TextInput";
import Buyme from "./components/Buyme";

const socket = io.connect("http://localhost:3001");
// const socket = io.connect("https://nexus-chat.glitch.me/");

const Screen = ({ mode, setMode }) => {
  const [room, setRoom] = useState(""); // input room
  const [message, setMessage] = useState(""); //input message
  const [messagesList, setMessagesList] = useState([]); // Receiving messages
  const [username, setUsername] = useState(""); //username
  const [myroom, setMyroom] = useState(""); // current room
  const [userCount, setUserCount] = useState(); // New state for user count

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12:00 am)
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10
    const currentTime = hours + ":" + minutes + " " + ampm;
    return currentTime;
  };

  // Filter out empty messages from messagesList
  const filteredMessagesList = messagesList.filter((messageItem) => {
    // Remove leading and trailing spaces from the message
    const trimmedMessage = messageItem.message.replace(/^\s*|\s*$/g, '');
    // Filter out empty messages after removing leading and trailing spaces
    return trimmedMessage !== "";
  });
  

  const joinRoom = () => {
    if (myroom !== "") {
      socket.disconnect();
    }
    if (room !== "" && room !== myroom) {
      setMessagesList([]);
      socket.emit("join_room", room);
      setMyroom(room);
      setUserCount(0);
      //sendDataToServer("hello");
    }
  };

  const DisconnectRooms = () => {
    socket.disconnect();
    setMyroom("");
    setUsername("");
    window.location.reload();
  };

  const sendMessage = () => {
    //socket.emit("send_msg", {message, room});
    const currentTime = getCurrentTime();
    socket.emit("send_msg", {
      type: "text", // Specify the type as "text"
      message,
      room,
      senderSocketId: socket.id, // Include the sender's socket.id in the data
      time:currentTime
    });
    setMessagesList((prevMessages) => [
      ...prevMessages,
      { senderSocketId: "me", message: message, time:currentTime },
    ]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_msg", (data) => {
      // Add the new text message to the messages list
      setMessagesList((prevMessages) => [
        ...prevMessages,
        { senderSocketId: data.senderSocketId, message: data.message, time:data.time },
      ]);
    });
    // Get the guest name from the server and store it in the state
    socket.on("user_name", (userName) => {
      setUsername(userName);
    });

    // Update the user count when the "user_count" event is received
    socket.on("user_count", (count) => {
      setUserCount(count);
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center lg:px-10 lg:mx-60">
      {/* navbar */}
      <Header username={username} myroom={myroom} userCount={userCount} mode={mode} />

      {/* room input */}
      <RoomSection
        room={room}
        setRoom={setRoom}
        joinRoom={joinRoom}
        DisconnectRooms={DisconnectRooms}
        mode={mode}
      />

      {/* chat screen */}
      {filteredMessagesList.length > 0 && (
      <ChatScreen filteredMessagesList={filteredMessagesList} mode={mode}/>
    )}
      {/* message input */}
      <TextInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        username={username}
        mode={mode}
      />
      <Buyme/>

      <Footer mode={mode} setMode={setMode} />
    </div>
  );
};

export default Screen;
