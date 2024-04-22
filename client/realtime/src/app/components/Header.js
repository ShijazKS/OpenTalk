import React from "react";

const Header = ({ username, myroom, userCount, mode, setMode }) => {
  const container = {
    0: "bg-slate-200 text-blue-950 border-sky-700", //light
    1: "bg-slate-900 text-gray-300 border-sky-200", //dark
    2: "bg-black text-white border-white", //b/w
    3: "bg-atheme1 text-atheme4 border-atheme3", //b/w
  };

  return (
    <div
      className={`shadow-lg w-5/6 border-4 rounded-lg h-16 mx-6 my-5 px-4 flex items-center justify-between ${container[mode]}`}
    >
      <h1 id="title" className="text-2xl md:text-3xl italic font-bold">
        OpenTalk
      </h1>
      <div>
        <h1 id="name" className="text-2xl md:text-3xl font-semibold pr-2">
          {username}:{myroom}.{userCount}
        </h1>
      </div>
    </div>
  );
};

export default Header;
