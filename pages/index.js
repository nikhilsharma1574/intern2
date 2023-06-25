import Image from 'next/image'
import { Inter } from 'next/font/google'
import connect_now from '../assets/images/connect_now.png'
import React, { useState, useEffect, useRef } from "react";
// import * as THREE from "three";
// import BIRDS from "vanta/dist/vanta.dots.min";
export default function Home() {

  // const [vantaEffect, setVantaEffect] = useState(0);
  //           const vantaRef = useRef(null);
  //           useEffect(() => {
  //           if (!vantaEffect) {
  //               setVantaEffect(
  //               BIRDS({
  //                   el: vantaRef.current,
  //                   mouseControls: true,
  //                   touchControls: true,
  //                   gyroControls: false,
  //                   minHeight: 200.00,
  //                   minWidth: 200.00,
  //                   scale: 1.00,
  //                   scaleMobile: 1.00,
  //                   color: 0xd18444,
  //                   color2: 0xd9d9,
  //                   backgroundColor: 0x6f193d
  //               })
  //               );
  //           }
  //           return () => {
  //               if (vantaEffect) vantaEffect.destroy();
  //           };
  //           }, [vantaEffect]);
const [isvisible,setvisible] = useState(false); 

  return (
    <>
    <div className='flex flex-col'>

    {/* ref={vantaRef} */}
    <div  className=' flex lg:flex-row flex-col justify-center items-center h-calc(100vh - 70px)'>
      <div className='flex h-full w-full justify-center items-center mt-12 lg:mt-0 lg:text-[50px] text-[20px]'>
        <span data-aos="fade-right" className="font-semibold ml-10">
        Empower Your  <span className="text-red-700 font-bold">Career</span> to <br/>with MNC Recruitment Success<br/> Pave Your Path to  <span className="text-red-700 font-bold">Success!!</span>
        </span>
      </div>
      <div className='flex h-full w-full justify-center items-center scale-50 lg:scale-75'>
        <div data-aos="fade-left" className=" relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <Image src={connect_now} className="dark:hidden w-full h-full" alt="" height={400} width={400}/>
              <Image src={connect_now} className="hidden dark:block w-full h-full" alt="" height={400} width={400}/>
          </div>
        </div>
      </div>      
    </div>
    <div className='slide2 flex justify-center items-center'>
      <div> 
      <div className='slide2 flex justify-center flex-col text-center items-center'>
        {/* Banner */}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">We invest in the your future</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Discover limitless career opportunities with our multinational corporation, where talent meets innovation and success knows no boundaries.</p>
          
          <div className='flex gap-3 scale-75 lg:scale-100'>
          <a data-aos="fade-up" href="./form" className="inline-flex animate-bounce items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 ">
              Contact us
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a data-aos="fade-up" href="./search" className="inline-flex animate-bounce items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 ">
              Search MNC's
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          </div>
    </div>
        </div>
        <div>
        </div>
    </div>
    <div className='flex justify-center items-center'>
      <div className='mt-12 p-4' >
      <div className='flex flex-1 pl-6 justify-center items-center text-[10px]' data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ol className="relative border-l border-gray-200 ">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs font-normal leading-none text-black">Step 1</time>
                        <div className='flex items-center'>
                        <Image  src={connect_now} height={20} width={20} alt='Profile pic' className='m-2'/>
                        <h3 className="text-[12px] lg:text-[18px] font-semibold text-black ">SEARCH</h3>
                        </div>
                        <p className="mb-4 text-[10px] font-normal lg:text-[12px] text-black ">Discover new opportunities and growth in the web development field with MNC (Multinational Corporation)</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs font-normal leading-none text-black">Step 2</time>
                        <div className='flex items-center'>
                        <Image  src={connect_now} height={20} width={20} alt='Profile pic' className='m-2'/>
                        <h3 className="text-[12px] font-semibold lg:text-[18px] text-black dark:text-whit">APPLY</h3>
                        </div>
                        <p className="text-[10px] lg:text-[12px] font-normal text-black">Apply and open the doors to new possibilities in web development, seizing opportunities with MNC (Multinational Corporation) placements..</p>
                    </li>
                </ol>
            </div>
      </div>
    </div>
    {/* <Footer/> */}
    </div>
    </>
  )
}
