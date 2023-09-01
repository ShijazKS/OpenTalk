"use client";
import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://nexus-chat.glitch.me/");

const Screen = () => {
  const [room, setRoom] = useState(""); // input room
  const [message, setMessage] = useState(""); //input message
  const [messagesList, setMessagesList] = useState([]); // Receiving messages
  const [username, setUsername] = useState(""); //username
  const [myroom, setMyroom] = useState(""); // current room

  const sendDataToServer = (data) => {
    socket.emit("data_from_client", data);
  };

  // Filter out empty messages from messagesList
  const filteredMessagesList = messagesList.filter(
    (messageItem) => messageItem.message !== ""
  );

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setMyroom(room);
      //sendDataToServer("hello");
    }
  };

  const DisconnectRooms = () => {
    socket.disconnect();
    // setMyroom("")
    // setUsername("")
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
  }, []);

  return (
    <>
      {/* navbar */}
      <div className="w-5/6 md:bg-slate-300 bg-slate-800 text-slate-200 md:text-slate-800 rounded-lg h-16 mx-6 my-5 px-6 flex items-center justify-between">
        <h1 id="title" className="text-2xl italic font-bold">
          Open Talk
        </h1>
        <h1 id="name" className="text-2xl font-semibold pr-3">
          {username}.{myroom}
        </h1>
      </div>
      {/* room input */}
      <div className="flex">
        <form>
          <div id="inp" className="relative">
            <input
              id="search"
              value={room}
              className="block w-full p-4 pl-4 text-lg text-gray-900 border rounded-lg focus:outline-none focus:border-slate-500 bg-emerald-200 border-emerald-500 placeholder-gray-600 text-yellow-950"
              placeholder="Room No:"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={joinRoom}
              className="text-white absolute right-3 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-3 bg-emerald-600 hover:bg-teal-800 focus:ring-teal-800"
            >
              GO!
            </button>
          </div>
        </form>
        <button
          type="submit"
          onClick={DisconnectRooms}
          className="border bg-red-500 text-white border-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 pl-3 py-3 ml-8 text-center dark:border-red-500 dark:text-white dark:hover:text-white dark:hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* chat screen */}
      <div
        id="screen"
        className="w-5/6 bg-orange-200 flex flex-col-reverse border-2 border-stone-200 rounded-lg mt-10 p-8 overflow-auto"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            // <li key={index}>
            //   {messageItem.senderSocketId === "me" ? (
            //     <div
            //       id="right"
            //       className="bg-green-300 max-w-min min-w-fit p-3 mb-4 rounded-lg ml-auto"
            //     >
            //       <p>{messageItem.message}</p>
            //     </div>
            //   ) : (
            //     // Check if message is not empty before rendering
            //     messageItem.message !== "" && (
            //       <div className="bg-white max-w-min min-w-fit p-3 mb-4 rounded-lg">
            //         <h3 className="font-semibold">
            //           {messageItem.senderSocketId}
            //         </h3>
            //         <p>{messageItem.message}</p>
            //       </div>
            //     )
            //   )}
            // </li>
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className="bg-green-300 max-w-min min-w-fit p-3 mb-4 rounded-lg ml-auto"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div className="bg-white max-w-min min-w-fit p-3 mb-4 rounded-lg">
                  <h3 className="font-semibold">
                    {messageItem.senderSocketId}
                  </h3>
                  {messageItem.type === "file" ? (
                    <div>
                      <a
                        href={messageItem.message}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Download File
                      </a>
                    </div>
                  ) : (
                    <p>{messageItem.message}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* message input */}
      <div
        id="msg"
        className="w-5/6 form-outline overflow-hidden border border-green-500 h-14 mt-10 flex rounded-lg"
      >
        <textarea
          id="msgbox"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="form-control w-5/6 p-3 resize-none text-xl focus:border-bg-white rounded-l-lg"
          rows="3"
        ></textarea>
        <button
          onClick={sendMessage}
          className="flex justify-center items-center bg-green-500 w-1/6 focus:bg-green-700 hover:bg-green-700 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="md:w-8 md:h-8 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Screen;
