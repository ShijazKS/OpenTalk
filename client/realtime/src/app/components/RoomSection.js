import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

const RoomSection = ({ room, setRoom, joinRoom, DisconnectRooms }) => {
  return (
    <div className="flex">
      {/* <button
        type="submit"
        onClick={DisconnectRooms}
        className="border-4 border-red-800  shadow-xl bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-3 pl-3 py-3 md:mr-8 mr-3 text-center focus:ring-pink-950"
      >
        <MdDarkMode className="w-6 h-6 " />
      </button> */}
      <div id="inp" className="relative ">
        <input
          id="search"
          value={room}
          className="border-indigo-900 bg-indigo-400 placeholder-indigo-950 text-black dark:border-violet-600 dark:bg-indigo-950 dark:placeholder-indigo-300 dark:text-gray-300 border-4 block w-full p-4 pl-4 text-xl shadow-xl rounded-xl focus:outline-none"
          placeholder="Room No:"
          autoComplete="off"
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              joinRoom();
            }
          }}
        />
        <button
          type="button"
          onClick={joinRoom}
          className="text-white  bg-indigo-700 hover:bg-indigo-900 dark:text-white  dark:bg-indigo-800 dark:hover:bg-indigo-600  font-bold absolute right-3 bottom-3 focus:outline-none  rounded-lg text-sm px-4 py-3"
        >
          GO!
        </button>
      </div>

      <button
        type="submit"
        onClick={DisconnectRooms}
        className="border-red-800 bg-red-600 text-white hover:bg-red-700 dark:border-red-600 dark:bg-rose-900 dark:text-white dark:hover:bg-red-800 border-4 shadow-xl focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-3 pl-3 py-3 ml-8 text-center"
      >
        <FaPowerOff className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default RoomSection;
