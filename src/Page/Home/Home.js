import React, { useState } from "react";
import Footer from "../../component/Footer/Footer";
import "./Home.css";

function Home() {
  return (

    <div>
      {/* banner section */}
      <div className="flex lex-col items-center justify-center h-64 md:h-64 lg:h-80 md:max-w-4xl m-auto text-center">
        <div>
          <h1 className="text-2xl">
            “The secret of happiness, you see, is not found in seeking more, but
            in developing the capacity to enjoy less.”
          </h1>
          <div className=""><p className="pl-4 pt-3"><span className="bg-yellow-300 p-2">Socrates</span></p></div>
          
        </div>
      </div>

      {/* 2 hover section */}
      <div>
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
      </div>

      {/* Recent Articles... */}
      <div>
      <div className="h-64 md:h-64 lg:h-80 md:max-w-4xl m-auto text-center pt-8 md:pt-12 lg:pt-16 ">
        <div>
          <h1 className="text-3xl">
            Recent Articles
          </h1>
          <div className="pt-12 flex justify-center gap-x-3">
            <div className="underline text-2xl"><a href="./caching">How to boost productivity</a>
              </div>
            <div className="md:pl-4 md:text-xl text-sm hidden md:block">Dec 26, 2021</div>
          </div>
          <div className="pt-4 flex justify-center gap-x-3">
          <div className="underline text-2xl"><a href="./not-to-fear-old-age">Why you shouldn't fear the 30s </a>
              </div>
            <div className="md:pl-4 md:text-xl text-sm hidden md:block">Dec 26, 2021</div>
          </div>
          
        </div>
      </div>






      </div>
    </div>
  );
}

export default Home;
