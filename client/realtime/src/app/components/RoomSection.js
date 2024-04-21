import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

const RoomSection = ({ room, setRoom, joinRoom, DisconnectRooms,mode }) => {
  const inp = {
    0: "border-emerald-700 bg-slate-200 placeholder-emerald-950 text-emerald-900 ", //light
    1: "border-emerald-400 bg-slate-900 placeholder-emerald-400 text-emerald-500",//dark
    2: "border-white bg-black placeholder-white text-white",//prime
  };
  const inpbtn = {
    0: "text-white bg-emerald-700 hover:bg-emerald-900 ", //light
    1: "text-white  bg-emerald-600 hover:bg-emerald-800",//dark
    2: "text-black  bg-white hover:bg-black hover:text-white hover:border hover:border-white",//prime
  };
  const disbtn = {
    0: "border-red-700 bg-slate-200 text-red-700 hover:bg-slate-50 ", //light
    1: "border-red-500 bg-slate-900 text-white hover:text-red-400",//dark
    2: "border-white bg-black text-white hover:bg-white hover:text-black ",//prime
  };

  return (
    <div className="flex">
      
      <div id="inp" className="relative ">
        <input
          id="search"
          value={room}
          className={` border-4 block w-full p-4 pl-4 text-xl shadow-lg rounded-xl focus:outline-none font-medium ${inp[mode]}`}
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
          className={`font-bold absolute right-3 bottom-3 focus:outline-none  rounded-lg text-sm px-4 py-3 ${inpbtn[mode]}`}
        >
          GO!
        </button>
      </div>

      <button
        type="submit"
        onClick={DisconnectRooms}
        className={`border-4 shadow-xl focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-3 pl-3 py-3 ml-8 text-center ${disbtn[mode]}`}
      >
        <FaPowerOff className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default RoomSection;
