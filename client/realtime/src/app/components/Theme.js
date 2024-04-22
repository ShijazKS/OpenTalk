import React from 'react'

const Theme = ({from ,to}) => {
  return (
    <div className="relative w-full h-full rounded-2xl">
        <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-bl ${from} ${to}`}></div>
      </div>
  )
}

export default Theme