import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [clicked, setClicked] = useState(true);

  console.log("from sidebar", clicked);
  return (
    <div className=" sidebar-title">
        

      <div className="button react-blog">
        <button onClick={() => setClicked(false)}>JavaScipt </button>
      </div>
      <div className="django-blog">
        <button onClick={() => setClicked(false)}>React</button>
      </div>
      <div className="react-blog">
        <button onClick={() => setClicked(false)}>Python </button>
      </div>
      <div className="django-blog">
        <button onClick={() => setClicked(false)}>Django</button>
      </div>
      <div className="react-blog">
        <button onClick={() => setClicked(false)}>Functional Programming</button>
      </div>
      <div className="django-blog">
        <button onClick={() => setClicked(false)}>OOP</button>
      </div>
      <div className="react-blog">
        <button onClick={() => setClicked(false)}>Algorithms </button>
      </div>
     
    </div>
  );
};

export default Sidebar;
