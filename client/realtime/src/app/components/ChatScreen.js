import React from 'react'

const ChatScreen = ({filteredMessagesList}) => {
  return (  
    <div
        id="screen"
        className=" bg-slate-400 dark:border-slate-500 dark:bg-slate-700 w-5/6 flex flex-col-reverse border-4 rounded-lg mt-6 p-8 overflow-auto shadow-lg"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className="bg-blue-500 rounded-tr-none dark:bg-blue-400  dark:text-slate-950 md:text-lg max-w-fit p-3 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap shadow-md dark:shadow-xl"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div id='left' className="bg-slate-100 rounded-tl-none dark:bg-blue-300  md:mr-10 lg:mr-24 max-w-fit p-3 mb-4 mr-auto rounded-lg break-all whitespace-pre-wrap shadow-md dark:shadow-xl">
                  <h3 className="text-gray-700 dark:text-yellow-200 font-semibold text-sm">
                    {messageItem.senderSocketId}
                  </h3>
                  <p className='pl-2 md:text-lg dark:text-slate-100'>{messageItem.message}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ChatScreen