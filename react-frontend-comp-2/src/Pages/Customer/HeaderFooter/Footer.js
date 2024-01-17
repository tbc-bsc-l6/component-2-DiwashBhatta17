import React from "react";
import logo from "../../Pet_Images/logo1.png";
import flag from "../../Pet_Images/puppies_signup_png.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-[#000000] absolute text-white flex flex-col justify-end h-[550px] w-full">
        <img
          className="w-[2000px] sm:top-[90px] lg:top-[200px] xl:top-[47px] relative"
          src={flag}
          alt="logo"
        />

        <div className="flex justify-center">
          <img className="w-[200px]" src={logo} alt="logo" />
        </div>
        <div>
          <hr class="mx-[120px] border-[3px] border-[#FEBB41] flex items-center opacity-100 justify-center" />
        </div>

        <div className="my-5 flex justify-around items-center">
          <div className="flex flex-col gap-4">
            <h1>
              Subscribe to our <br />
              newsletter
            </h1>
            <div>
              <input
                className="h-[30px] outline-none border-b border-[#323131] bg-[#101010]"
                type="text"
                placeholder=" Email"
                name=""
                id=""
              />
              <button className="bg-[#d80b0b] rounded-sm py-[3px] px-3">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          {/* 2nd parts  */}
          <div className="flex flex-col gap-1">
            <a href="#">Services</a>
            <a href="#">Email Marketing</a>
            <a href="#">Campaigns</a>
            <a href="#">Branding</a>
            <a href="#">Offline</a>
          </div>

          {/* 3rd parts */}

          <div className="flex flex-col gap-1">
            <a to="/aboutus">Blog</a>

            <a href="#">Our Story</a>
            <a href="#">Benefits</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
          </div>

          {/* 4th part */}

          <div className="flex flex-col gap-1">
            <a href="#">Help</a>
            <a href="#">FAQs</a>
            <a to="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
