import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" fixed w-full px-2 bottom-0 md:pb-2 ">
        <div className="foot">
          <a href="https://shijazks.vercel.app">
            <h4 className="text-slate-950 hover:text-indigo-950 dark:text-slate-50 dark:hover:text-purple-500 font-serif text-md italic pl-2">
              jazDesign
            </h4>
          </a>
          <a href="https://github.com/ShijazKS/OpenTalk" className="svg-link">
            <FaGithub className='text-black hover:text-purple-600 dark:text-white w-4 h-4 '/>
          </a>
        </div>
      </footer>
  )
}

export default Footer