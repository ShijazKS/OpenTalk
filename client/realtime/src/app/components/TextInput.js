import React from 'react'

const TextInput = ({message,setMessage,sendMessage,username}) => {
  return (
    <div
        id="msg"
        className="bg-gray-400 w-5/6 z-10  overflow-hidden  h-14 mt-6  flex rounded-2xl"
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
          className="bg-slate-300 whitespace-pre-wrap form-control w-5/6 p-3 resize-none text-xl focus:border-bg-white rounded-l-2xl text-slate-900 placeholder-slate-500"
          rows="3"
        ></textarea>
        <button
          onClick={sendMessage}
          className="flex justify-center items-center hover:bg-slate-800 w-1/6 focus:bg-slate-700 bg-slate-500 hover:text-lime-100 rounded-r-lg text-lime-400"
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