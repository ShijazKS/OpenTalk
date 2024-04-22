import React from 'react'

const TextInput = ({message,setMessage,sendMessage,username,mode}) => {
  
  const container = {
    0: "border-slate-700 bg-slate-700 ", //light
    1: "border-slate-300",//dark
    2: "border-white",//prime
    3: "border-atheme3 bg-atheme3",//prime
  };
  const txtinp = {
    0: "bg-slate-200 text-slate-900 placeholder-slate-800 ", //light
    1: "bg-slate-900 text-slate-100 placeholder-slate-300",//dark
    2: "bg-black text-white placeholder-white",//prime
    3: "bg-atheme1 text-atheme4 placeholder-atheme4",//prime
  };
  const txtbtn = {
    0: "text-lime-100 bg-slate-700 hover:text-lime-400 ", //light
    1: "text-slate-800 bg-slate-300 hover:text-lime-300 hover:bg-slate-800",//dark
    2: "text-black bg-white hover:text-white hover:bg-black hover:border-l",//prime
    3: "text-atheme1 bg-atheme3 hover:bg-atheme2 hover:text-atheme3",//prime
  };
  

  return (
    <div
        id="msg"
        className={` md:fixed md:bottom-10 border-4 lg:w-1/2 w-5/6 z-5 overflow-hidden h-16 mt-6 flex rounded-xl shadow-2xl ${container[mode]}`}
      >
        <textarea
          id="msgbox"
          value={message}
          placeholder="Write a message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          disabled={!username}
          onKeyDown={(e) => {
            if (window.innerWidth > 768) {
              if (e.key === "Enter" && !e.shiftKey) {
                // If Enter is pressed without Shift, send the message
                e.preventDefault(); // Prevents adding a newline
                sendMessage();
              }
            }
          }}
          className={`focus:outline-none whitespace-pre-wrap form-control w-5/6 p-3 resize-none text-xl rounded-l-xl  ${txtinp[mode]}`}
          rows="3"
        ></textarea>
        <button
          onClick={sendMessage}
          className={`flex justify-center items-center w-1/6  rounded-r-lg ${txtbtn[mode]}`}
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
  )
}

export default TextInput