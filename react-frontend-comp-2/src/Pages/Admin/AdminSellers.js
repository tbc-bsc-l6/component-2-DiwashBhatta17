import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AddRestaurantpopup from "./Popups/AddRestaurantpopup";
import axios from "axios";
// import baseURL from "../../Services/Api/api";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminRestaurant() {
  //popup logic
  const [popups, setPopups] = useState(false);
  function handleopenPopup() {
    setPopups(true);
  }

  function handleclosePopup() {
    setPopups(false);
    console.log("Button thichiyo tara kaam vayena.");
  }

  
  const [restaurants, setRestaurants] = useState([]);
  const keysToDisplay = [
    "Id",
    "Seller Name",
    "email",
  ];

  
  return (
    <>
      <AdminHeader />
      <div className="flex justify-end pt-[140px] ">
        <div className="">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            Sellers Lists
          </h1>
          <p>View all your sellers Here </p>
          <h1
            className="border-2 border-[#41c441] bg-[white] ml-[800px] text-[green] rounded-[20px] w-[125px] p-1 hover:cursor-pointer hover:text-white hover:bg-[#41c441]
            "
            onClick={handleopenPopup}
          >
            Add Restaurant
          </h1>
          {popups && <AddRestaurantpopup onClose={handleclosePopup} />}
          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  {keysToDisplay.map((key, index) => (
                    <th key={index} scope="col">
                      {key}
                    </th>
                  ))}
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    {keysToDisplay.map((key, index) => (
                      <td key={index}>{restaurant[key]}</td>
                    ))}
                    <td>
                      <button
                        className="bg-[red] text-[white] w-[60px] hover:bg-[#ff00008f]"
                        // onClick={() => handleDelete(restaurant.restaurantId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
