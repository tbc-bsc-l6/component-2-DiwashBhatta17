import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import AddRiderpopup from "./Popups/AddRiderpopup";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Adminrider() {
  //addrider popup logic
  const [riderpopup, setRiderpopup] = useState(false);

  //open popup
  function openPopup() {
    setRiderpopup(true);
  }
  function closePopup() {
    setRiderpopup(false);
  }
  //rendering rider in table
  const [riders, setRiders] = useState([]);
  const keysToDisplay = ["id", "username", "phone"];
  

  //deleting riders
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/riders/delete-rider/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          const updatedRiders = riders.filter((riders) => riders.id !== id);
          setRiders(updatedRiders);
        }
      })
      .catch((error) => {
        console.log("Error deleting riders:", error);
      });
    toast.success("Rider removed.", {
      position: "top-center",
      transition: Flip,
      autoClose: 2000,
    });
  };

  return (
    <>
      <AdminHeader />
      <div className="flex justify-end  pt-[140px] ">
        <div className=" ">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            All Published Items
          </h1>
          <p>View all your all Published pets for sell . </p>
          <button
            className=" ml-[700px] border-[#3cf73cb6]  border-2 w-[110px] rounded-[40px] hover:bg-[#3cf73cb6] hover:text-[white]"
            onClick={openPopup}
          >
            Add Riders
          </button>
          {riderpopup && <AddRiderpopup onClose={closePopup} />}
          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  {keysToDisplay.map((key, index) => (
                    <th key={index} scope="col">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {riders.map((riders, index) => (
                  <tr key={index}>
                    {keysToDisplay.map((key, index) => (
                      <td key={index}>{riders[key]}</td>
                    ))}
                    <td>
                      <button
                        className="bg-[red] text-[white] w-[60px] hover:bg-[#ff00008f]"
                        onClick={() => handleDelete(riders.id)}
                      >
                        Remove
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
