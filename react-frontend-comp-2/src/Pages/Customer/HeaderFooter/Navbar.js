import React, { useState } from 'react'
import logo1 from "../../Pet_Images/logo1.png";
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setLogin,setSignup } from '../../../Services/Redux-Service/counterSlice';

function Navbar(props) {

  // const [login , setLogin] = useState(false);
  // const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add logic for handling logout
    console.log('Logout clicked');
    localStorage.removeItem("userId");
    navigate('/');

    // You can redirect to the logout page or perform logout-related actions
  };

  const handleWishlist = () => {
    // Add logic for handling wishlist
    console.log('Wishlist clicked');
    // You can redirect to the wishlist page or perform wishlist-related actions
  };
  


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
            <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className=" fa-solid fa-user "
      >
        
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={handleWishlist}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Wishlist
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div></> : <>
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
