"use client";
import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoomSection from "./components/RoomSection";
import ChatScreen from "./components/ChatScreen";
import TextInput from "./components/TextInput";

const socket = io.connect("http://localhost:3001");
//const socket = io.connect("https://nexus-chat.glitch.me/");

const Screen = () => {
  const [room, setRoom] = useState(""); // input room
  const [message, setMessage] = useState(""); //input message
  const [messagesList, setMessagesList] = useState([]); // Receiving messages
  const [username, setUsername] = useState(""); //username
  const [myroom, setMyroom] = useState(""); // current room
  const [userCount, setUserCount] = useState(); // New state for user count

  // const sendDataToServer = (data) => {
  //   socket.emit("data_from_client", data);
  // };

  // Filter out empty messages from messagesList
  const filteredMessagesList = messagesList.filter(
    (messageItem) => messageItem.message !== ""
  );

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
    socket.emit("send_msg", {
      type: "text", // Specify the type as "text"
      message,
      room,
      senderSocketId: socket.id, // Include the sender's socket.id in the data
    });
    setMessagesList((prevMessages) => [
      ...prevMessages,
      { senderSocketId: "me", message: message },
    ]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_msg", (data) => {
      // Add the new text message to the messages list
      setMessagesList((prevMessages) => [
        ...prevMessages,
        { senderSocketId: data.senderSocketId, message: data.message },
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
    <>

      {/* navbar */}
      <Header username={username} myroom={myroom} userCount={userCount} />

      {/* room input */}
      <RoomSection
        room={room}
        setRoom={setRoom}
        joinRoom={joinRoom}
        DisconnectRooms={DisconnectRooms}
      />

      {/* chat screen */}
      {/* <div
        id="screen"
        className="w-5/6 border-amber-300 flex flex-col-reverse border-2 bg-amber-200 rounded-lg mt-6 p-8 overflow-auto"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className="bg-violet-300 max-w-min min-w-fit p-3 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div className="bg-white max-w-min min-w-fit p-3 mb-4 rounded-lg break-all whitespace-pre-wrap">
                  <h3 className="font-semibold text-zinc-600">
                    {messageItem.senderSocketId}
                  </h3>
                  <p>{messageItem.message}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div> */}
      <ChatScreen filteredMessagesList={filteredMessagesList} />

      {/* message input */}
      <TextInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        username={username}
      />

      <Footer />
    </>
  );
};

export default Screen;
