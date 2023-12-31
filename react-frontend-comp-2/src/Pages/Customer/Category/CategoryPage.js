import React, { useState } from 'react'
import img1 from "../../Pet_Images/pitbull.jpg";
import img2 from "../../Pet_Images/cat.jpg";
import img3 from "../../Pet_Images/pupp2.jpg";
import img4 from "../../Pet_Images/bird.jpg";

function CategoryPage() {


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

 
  return (
    <div className='content h-screen dhamilo'>
  <div className="h-[100vh] flex-col ">
    <div className="flex justify-between items-center mx-[120px] my-4">
      <input className='bg-[#fbfafa41] outline-none pl-2 text-white rounded-xl w-[300px] h-[40px] ml-auto' type="text" placeholder="Search..." />
      <div className="relative">
        <select className="bg-[#fbfafa41] outline-none pl-2 text-white rounded-xl w-[150px] h-[40px]" defaultValue="">
          <option value="" disabled hidden>Categories</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-4 w-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 12a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zM5 16a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zM15 16a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  
    <div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
      {data.map((value, index) => (
        <div
          key={index}
          className="border-2 h-[392px] backgroundImg1 border-[#f2c308] w-[380px] overflow-hidden"
        >
          <div className="relative h-[280px]">
            <img
              className="h-[395px] -z-10 w-[650px] transition-transform transform scale-100 hover:scale-105"
              src={value.link}
              alt="img"
              // onClick={openPopup}
            />
            {/* {popup && <Itempopup onClose={closePopup} />} */}
          </div>
          <div className="flex relative flex-col dhamilo justify-center items-center text-white h-[110px]">
            <h1>{value.name}</h1>
            <div className="mx-4">
              {/* <img src={line} alt="" /> */}
            </div>
            <p>{value.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default CategoryPage;
