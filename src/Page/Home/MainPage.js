import { FiLinkedin, FiGithub } from "react-icons/fi";
import "./Home.css";
export default function MainPage() {
  const publicis = "/publicis.png";
  const bmo = "/images/bmo-1.png";
  const life = "/lifeworks.png";
  return (
    <>
      <div>
        <div className="">
          <div className="h-80 bg-pack-train bg-top bg-no-repeat"></div>
          <div className="">
            <div className="border-solid border-2 border-sky-500 relative bg-white  p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-[750px] -mt-48 rounded-xl shadow-xl mb-12 h-124">
              {/* image component */}
              <div className="flex flex-col">
                <div>
                  <img
                    class="rounded-full h-24 w-24 flex items-center justify-center "
                    src="/images/fear.jpeg"
                    alt=""
                    width="384"
                    height="512"
                  />
                </div>

                <div className="pt-2 antialiased text-gray-500">
                  UX/UI · Developer · Toronto, Canada
                </div>
                <div className="flex pt-2">
                  <div className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl mr-1">
                    JavaScript
                  </div>
                  <div className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl mr-1">
                    React
                  </div>
                  <div className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl mr-1">
                    Front-end
                  </div>
                  <div className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl ">
                    Programming
                  </div>
                </div>
              </div>

              <div>
                <div className="font-extrabold pt-4">Hey there,</div>
                <div className="font-light pt-4">
                  Front-end developer with 3+ years of experience developing resposive dynamic websites.<br></br>
                  Proficient in React, ES6 and Tailwind CSS.
                </div>
                <div className="pt-4 flex">
                  <span className="pr-8">
                    <a href="">
                      <FiLinkedin style={{ fontSize: "26px" }} />
                    </a>
                  </span>
                  <span className="inline">
                    <a href="">
                      <FiGithub style={{ fontSize: "26px" }} />
                    </a>
                  </span>
                </div>
              </div>
              {/* work section */}
              <div className="border-b">
                <div className="font-extrabold pt-4 mt-10">Work</div>
                <div className="font-light pt-4">
                  <div className="flex justify-start">
                    <div className="pt-1">
                      <img src={publicis} width="100%" />
                    </div>
                    <div className="">
                      <div className=" ml-6 pb-4">
                        <div className="font-semibold">Sr. Front-end Developer</div>
                        <div className="text-gray-500  text-sm ">
                          Publicis Sapient
                        </div>
                        <div className="pt-2">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <div className="font-extrabold pt-4 mt-10"></div>
                <div className="font-light pt-4">
                  <div className="flex justify-start">
                    <div className="pt-1">
                      <img src={bmo} width="100%" />
                    </div>
                    <div className="">
                      <div className=" ml-6 pb-4">
                        <div className="font-semibold">Front-end Developer</div>
                        <div className="text-gray-500  text-sm ">
                          Bank of Montreal
                        </div>
                        <div className="pt-2">
                          Worked on the marketing team and building campaign
                          pages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <div className="font-extrabold pt-4 mt-10"></div>
                <div className="font-light pt-4">
                  <div className="flex justify-start">
                    <div className="pt-1">
                      <img src={life} width="100%" />
                    </div>
                    <div className="">
                      <div className=" ml-6 pb-4">
                        <div className="font-semibold">Software Analyst</div>
                        <div className="text-gray-500  text-sm ">
                          LifeWorks
                        </div>
                        <div className="pt-2">
                          Worked on Health Care of Ontario Pension Plan Project
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
