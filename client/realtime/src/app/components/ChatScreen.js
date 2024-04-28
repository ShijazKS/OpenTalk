import React from "react";
import CopyButton from "./CopyButton";

const ChatScreen = ({ filteredMessagesList, mode }) => {
  const container = {
    0: "border-amber-500 bg-slate-200", //light
    1: "border-amber-300 bg-slate-900", //dark
    2: "border-white bg-black", //prime
    3: "border-atheme3 bg-atheme1", //prime
  };

  const me = {
    0: "bg-emerald-300 text-gray-900 shadow-md ", //light
    1: "text-slate-200 bg-cyan-900 shadow-lg", //dark
    2: "bg-white text-black shadow-lg", //prime
    3: "bg-atheme4 text-atheme1 shadow-lg", //prime
  };

  const time = {
    0: "text-slate-950 ", //light
    1: "text-slate-50", //dark
    2: "text-black", //prime
    3: "text-atheme1", //prime
  };
  const time2 = {
    0: "text-slate-900 ", //light
    1: "text-slate-200", //dark
    2: "text-black", //prime
    3: "text-atheme4", //prime
  };

  const sender = {
    0: "text-teal-700 ", //light
    1: "text-sky-200", //dark
    2: "text-black", //prime
    3: "text-atheme4", //prime
  };

  const other = {
    0: "bg-white shadow-lg", //light
    1: "bg-purple-900  shadow-lg", //dark
    2: "bg-white shadow-lg", //prime
    3: "bg-atheme2 shadow-lg", //prime
  };

  const sndmsg = {
    0: "", //light
    1: "text-slate-100", //dark
    2: "text-black", //prime
    3: "text-atheme4", //prime
  };

  const info = {
    0: "text-slate-800", //light
    1: "text-slate-50", //dark
    2: "text-white", //prime
    3: "text-atheme4", //prime
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div
      id="screen"
      className={`w-5/6 flex flex-col-reverse border-4 rounded-lg mt-6 p-4 sm:p-6 overflow-auto shadow-lg ${container[mode]}`}
    >
      <ul>
        <p className={`italic text-center mb-2 font-light ${info[mode]}`}><span className=" mr-1">(alt+m)</span> to theme option</p>
        {filteredMessagesList.map((messageItem, index) => (
          <li key={index}>
            {messageItem.senderSocketId === "me" ? (
              <div
                id="right"
                className={` md:text-lg max-w-fit min-w-max p-1 py-2 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap relative ${me[mode]} `}
              >
                <p className="mb-1 mr-1 pb-2">{messageItem.message}</p>
                <p className={`time italic absolute bottom-0.5 right-1.40  ${time[mode]}`}>
                  {messageItem.time}
                </p>
              </div>
            ) : (
              <div
                id="left"
                className={` md:mr-10 lg:mr-24 max-w-fit p-3 mb-4 mr-auto rounded-lg break-all whitespace-pre-wrap relative ${other[mode]}`}
              >
                <div className="flex justify-between">
                  <h3 className={`font-semibold text-sm ${sender[mode]}`}>
                    {messageItem.senderSocketId}
                  </h3>
                  <CopyButton
                    className="top-0 left-0 ml-1"
                    onClick={() => copyToClipboard(messageItem.message)}
                    mode={mode}
                  />
                </div>
                <p className={`mb-1 mr-1 md:text-lg  ${sndmsg[mode]}`}>
                  {messageItem.message}
                </p>
                <p className={`time italic absolute bottom-1 right-1 ${time2[mode]}`}>
                  {messageItem.time}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatScreen;
