import React from 'react'

const ChatScreen = ({filteredMessagesList}) => {
  return (
    <div
        id="screen"
        className="border-amber-400 bg-yellow-200 dark:border-emerald-300 dark:bg-cyan-950 w-5/6 flex flex-col-reverse border-4 rounded-lg mt-6 p-8 overflow-auto shadow-lg"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className="bg-teal-300 dark:bg-teal-700 dark:text-white md:text-lg max-w-fit p-3 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap shadow-md dark:shadow-xl"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div id='left' className="bg-white dark:bg-fuchsia-800 mr-3 md:mr-10 lg:mr-24 max-w-fit p-3 mb-4 mr-auto rounded-lg break-all whitespace-pre-wrap shadow-md dark:shadow-xl">
                  <h3 className="text-teal-600 dark:text-yellow-200 font-semibold md:text-lg">
                    {messageItem.senderSocketId}
                  </h3>
                  <p className='pl-1 md:text-lg dark:text-white'>{messageItem.message}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ChatScreen