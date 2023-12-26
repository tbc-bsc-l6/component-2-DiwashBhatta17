import React, { useState } from 'react'
import logo1 from "../../Pet_Images/logo1.png";
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup';

function Navbar() {

  const [login , setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
   <>
   <Login login={login} setLogin={setLogin}/>
   <Signup signup={signup} setSignup={setSignup}/>
   
   <div className='flex z-10  mt-1 items-center w-full absolute'>
    <div className='flex w-full relative justify-between mx-[140px] mt-1 items-center'>
    <div>
        <img className='w-[200px]' src={logo1} alt="img" />
    </div>
    <div className='flex'>
      <ul className='flex text-white gap-5'>
        <button href="#">Home</button>
        <button href="#">About</button>
        <button href="#">Sell Your Pet</button>
        <button onClick={()=>setSignup(true)} className='border-3 px-3 py-[3px] rounded-full text-[#e7880cd8] bg-[#ffffff] border-[#e7880cd8] font-bold'>Signup</button>
        <button onClick={()=>setLogin(true)} className='border-3 px-3 py-[3px] rounded-full bg-[#e7880cd8] font-bold'>Login</button>
      </ul>
    </div>
    </div>
    
   </div>
   </>
   
  )
}

export default Navbar
