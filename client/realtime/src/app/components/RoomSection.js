import React from 'react'

const RoomSection = ({room,setRoom,joinRoom,DisconnectRooms}) => {
  return (
    <div className="flex">
        <div id="inp" className="relative">
          <input
            id="search"
            value={room}
            className="block w-full p-4 pl-4 text-lg border rounded-xl focus:outline-none bg-sky-300 border-emerald-500 placeholder-cyan-950 text-sky-950"
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
            className="text-white absolute right-3 bottom-2.5 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-3 bg-cyan-900 hover:bg-teal-700 focus:ring-teal-800"
          >
            GO!
          </button>
        </div>

        <button
          type="submit"
          onClick={DisconnectRooms}
          className=" hover:bg-rose-800 text-white bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-3 pl-3 py-3 ml-8 text-center focus:ring-pink-950"
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
  )
}

export default RoomSection