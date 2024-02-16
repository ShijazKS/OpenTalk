import React from 'react'

const ChatScreen = ({filteredMessagesList}) => {
  return (
    <div
        id="screen"
        className="w-5/6 border-amber-400 flex flex-col-reverse border-4 bg-yellow-200 rounded-lg mt-6 p-8 overflow-auto shadow-lg"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className="md:text-lg bg-teal-300 max-w-fit p-3 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap shadow-md"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div id='left' className="mr-3 md:mr-10 lg:mr-24 bg-white max-w-fit p-3 mb-4 mr-auto rounded-lg break-all whitespace-pre-wrap shadow-md">
                  <h3 className="font-semibold md:text-lg text-teal-600">
                    {messageItem.senderSocketId}
                  </h3>
                  <p className='pl-1 md:text-lg'>{messageItem.message}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ChatScreen