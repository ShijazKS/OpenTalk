import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

const RoomSection = ({ room, setRoom, joinRoom, DisconnectRooms,mode }) => {
  const inp = {
    0: "border-emerald-700 bg-slate-200 placeholder-emerald-950 text-emerald-900 ", //light
    1: "border-emerald-400 bg-slate-900 placeholder-emerald-400 text-emerald-500",//dark
    2: "border-white bg-black placeholder-white text-white",//prime
    3: "border-atheme3 bg-atheme1 placeholder-atheme4 text-atheme4",//prime
  };
  const inpbtn = {
    0: "text-white bg-emerald-700 hover:bg-emerald-900 ", //light
    1: "text-white  bg-emerald-600 hover:bg-emerald-800",//dark
    2: "text-black  bg-white hover:bg-black hover:text-white hover:border hover:border-white",//prime
    3: "text-atheme1 bg-atheme3 hover:bg-atheme4 ",//prime
  };
  const disbtn = {
    0: "border-red-700 bg-slate-200 text-red-700 hover:bg-slate-50 ", //light
    1: "border-red-500 bg-slate-900 text-white hover:text-red-400",//dark
    2: "border-white bg-black text-white hover:bg-white hover:text-black ",//prime
    3: "border-atheme3 bg-atheme1 text-atheme3 hover:bg-atheme2 hover:text-atheme1 ",//prime
  };

  return (
    <div className="flex md:justify-center justify-between w-5/6">
      
      <div id="inp" className="relative ">
        <input
          id="search"
          value={room}
          className={` border-4 block sm:w-full w-[200px] p-4 pl-4 text-xl shadow-lg rounded-xl focus:outline-none font-medium ${inp[mode]}`}
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
          className={`font-bold absolute sm:right-3 sm:bottom-3 right-[-45px] bottom-3  focus:outline-none  rounded-lg text-sm px-4 py-3 ${inpbtn[mode]}`}
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
