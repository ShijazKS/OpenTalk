import React from 'react'

const Header = ({username,myroom,userCount}) => {
  return (
    <div className="w-5/6 bg-gray-300  text-sky-950 rounded-lg h-16 mx-6 my-5 px-6 flex items-center justify-between">
        <h1 id="title" className="text-2xl italic font-bold">
          OpenTalk
        </h1>
        <div>
          <h1 id="name" className="text-2xl font-semibold pr-3">
            {username}:{myroom}.{userCount}
          </h1>
        </div>
      </div>
  )
}

export default Header