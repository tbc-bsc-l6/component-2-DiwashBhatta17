import React, { useState } from 'react'
import logo1 from "../../Pet_Images/logo1.png";
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin,setSignup } from '../../../Services/Redux-Service/counterSlice';

function Navbar(props) {

  // const [login , setLogin] = useState(false);
  // const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  


  return (
   <>
   <Login  setLogin={setLogin}/>
   <Signup setSignup={setSignup}/>
   
   <div className='flex z-10  mt-1 items-center w-full absolute'>
    <div className='flex w-full relative justify-between mx-[140px] mt-1 items-center'>
    <div>
        <img className='w-[200px]' src={logo1} alt="img" />
    </div>
    <div className='flex'>
      <ul className='flex text-white gap-5'>
        <Link to="/">Home</Link>
        <Link to="/categorie" >Categories</Link>
        <Link to="/" onClick={()=>props.onJoinUsClick()}> Sell Your Pet</Link>

        {
               localStorage.getItem("userId") ? <>
            <button
             
              className='fa-solid fa-user'
            >
            </button></> : <>
            <button onClick={()=>dispatch(setSignup(true))} className='border-3 px-3 py-[3px] rounded-full text-[#e7880cd8] bg-[#ffffff] border-[#e7880cd8] font-bold'>Signup</button>
        <button onClick={()=>dispatch(setLogin(true))} className='border-3 px-3 py-[3px] rounded-full bg-[#e7880cd8] font-bold'>Login</button>
     
            </>
            }
        </ul>
    </div>
    </div>
    
   </div>
   </>
   
  )
}

export default Navbar
