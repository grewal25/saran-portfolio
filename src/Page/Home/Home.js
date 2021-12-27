import React, { useState } from "react";
import Footer from "../../component/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="flex lex-col items-center justify-center h-64 md:h-64 lg:h-80 md:max-w-4xl m-auto text-center">
        <div>
          <h1 className="text-2xl">
            “The secret of happiness, you see, is not found in seeking more, but
            in developing the capacity to enjoy less.”
          </h1>
          <p className="pl-4 pt-3">Socrates</p>
        </div>
      </div>

      <div className="hidden lg:block bg-blue-0 max-w-7xl m-auto pt-8">
        <div className="flex justify-evenly ">
          <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Development</h1>
                </div>
              </div>
            </a>
          </div>
          <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Writing</h1>
                </div>
              </div>
            </a>
          </div>
        </div>

        
      </div>

      <div className="hidden md:block lg:hidden max-w-7xl m-auto ">
        <div className="flex flex-col items-center gap-y-12 px-6">
        <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Development</h1>
                </div>
              </div>
            </a>
          </div>
          <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Technology</h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden bg-red-50 max-w-7xl m-auto ">
        <div className="flex flex-col items-center gap-y-3 px-6">
        <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Development</h1>
                </div>
              </div>
            </a>
          </div>
          <div className="w-96 h-72 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
            <a href="" className="bg-indigo-500">
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h1 className="text-6xl">Writing</h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex md:flex-col justify-center gap-x-3">
      <div className="text-center text-4xl py-4">
        
      </div>

      <div className=" py-4">
        <div className="md:w-96 xl:w-96 h-auto ">
          <a href="">
          <img src="/writing-banner.jpeg" style={{ height: 164, width: 400}} />
          </a>
        </div>
        <div className="md:w-96 xl:w-96 h-auto">
          <div className="flex justify-center items-center py-12 border-4 rounded-md border-purple-100">
            <div><h2 className="text-4xl" >
            <a href="">Tech</a>
            </h2></div>
          </div>
          
        </div>
        
        
      </div>

      <div className=" py-4">
        <div className="md:w-96 xl:w-96 h-auto ">
          <a href="">
          <img src="/writing-banner.jpeg" style={{ height: 164, width: 400}} />
          </a>
        </div>
        <div className="md:w-96 xl:w-96 h-auto">
          <div className="flex justify-center items-center py-12 border-4 rounded-md border-purple-100">
            <div><h2 className="text-4xl" >
            <a href="">Tech</a>
            </h2></div>
          </div>
          
        </div>
        
        
      </div>

      <div className=" py-4">
        <div className="md:w-96 xl:w-96 h-auto ">
          <a href="">
          <img src="/deep-banner.jpeg" style={{ height: 164, width: 400}} />
          </a>
        </div>
        <div className="md:w-96 xl:w-96 h-auto">
          <div className="flex justify-center items-center py-12 border-4 rounded-md border-purple-100">
            <div><h2 className="text-4xl" >
            <a href="">Writing</a>
            </h2></div>
          </div>
          
        </div>
        
        
      </div>
      </div> */}

      {/* card section for mobile only  */}

      {/* <div className="">
      <div className="flex flex-col md:gap-y-3 lg:flex lg:flex-row justify-around pb-12 sm:pt-12 md:pt-24 md:px-6 lg:px-6 xl:px-64 xl:mx-0 md:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
            <div className="px-8 font-bold text-3xl"></div>
            <div className=" md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex md:justify-center">
              <img src="/writing-banner.jpeg" style={{ height: 179, width: 369}} />
                <div>
                  
                </div>
                <p className=""></p>
              </div>
              <div className="py-8">
              <a className="py-8 " href="">
                Find essays on tech, philosophy, biographies and science.
              </a>
              </div>
              
            </div>
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex md:justify-center">
              <img src="/writing-banner.jpeg" style={{ height: 179, width: 369}} />
                <div>
                  
                </div>
                <p className=""></p>
              </div>
              <div className="py-8">
              <a className="py-8 " href="">
                Note taking practice, work flow and writing tips.
              </a>
              </div>
              
            </div>
            <div className=" md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex md:justify-center">
              <img src="/deep-banner.jpeg" style={{ height: 179, width: 369}} />
                <div>
                  
                </div>
                <p className=""></p>
              </div>
              <div className="py-8">
              <a className="py-8 " href="">
                Notes on self-help, deep work, focus and growth mindset.
              </a>
              </div>
              
            </div>
          </div>

      </div> */}
    </div>
  );
}

export default Home;
