import "./Home.css";

function Home() {
  return (
    <div>
      <div>
    <div className=" md:bg-gray-100">
      <div className="px-6 md:flex justify-evenly pt-12 md:px-6 xl:px-64">
        <div className="border-0 border-black">
          <div>
            <div className="flex text-3xl sm:py-2 md:py-4">
              Hey there...
              <img src="/penguinwave.svg" style={{ height: 40, width: 45 }}/>
            </div>
            <p>I am Saranjeet, <span className="text-blue-400 italic font-bold">web developer </span> based in Canada.</p>
            <p className="pb-6 md:pb-0">
              On this website, I share my knowledge, experience and tips that
              may help you accelrate your skills especially in front-end domain.
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="">
            <img src="/photo.jpeg" />
          </div>
        </div>
      </div>

      <div className="md:flex justify-evenly pb-12 sm:pt-12 md:pt-24 md:px-6 lg:px-6 xl:px-64 xl:mx-0 md:gap-x-8 xl:gap-x-16 2xl:gap-x-32">
        <div className="md:bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
          <div className="flex pt-8 md:pt-8 ">
          <div><img src="/rocket.svg" style={{ height: 35, width: 45 }}/></div>
            <div> React</div>
            
            </div>
          <p className="py-8 ">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
        <div className="bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
          <p className="pt-8">CSS</p>
          <p className="pt-8">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
        <div className="bg-white m-6 md:m-0 pt-0 md:pt-0 border-4 border-light-blue-500 border-opacity-100 rounded-xl md:border-2 md:border-gray-100 md:rounded-xl text-center md:shadow-2xl mb-4">
          <p className="pt-8">JavaScript</p>
          <p className="py-8">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
      </div>
      </div>
      </div>

      <div className="md:flex justify-evenly md:pt-12 gap-x-12 px-12 md:px-6 xl:px-64 2xl:px-0">
        <div className=" border-0 border-black">
          <p className="text-3xl"><span className="border-b-4 border-blue-500">Explore</span></p>
          <div className="">
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>

        
          </div>
        </div>
        <div className=" border-0 border-black pt-6 md:pt-0">
          <p className="text-3xl"><span className="border-b-4 border-blue-500">Explore</span></p>
          <div className="">
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>
            <div className="mt-4 pb-4 border-2 border-light-blue-100 border-opacity-100 rounded-md md:bg-gray-100">
            <p className="py-4 font-bold"> Book summaries and Notes</p>
            <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
            </div>

        
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
