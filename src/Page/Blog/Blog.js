import "./Blog.css";

export default function Blog() {
  return (
    <div >
      <div className="flex flex-col items-center pb-12">
        
          <img src="/penguin.svg" />
          <p className="font-bold text-4xl">Here is the list of all tech and non-tech blogs </p>
        
      </div>

    <div className="flex justify-evenly px-24 gap-x-32">
      
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

    <div className="flex justify-evenly px-24 gap-x-32 pt-12">
      <div>
        <p className="font-bold text-2xl">Productivity</p>
        <div className="border-b-2 border-gray-200 py-3">how to type faste: 8 actionable tips
        to increase your typing speed</div>
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

    </div>
  );
}
