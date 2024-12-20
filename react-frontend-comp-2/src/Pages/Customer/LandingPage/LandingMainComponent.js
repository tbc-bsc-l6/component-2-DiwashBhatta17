import React, { useRef } from 'react';
import video from "../../Pet_Images/production_id_4267752 (2160p).mp4";
import logo2 from "../../Pet_Images/logo2.png";
import Landing2ndComp from './Landing2ndComp';
import JoinUs from './JoinUs';
import Navbar from '../HeaderFooter/Navbar';
import Footer from '../HeaderFooter/Footer';

function LandingMainComponent() {
 const joinUsRef = useRef(null);

 const scrollToJoinUs = () => {
  joinUsRef.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <>
    <Navbar onJoinUsClick={scrollToJoinUs}/>
    <div className=' relative h-screen w-full overflow-hidden'>
      <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover -z-10 '>
        <source src={video} type='video/mp4' />
      </video>
      {/* Your content goes here */}
      <div className='content h-screen dhamilo'>
        <div className="h-[100vh] flex-col ">
            <div className="flex flex-col gap-1 items-center justify-center h-full">
                <div className='flex items-center'>
                <input className='bg-[#fbfafa41] outline-none pl-2 text-white rounded-xl w-[640px] h-[40px]' type="text" />
                <i className=' text-[#e77e46] fa fa-search -ml-6'></i>
                </div>
                <p className='text-white'>Search your desire pet through the Awesome pet Store</p>

            </div>

        </div>

        {/* <div className=' flex flex-col mx-[120px] mt-[100px]'>
            <img className='w-[50%]' src={logo2} alt="" />
            <p className='text-white ml-[100px] text-xl -mt-[70px]'>Because every pet deservs the best.</p>
        </div> */}
        {/* Place your other components or content here */}
        {/* Other content */}
      </div>
    </div>
    <Landing2ndComp/>
    <div ref={joinUsRef}><JoinUs /></div>
    <Footer/>
    </>
  );
}

export default LandingMainComponent;
