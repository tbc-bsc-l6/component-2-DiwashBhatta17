import React, { useState } from "react";
// import line from "../../Images/RestroPageImage/line.png";
// import Itempopup from "../ResturentPage/Itempopup";
import img1 from "../../Pet_Images/pitbull.jpg";
import img2 from "../../Pet_Images/cat.jpg";
import img3 from "../../Pet_Images/pupp2.jpg";
import img4 from "../../Pet_Images/bird.jpg";





export default function Landing2ndComp() {
  const [data, setData] = useState([
    {
      link: img1,
      name: "Chaku",
      text: "Manghe Sangaranthi",
    },
    {
      link: img2,
      name: "Qwati",
      text: "Qwati Purney",
    },
    {
      link: img3,
      name: "Samayabaji",
      text: "Indra Jatra",
    },
    {
      link: img4,
      name: "Yomari",
      text: "Yomari Purney",
    },
  ]);


  // Number of items to display per page

  const [popup, setPopup] = useState(false);
  function openPopup() {
    setPopup(true);
  }
  function closePopup() {
    setPopup(false);
  }

  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 >= Math.ceil(data.length / itemsPerPage) ? 0 : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(data.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="middlepart flex flex-col ">
      <div className="banner pt-[20px] border flex justify-center">
        <img src="/Image/banner.gif" alt="banner" className="w-[1100px]" />
      </div>
      {/* Culture and fest food banner */}
      <div className="flex mt-5 mx-[140px] my-5">
        <h1 className="text-3xl font-bold text-[#faa13b]">Features Pet Categories</h1>
      </div>

      {/*images */}

      <div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
        {displayedItems.map((value, index) => (
          <div
            key={index}
            className="border-2 h-[392px]   backgroundImg1 border-[#f2c308] w-[380px] overflow-hidden"
          >

            <div className="relative h-[280px]">
            
              <img
                className="h-[395px] -z-10 w-[650px] transition-transform transform scale-100 hover:scale-105"
                src={value.link}
                alt="img"
                onClick={openPopup}
              />


              {/* {popup && <Itempopup onClose={closePopup} />} */}
            </div>
            <div className=" flex relative flex-col dhamilo justify-center items-center text-white  h-[110px]">
              
              <h1>{value.name}</h1>
              <div className="mx-4">
                {/* <img src={line} alt="" /> */}
              </div>
              <p>{value.text}</p>
            </div>
          </div>
        ))}

       
      </div>

      <div className=" flex justify-center items-center mx-[130px] mt-[-15px] mb-[10px] gap-3">
        <div className="border-2 border-black w-full  "></div>
        <div className="flex justify-center items-center my-4 gap-3 ">
          <button
            className="bg-[#EC2633] px-3 py-1 text-white"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="bg-[#FF9800] px-3 py-1 text-white"
            onClick={handleNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="border-2 border-black w-full"></div>
      </div>
    </div>
  );
}
