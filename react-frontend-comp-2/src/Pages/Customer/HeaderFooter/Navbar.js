import React from 'react'
import logo1 from "../../Pet_Images/logo1.png";

function Navbar() {
  return (
   <>
   <div className='flex z-10  mt-1 items-center w-full absolute'>
    <div className='flex w-full relative justify-between mx-[140px] mt-1 items-center'>
    <div>
        <img className='w-[200px]' src={logo1} alt="img" />
    </div>
    <div className='flex'>
      <ul className='flex text-white gap-5'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Sell Your Pet</a>
        <a href="#">Signup</a>
        <a href="#">Login</a>
      </ul>
    </div>
    </div>
    
   </div>
   </>
   
  )
}

export default Navbar
