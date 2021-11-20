import "./Home.css";

function Home() {
  return (
    <div>
      <div className="flex justify-evenly pt-12">
      <div className="border-2 border-black">
          <div>
            <h1 className="text-3xl py-4">Hey there...</h1>
            <p>I am Saranjeet, web developer based in Canada.</p>
            <p>On this website, I share my knowledge, experience and tips
              that may help you accelrate your skills especially in front-end domain.
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="w-96 h-48" ></div>
        </div>

      </div>

      <div className="flex justify-evenly pt-12">
            <div className="w-48 h-48 border-2 border-black" >1</div>
            <div className="w-48 h-48 border-2 border-black">2</div>
            <div className="w-48 h-48 border-2 border-black">3</div>
        </div>

        <div className="flex justify-evenly pt-12">
            <div className="w-48 h-48 border-2 border-black" >explore</div>
            <div className="w-48 h-48 border-2 border-black">latest articles</div>
            
        </div>
      
    </div>
  );
}

export default Home;
