import React from "react";

const Header = ({ username, myroom, userCount, darkMode, setDarkMode }) => {
  return (
    <div className=" text-slate-950  bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-300 shadow-xl w-5/6  rounded-lg h-16 mx-6 my-5 px-4 flex items-center justify-between">
      <button onClick={() => setDarkMode(!darkMode)}>
        <h1 id="title" className="text-2xl md:text-3xl italic font-bold">
          OpenTalk
        </h1>
      </button>
      <div>
        <h1 id="name" className="text-2xl md:text-3xl font-semibold pr-2">
          {username}:{myroom}.{userCount}
        </h1>
      </div>
    </div>
  );
};

export default Header;
