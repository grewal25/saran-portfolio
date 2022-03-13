import React, { useState } from "react";
import Footer from "../../component/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="pt-16">
      <div className=" md:max-w-3xl  m-auto text-center  ">
        <div className="flex justify-center gap-10">
          <div className="basis-1/2">Hi, I am Saranjeet!!</div>
          <div className="basis-1/4">It's really nice to meet you. I am Front-end developer currently
          living on the internet. I use this website to share my thoughts, my projects and anything
          that comes to my mind basically. </div>
          {/* <div className="border-2">Welcome to the Saran blog</div> */}
        </div>

        {/* mid section */}
        <div className="flex justify-center gap-10 pt-16">
          <div className="">If you are first time visitor</div>
          <div className="">It's really nice to meet you. I am Front-end developer currently
          living on the internet. I use this website to share my thoughts, my projects and anything
          that comes to my mind basically. </div>
          {/* <div className="border-2">Welcome to the Saran blog</div> */}
        </div>
      </div>
      {/* banner section */}
     

      {/* <Footer /> */}
    </div>
  );
}

export default Home;

{
  /* 2 hover section */
}
// <h1 className="text-2xl">
//       “The secret of happiness, you see, is not found in seeking more, but
//       in developing the capacity to enjoy less.”
//     </h1>
//     <div className=""><p className="pl-4 pt-3"><span className="bg-yellow-300 p-2">Socrates</span></p></div>

{
  /* <div>
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

          <div className="block md:hidden lg:hidden max-w-7xl m-auto ">
            <div className="flex flex-col items-center gap-y-3 px-6">
            <div className="w-72 h-48 border-2  rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
                <a href="" className="bg-indigo-500">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div>
                      <h1 className="text-4xl">Development</h1>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-72 h-48 border-2 rounded-3xl bg-black hover:bg-yellow-300 text-white hover:text-black">
                <a href="" className="bg-indigo-500">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div>
                      <h1 className="text-4xl">Writing</h1>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div> */
}
