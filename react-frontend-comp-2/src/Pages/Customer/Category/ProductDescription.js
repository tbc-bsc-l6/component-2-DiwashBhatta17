import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

export const ProductDescription = (props) => {
  const [data, setData] = useState(
    {
      categoryName: "Nike",
      productName: "Air Jordan 1 Retro High OG",
      price: "200.99",
      rating: 4.5,
      description:
        " Labore aut, delectus expedita a quos, porro voluptatibus doloribus ullam perspiciatis ea molestias suscipit odit inventore natus deleniti reprehenderit quo nisi excepturi!",
    }
    // Add more objects if needed...
  );

  return (props.show)?
    <section className="dhamilo flex z-40 fixed justify-center top-0 left-0 items-center h-screen w-full overflow-hidden">
      <div className=" bg-white w-[860px] flex items-center justify-center max-w-5xl">
        <div className="flex h-full items-center justify-center lg:w-4/">
          <img
            alt="Nike Air Max 21A"
            className="h-[300px] w-full rounded object-cove lg:h-[450px] lg:w-[60%]"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className="mt-6 mr-3 w-full lg:mt-0 lg:w-1/2 lg:pl-10 ">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {data.categoryName}
            </h2>
            <div className="w-full text-right text-2xl">
              {" "}
              <button onClick={()=>props.setShow(false)} className="fa text-right flex items-center fa-xmark"></button>
            </div>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {data.productName}
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  {data.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="mb-2 mt-4 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="ml-auto flex items-center"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                ₹{data.price}
              </span>
              <button
                type="button"
                className="rounded-md bg-[#ed7f08] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Wishlist
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
   : "";
};
