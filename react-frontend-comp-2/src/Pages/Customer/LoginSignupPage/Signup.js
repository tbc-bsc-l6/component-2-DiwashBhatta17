import React from "react";
import img from "../Images/Rectangle 4365.png";
import { useState, useEffect } from "react";
import flag from "../../Pet_Images/puppies.jpg";
import signupService from "../../Services/Login/signupService";
import logo from "../../Pet_Images/puppies.jpg";
import { Spinner } from "@chakra-ui/react";

function Signup(props) {
  const [signupData, setSignupdata] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrormessage] = useState("");
  const [redirectToOTP, setRedirectToOTP] = useState(false);

  const [spinner, setSpinner] = useState(false);

  async function handelClick() {
    if (signupData.name == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.username == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.email == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.phone == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.confirmPassword == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password != signupData.confirmPassword) {
      setErrormessage("Confirm Password does not match with the new password");
    } else {
      const data = {
        customerName: signupData.name,
        username: signupData.username,
        password: signupData.password,
        email: signupData.email,
        phone: signupData.phone,
      };

      try {
        setSpinner(true);
        const response = await signupService(data);
        console.log("response", response);
        setRedirectToOTP(true);
      } catch (error) {
        console.error(error);
      }
    }
    setSignupdata({
      ...signupData,
      name: "",
      username: "",
      password: "",
      email: "",
      phone: "",
      confirmPassword: "",
    });
  }

  useEffect(() => {
    if (redirectToOTP) {
      const timeout = setTimeout(() => {
        setRedirectToOTP(false); // Reset the flag
        props.setSignup(false);
        props.setOtp(true);
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }
  }, [redirectToOTP]);

  function handelChange(event) {
    const { name, value } = event.target;
    setSignupdata({ ...signupData, [name]: value });
  }

  //   function handelRedirect(){
  //     dispatch(setlogin(true));
  //     dispatch(setSignup(false));
  //   }
  return props.signup ? (
    <div className="flex z-40 top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white h-[580px] w-[480px] overflow-hidden flex flex-col ">
        <div className=" h-[100px] border-[#a03636]">
          <img
            className=" relative -top-[480px] w-[600px] h-[600px] "
            src={flag}
            alt=""
          />
        </div>
        <div className="mb-4 flex  pl-4">
          <button onClick={() => props.setSignup(false)}>
            <i className="absolute  top-[150px]   text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className=" justify-end items-center flex-col mt-2 mb-6 flex">
          <img className="w-[50%] pt-[0px]" src={logo} alt="" />
          <div
            className=" text-center  rounded-lg alert-danger mb-  "
            role="alert"
          >
            {errorMessage}
          </div>
          <div className="flex mb-1 ">
            <div className="">
              <label className="text-black mb-1 mt-2">Name</label>
              <br />
              <input
                className="border-[1px] bg-[#ec26336a] w-[90%] rounded-lg  py-1 px-1  border-black"
                type="text"
                placeholder=" Your Name"
                name="name"
                value={signupData.name}
                onChange={handelChange}
              ></input>
            </div>
            <div>
              <label className="text-black mb-1 mt-2">Username</label>
              <br />
              <input
                className="border-[1px] bg-[#ec26336a] w-[90%] py-1 px-1 rounded-lg border-black"
                type="text"
                placeholder=" Your Username"
                name="username"
                value={signupData.username}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="flex mb-1">
            <div className="">
              <label className="text-black  mb-1 mt-2">Email</label>
              <br />
              <input
                className="border-[1px] bg-[#ec26336a] w-[90%] rounded-lg px-1 py-1  border-black"
                type="email"
                placeholder=" domain@gmail.com"
                name="email"
                value={signupData.email}
                onChange={handelChange}
              ></input>
            </div>
            <div>
              <label className="text-black mb-1 mt-2">Phone Number</label>
              <br />
              <input
                className="border-[1px] bg-[#ec26336a] w-[90%] px-1 py-1 rounded-lg border-black"
                type="text"
                placeholder=" (977)-9812346789"
                name="phone"
                value={signupData.phone}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="flex mb-1">
            <div className="">
              <label className="text-black mb-1 mt-2">Password</label>
              <br />
              <input
                className="bg-[#ec26336a] border-[1px] w-[90%] rounded-lg  py-1 px-1 border-black"
                type="password"
                placeholder=" ********"
                name="password"
                value={signupData.password}
                onChange={handelChange}
              ></input>
            </div>
            <div>
              <label className="text-black mb-1 mt-2">Confirm Password</label>
              <br />
              <input
                className="border-[1px] bg-[#ec26336a] w-[90%] py-1 px-1 rounded-lg border-black"
                type="password"
                placeholder=" ********"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="mt-5 text-center w-full ">
            <button
              onClick={handelClick}
              className="mr-[10px] hover:bg-[#5672d7]  bg-[#EC2633] active:bg-[#88b7ed] w-[365px] py-2 rounded-lg text-white "
            >
              Register{" "}
              <p className="absolute -mt-[23px] ml-5">
                {" "}
                {spinner && <Spinner />}
              </p>
            </button>
          </div>
          <div className="flex mt-2 w-[365px] justify-between ">
            <p>Already have an account?</p>
            <a to="#">
              <button className="text-[#2181F1] hover:text-[#4c7bb9]">
                Login?
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Signup;
