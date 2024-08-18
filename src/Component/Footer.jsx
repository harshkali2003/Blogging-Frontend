import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

    <div class="w-screen h-28 grid grid-cols-3 bg-gray-800 rounded-lg content-evenly bottom-0 text-white mt-10">
    <div class="flex justify-center items-center text-xl ">
      <p>BURGER NATION</p>
    </div>
    <div class="grid grid-rows-2 list-none text-white">
      <li >
        <p> <Link to="/about">ABOUT</Link></p>
      </li>
     
      <li>
        <p><Link to="/feedback">FEEDBACK</Link></p>
      </li>
    </div>
    <div class="grid grid-rows-2 list-none text-white">
      <li>PHONE <p>915526373</p></li>
      <li>E-MAIL <p>email@eamil.com</p></li>
    </div>
  </div>

  )
}
