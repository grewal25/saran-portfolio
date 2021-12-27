import Footer from "../../component/Footer/Footer";
import "./Blog.css";

export default function Blog() {
  return (
    <div >

      <div className=" hidden md:block">
      <div className="flex flex-col items-center pb-12">
        
          {/* <img src="/penguin.svg" /> */}
          <p className="font-bold text-2xl text-center pt-8">Here is the list of all tech and non-tech blogs </p>
        
      </div>

    <div className="flex-col md:flex justify-evenly px-4 md:px-24 md:gap-x-32">
      
      <div>
        <p className="font-bold text-2xl">Productivity</p>
        <div className="border-b-2 border-gray-200 py-3">
         <a href="./productivity">how to type faste: 8 actionable tips
        to increase your typing speed</a>
        </div>
        <div className="border-b-2 border-gray-200 py-3">how to stay focused</div>
        <div className="border-b-2 border-gray-200 py-3">time management skills</div>
      </div>
      <div>
        <p className="font-bold text-2xl">History</p>
        <div className="border-b-2 border-gray-200 py-3">how to type faste: 8 actionable tips
        to increase your typing speed</div>
        <div className="border-b-2 border-gray-200 py-3">how to stay focused</div>
        <div className="border-b-2 border-gray-200 py-3">time management skills</div>
      </div>
    </div>

    <div className="flex-col md:flex justify-evenly px-24 gap-x-32 pt-12">
      <div>
        <p className="font-bold text-2xl">Productivity</p>
        <div className="border-b-2 border-gray-200 py-3">how to type faste: 8 actionable tips
        to increase your typing speed</div>
        <div className="border-b-2 border-gray-200 py-3">how to stay focused</div>
        <div className="border-b-2 border-gray-200 py-3">time management skills</div>
      </div>
      <div className=" pt-4">
        <p className="font-bold text-2xl">History</p>
        <div className="border-b-2 border-gray-200 py-3">how to type faste: 8 actionable tips
        to increase your typing speed</div>
        <div className="border-b-2 border-gray-200 py-3">how to stay focused</div>
        <div className="border-b-2 border-gray-200 py-3">time management skills</div>
      </div>
    </div>
    </div>
    <div className="hidden md:visible md:flex justify-evenly md:pt-12 gap-x-12 px-12 md:px-6 xl:px-64 2xl:px-96">
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
                <a href=""> Basics of JavaScript</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Primitives and objects</a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Functions and Classes </a>
                </li>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href=""> Async Programming</a>
                </li>
              </div>
            </div>
            <div className="mt-4 py-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
              <p className="font-bold text-center md:text-left md:px-2">
                <a href=""> React</a>
              </p>
              <div>
                <li className="text-center md:text-left list-disc list-inside underline p-2">
                  <a href="">Manage state in React</a>
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

    {/* card section for mobile only  */}

    <div className="md:flex justify-evenly pb-12 sm:pt-12 md:pt-24 md:px-6 lg:px-6 xl:px-64 xl:mx-0 md:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
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
    <div className="md:hidden">
      <div className="md:flex justify-evenly pb-12 sm:pt-12 md:pt-24 md:px-6 lg:px-6 xl:px-64 xl:mx-0 md:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
            <div className="px-8 font-bold text-3xl"><h3>Writing</h3></div>
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex ">
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
              <div className="flex ">
              <img src="/planner-banner.jpeg" style={{ height: 179, width: 369}} />
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
            <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
              <div className="flex ">
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

      </div>
<Footer />
    </div>
  );
}
