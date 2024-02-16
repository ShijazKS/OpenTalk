import React from 'react'

const TextInput = ({message,setMessage,sendMessage,username}) => {
  return (
    <div
        id="msg"
        className="border-slate-700 bg-gray-400 dark:border-slate-300  md:fixed md:bottom-10 border-4 lg:w-1/2 w-5/6 z-10 overflow-hidden h-16 mt-6 flex rounded-xl shadow-2xl"
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
          className="bg-slate-400 text-slate-900 placeholder-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-300 focus:outline-none whitespace-pre-wrap form-control w-5/6 p-3 resize-none text-xl rounded-l-xl"
          rows="3"
        ></textarea>
        <button
          onClick={sendMessage}
          className="text-lime-400 bg-slate-700 hover:text-lime-100 hover:bg-slate-800 dark:text-slate-800 dark:bg-slate-300 dark:hover:text-lime-300 dark:hover:bg-slate-600 flex justify-center items-center w-1/6  rounded-r-lg "
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