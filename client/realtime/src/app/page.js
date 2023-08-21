'use client';

import io from "socket.io-client";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const socket = io.connect("http://localhost:3001");
//const socket = io.connect("https://nexus-backend-silk.vercel.app/");

export default function Home() {

  const [room, setRoom] = useState("");  // input room
  const [message, setMessage] = useState(""); //input message
  const [messagesList, setMessagesList] = useState([]); // Receiving messages 
  const [username, setUsername] = useState(""); //username
  const [myroom, setMyroom] = useState("");  // current room



  const sendDataToServer = (data) => {
    socket.emit("data_from_client", data);
  };
  
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room",room);
      setMyroom(room);
      sendDataToServer("hello world");
    }
  };

  

  const DisconnectRooms = () => {
    socket.disconnect()
    // setMyroom("")
    // setUsername("")
    window.location.reload();
  };

  const sendMessage = () => {
    //socket.emit("send_msg", {message, room});
    socket.emit("send_msg", {
      message,
      room,
      senderSocketId: socket.id // Include the sender's socket.id in the data
  });
  };




  useEffect(() => {
    socket.on("receive_msg", (data) => {
      // Add the new message to the messages list
      setMessagesList((prevMessages) => [
        ...prevMessages,
        { senderSocketId: data.senderSocketId, message: data.message },
      ]);
    });
   // Get the guest name from the server and store it in the state
   socket.on("user_name", (userName) => {
    setUsername(userName);
  });
}, []);

  return (
   <>
   <div className="m-10">
   <input className="px-2 py-1 bg-gray-700 placeholder-white" placeholder="Room Nuber... " onChange={(e) => {
      setRoom(e.target.value);
    }} />
    <button className="px-2 py-1 bg-teal-700 text-white" onClick={joinRoom}>Join</button>
    <input className="px-2 py-1 bg-gray-700 placeholder-white" placeholder="Message... " onChange={(e) => {
      setMessage(e.target.value);
    }} />
    <button className="px-2 py-1 bg-teal-700 text-white" onClick={sendMessage}>Send Message</button>
    <h2>{username}</h2><h3>{myroom}</h3>
    <h1 className="font-bold mt-5 text-2xl">Messages :</h1>
    <ul>
          {messagesList.map((messageItem, index) => (
            <li key={index}>
              <h4 className="font-medium">
                <b>{messageItem.senderSocketId}</b>
              </h4>
              <h6 className="font-medium">
                <i>{messageItem.message}</i>
              </h6>
            </li>
          ))}
        </ul>
        <button className="px-2 py-1 bg-teal-700 text-white" onClick={DisconnectRooms}>Disconnect</button>   
   </div>
   </>
  )
}
