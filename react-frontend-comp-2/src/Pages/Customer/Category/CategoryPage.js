import React, { useEffect, useState } from "react";
import img1 from "../../Pet_Images/pitbull.jpg";
import img2 from "../../Pet_Images/cat.jpg";
import img3 from "../../Pet_Images/pupp2.jpg";
import img4 from "../../Pet_Images/bird.jpg";
import { ProductDescription } from "./ProductDescription";
import Navbar from "../HeaderFooter/Navbar";
import Footer from "../HeaderFooter/Footer";
import getVisiblepets from "../../../Services/Users/getVisiblepets";
import imgURL from "../../../Services/Apis/imageurl";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  async function fetchData(){
    const response = await getVisiblepets();
    console.log("response", response);
    setData(response.pets);
  }
  
  useEffect(()=>{
    fetchData();
  },[]);


  function viewPopup(id){
    setId(id);
    setShow(true)

  }

  // Number of items to display per page

  return (
    <>
    <Navbar/>
    <div className="mb-[300px]">
      <div className="w-full border-1  h-[17vh] dhamilo"></div>
      <div className=" flex-col mt-5 ">
        <div className="flex mt-5 justify-between gap-5 items-center mx-[120px] my-4">
          <input
            className="bg-[#e0913d6d]  outline-none pl-2 text-white rounded-xl w-[300px] h-[40px] ml-auto"
            type="text"
            placeholder="Search..."
          />
          <div className="relative">
            <select
              className="bg-[#e0913d] outline-none pl-2 text-white rounded-xl w-[150px] h-[40px]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Categories
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zM5 16a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zM15 16a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <ProductDescription id={id} show={show} setShow={setShow} />

        <div className="flex flex-wrap gap-5 my-5 items-center mx-[120px] justify-start">
          {data.map((value, index) => (
            <div
              key={index}
              className="border-2 h-[392px] backgroundImg1 border-[#f2c308] w-[380px] overflow-hidden"
            >
              <div className="relative h-[280px]">
                <div className=" flex flex-col absolute  items-end px-3 justify-center h-full w-full">
                  <div className="z-10 flex flex-col gap-3 text-2xl items-center">
                  <button onClick={() => viewPopup(value.id)}>
                      <i className=" p-1 hover:bg-[#f22a2a] hover:scale-125 bg-[#FF9800] text-white fa-regular fa-eye"></i>
                    </button>
                    <button>
                      <i className="p-1 hover:bg-[#f22a2a] hover:scale-125 bg-[#FF9800] text-white fa-solid fa-cart-plus"></i>
                    </button>
                    <button>
                      <i className="p-1 hover:bg-[#f22a2a] hover:scale-125 bg-[#FF9800] text-white fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
                <img
                  className="h-[395px] w-[650px] transition-transform transform scale-100 hover:scale-105"
                  src={imgURL+value.image_url}
                  alt="img"
                         />
                {/* {popup && <Itempopup onClose={closePopup} />} */}
              </div>
              <div className="flex relative flex-col dhamilo justify-center items-center text-white h-[110px]">
                <h1>{value.name}</h1>
                <div className="mx-4">{/* <img src={line} alt="" /> */}</div>
                <p>RS {value.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CategoryPage;
