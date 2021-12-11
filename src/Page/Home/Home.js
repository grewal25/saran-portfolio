import React, { useState } from 'react'
import Footer from "../../component/Footer/Footer";
import "./Home.css";




function Home() {
  let a = 'invisible'
  let b = 'visible'
  const [show, setShow] = useState(a)
  const [buttonshow, setButtonShow] = useState(b)


  return (
    <div>
      <div>
        <div className=" md:bg-gray-100">
          <div className="px-6 md:flex justify-evenly pt-12 md:px-6 xl:px-64">
            <div className="border-0 border-black">
              <div>
                <div className="flex text-3xl sm:py-2 md:py-4">
                  Hey there...
                  {/* <img src="/penguinwave.svg" style={{ height: 40, width: 45 }}/> */}
                </div>
                <div className="pt-4 md:max-w-xl">
                  <p>
                    I am Saranjeet,{" "}
                    <span className="text-blue-400 italic font-bold">
                      web developer{" "}
                    </span>{" "}
                    based in Canada.
                  </p>
                  <div className="pb-6 md:pb-0">
                    <div className={buttonshow}>
                      <button onClick={() => {setButtonShow(a); setShow(b)}}>
                        Read More
                      </button>
                    </div>

                    <p className={show}>
                      This website is basically my personal repository of my
                      thoughts, lessons, and experience. I tend to write about
                      productivity, research, and obviously front-end dev.
                      However, I am not just limited to these topics only, I
                      think there are a lot of things to explore in the world
                      other than a day job or popular books/topics. So you may
                      find topics I talk about that may not relate anywhere with
                      each other but I think this is what makes it interesting,
                      I tend not to bound myself in just one domain when the
                      quest to human knowledge is limitless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-black">
              <div className="">
                <img src="/photo.jpeg" />
              </div>
            </div>
          </div>

          <div className="md:flex justify-evenly pb-12 sm:pt-12 md:pt-24 md:px-6 lg:px-6 xl:px-64 xl:mx-0 md:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
            <div className="max-w-md md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex pt-8 md:pt-8 ">
                <div>
                  <img src="/rocket.svg" style={{ height: 35, width: 45 }} />
                </div>
                <p className=""> React</p>
              </div>
              <p className="py-8 ">
                Find tutorials on React, functional & class components & state management in Redux.
              </p>
            </div>
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex pt-8 md:pt-8 ">
                <div>
                  <img src="/bomb.svg" style={{ height: 35, width: 45 }} />
                </div>
                <div> JavaScript</div>
              </div>
              <p className="py-8 ">
                Find tutorials on topics like ES6, functional programming &
                async JavaScript
              </p>
            </div>
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex pt-8 md:pt-8 ">
                <div>
                  <img src="/splash.svg" style={{ height: 35, width: 45 }} />
                </div>
                <div> CSS</div>
              </div>
              <p className="py-8 ">
                Find tutorials on React, React Hooks and many more new
                techniques
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-evenly md:pt-12 gap-x-12 px-12 md:px-6 xl:px-64 2xl:px-96">
        <div className=" border-0 border-black">
          <p className="text-3xl">
            <span className="border-b-4 border-blue-500">Writing</span>
          </p>
          <div className="">
            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <div>
                <p className="font-bold text-left ">
                  <a href=""> Book summaries and Notes</a>
                </p>
              </div>

              <div>
                <li className="text-left  underline p-2">
                  <a href=""> Steve Jobs</a>
                </li>
                <li className="text-left  underline p-2">
                  <a href=""> Mind Hacking</a>
                </li>
                <li className="text-left  underline p-2">
                  <a href=""> Hyperfocus</a>
                </li>
              </div>
            </div>
            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> Essays</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">How to swim in the flood of Self-Help advice</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">3 Habits of people with growth mindset</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> High Achievers: Greg McKeown, a case study</a>
                </li>
              </div>
            </div>

            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> Case Study/Research</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">How to swim in the flood of Self-Help advice</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">3 Habits of people with growth mindset</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> High Achievers: Greg McKeown, a case study</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-0 border-black">
          <p className="text-3xl">
            <span className="border-b-4 border-blue-500">Tech</span>
          </p>
          <div className="">
            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> Book summaries and Notes</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Steve Jobs</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Mind Hacking</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Hyperfocus</a>
                </li>
              </div>
            </div>
            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> Essays</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">How to swim in the flood of Self-Help advice</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">3 Habits of people with growth mindset</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> High Achievers: Greg McKeown, a case study</a>
                </li>
              </div>
            </div>

            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> Case Study/Research</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">How to swim in the flood of Self-Help advice</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">3 Habits of people with growth mindset</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> High Achievers: Greg McKeown, a case study</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
