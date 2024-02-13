import React from 'react'

const ChatScreen = ({filteredMessagesList}) => {
  return (
    <div
        id="screen"
        className="w-5/6 border-amber-300 flex flex-col-reverse border-2 bg-amber-200 rounded-lg mt-6 p-8 overflow-auto"
      >
        <ul>
          {filteredMessagesList.map((messageItem, index) => (
            <li key={index}>
              {messageItem.senderSocketId === "me" ? (
                <div
                  id="right"
                  className=" bg-violet-300 max-w-fit p-3 mb-4 rounded-lg ml-auto break-all whitespace-pre-wrap"
                >
                  <p>{messageItem.message}</p>
                </div>
              ) : (
                <div id='left' className="mr-3 md:mr-10 lg:mr-24 bg-white max-w-fit p-3 mb-4 mr-auto rounded-lg break-all whitespace-pre-wrap">
                  <h3 className="font-semibold text-zinc-600">
                    {messageItem.senderSocketId}
                  </h3>
                  <p>{messageItem.message}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ChatScreen