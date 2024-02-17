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
          className="bg-slate-300 placeholder-slate-800 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:text-gray-300 border-4 block w-full p-4 pl-4 text-xl shadow-xl rounded-xl focus:outline-none"
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
          className="text-slate-50  bg-green-500 hover:bg-green-600 hover:drop-shadow-lg dark:text-slate-50  dark:bg-green-700 dark:hover:bg-green-500  font-bold absolute right-3 bottom-3 focus:outline-none  rounded-lg text-sm px-4 py-3"
        >
          GO!
        </button>
      </div>

      <button
        type="submit"
        onClick={DisconnectRooms}
        className="border-red-800 bg-red-600 text-white hover:bg-red-700 dark:border-red-600 dark:bg-rose-900 dark:text-white dark:hover:bg-red-800  dark:hover:border-red-00 border-4 shadow-xl focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-3 pl-3 py-3 ml-8 text-center"
      >
        <FaPowerOff className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default RoomSection;
