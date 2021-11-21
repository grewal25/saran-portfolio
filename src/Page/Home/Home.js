import "./Home.css";

function Home() {
  return (
    <div>
    <div className="bg-gray-100">
      <div className="flex justify-evenly pt-12">
        <div className="border-0 border-black">
          <div>
            <h1 className="text-3xl py-4">Hey there...</h1>
            <p>I am Saranjeet, <span className="text-blue-400 italic font-bold">web developer </span> based in Canada.</p>
            <p>
              On this website, I share my knowledge, experience and tips that
              may help you accelrate your skills especially in front-end domain.
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="w-96 h-48"></div>
        </div>
      </div>

      <div className="flex justify-evenly pt-12 px-72 gap-x-8">
        <div className="border-2 border-gray-100 rounded-xl text-center shadow-2xl mb-4">
          <p className="pt-8">React</p>
          <p className="py-8">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
        <div className="border-2 border-gray-100 rounded-xl text-center shadow-2xl mb-4">
          <p className="pt-8">CSS</p>
          <p className="pt-8">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
        <div className="border-2 border-gray-100 rounded-xl text-center shadow-2xl mb-4">
          <p className="pt-8">JavaScript</p>
          <p className="py-8">
            Find tutorials on React, React Hooks and many more new techniques
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center pt-12 gap-x-12">
        <div className=" border-0 border-black">
          <p className="text-3xl"><span className="border-b-4 border-blue-500">Explore</span></p>
          <div>
            <p className="pt-8">Book summaries and Notes</p>
            <div>
              <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
              <div>book 1</div>
              <div>book 1</div>
              <div>book 1</div>
              <div>book 1</div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black">latest articles
        <div>
                Notes, highlights and reviews of my favourite fiction and
                non-fiction books.
              </div>
              <div>book 1</div>
              <div>book 1</div>
              <div>book 1</div>
              <div>book 1</div>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
