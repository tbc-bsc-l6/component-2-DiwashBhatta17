import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import welcome from "../../Pet_Images/puppies.jpg";
import logimg from "../../Pet_Images/cat1L.jpg"

import { useDispatch } from "react-redux";

// import {
//   setUserTrue,
//   setAdminTrue,
//   setRestaurantTrue,
//   setLogin,
// } from "../../Services/Redux-Service/counterSlice";
// import { toast } from "react-toastify";

function Login(props) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });
  console.log(loginData);

  const [login , setlogin]= useState(true);

  const [errorMessage, setErrormessage] = useState("");
  //logged in toast
  const [isloggedin, setIsloggedin] = useState(false);

  const loggedin = () => {
    setIsloggedin(true);

    // console.log("Login vaiyoooooo");

    // toast.success("Succesfully logged In.");
    // window.location.reload();
  };

  async function handelClick() {
    if (loginData.username == "") {
      setErrormessage("Username cant be empty!");
    } else if (loginData.password == "") {
      setErrormessage("password cant be empty!");
    } else {
      setErrormessage("");
      // const loginDataApi = {
      //   username: loginData.username,
      //   password: loginData.password,
      // };
      // try {
      //   const response = await loginService(loginDataApi);
      //   console.log(response.user.role);

      //   if (response.user.role === "ROLE_RESTAURANT") {
      //     dispatch(setRestaurantTrue());
      //     localStorage.setItem("restaurantId", response.user.restaurantId);
      //     dispatch(()=>setLogin(false));
      //     navigate("/resturantDashboard");

      //   } else if (response.user.role === "ROLE_CUSTOMER") {
      //     dispatch(setUserTrue());
      //     localStorage.setItem("customerId", response.user.customerId);
      //     navigate("/");

      //   } else if (response.user.role === "ROLE_RIDER") {
      //     localStorage.setItem("riderId", response.user.id);
      //     dispatch(setLogin(false));
      //     navigate("/riderDashboard");

      //   }
        //localStorage.setItem("JWTtoken", response.accessToken);
      // } catch (error) {
      //   console.error(error);
      // }
    }

    loggedin();
  }

  return props.login ? (
    <>
      <div className="flex z-40 top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
        <div className=" bg-[#fff] w-[770px] w-[750px] h-[500px] flex ">
          <div className="text-right ">
            {/* 2nd pat of image  */}

            <img
              className=" h-full w-[480px]"
              src={logimg}
              alt=""
            />
          </div>

          {/* ist one */}
          <div className="justify-center flex-col w-[60%] p-5 flex">
            <div className="mb-4 flex justify-end pt-4">
              <button onClick={() => props.setLogin(false)}>
                <i className="absolute text-right top-[150px]  text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
              </button>
            </div>




            <div className="flex items-center justify-center">
              <h1 className="text-3xl text-[#f18f4e] font-bold">Login</h1>
            </div>

            <div className=" text-center  rounded-lg alert-danger" role="alert">
              {errorMessage}
            </div>

            <div className="h-[300px]">
              <label className="text-black mb-3">Username</label>
              <br />
              <input
                className=" w-full bg-[#e4ab0036] h-[30px] rounded-lg outline-none border-black"
                type="text"
                placeholder="  Your Username"
                name="username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              ></input>
              <br></br>
              <label className="mt-3 mb-3" htmlFor="">
                Password
              </label>
              <br />
              <input
                className="rounded-lg bg-[#e4ab0036] h-[30px] w-full border-t-0  border-black outline-none"
                type="password"
                name="password"
                placeholder=" ******************"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />{" "}
              <br />
              <br />
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    checked={loginData.checkbox} // Use "checked" instead of "value" for checkboxes
                    onChange={(e) =>
                      setLoginData({ ...loginData, checkbox: e.target.checked })
                    }
                  />
                  <p>Remember Me?</p>
                </div>
                <p className="text-[#f18f4e]">
                  <a href="#">Forget Password?</a>
                </p>
              </div>
              <div className="mt-3 text-center w-full ">
                <button
                  onClick={handelClick}
                  className="hover:bg-[#dee963] text-[#f18f4e] active:bg-[#d7b22a] bg-[#f18f4e] w-full py-2 rounded-lg text-white"
                >
                  Login
                </button>
              </div>
              <div className="flex mt-4 justify-between w-[9">
                <p>Don't have an account?</p>

                <button className="text-[#f18f4e]">Register?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  ) : (
    ""
  );
}

export default Login;
