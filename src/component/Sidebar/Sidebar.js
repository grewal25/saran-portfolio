import { useState } from "react";
import Django from "../../Content/Django/Django";
import Essays from "../../Content/Essays/Essays";
import "./Sidebar.css";

const Sidebar = () => {
  const [javaScript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);
  const [django, setDjango] = useState(false);
  const [essays, setEssays] = useState(false);

  console.log("from sidebar", javaScript);
  return (
    <div className=" sidebar-title">
        

      <div className="button react-blog">
        <button onClick={() => setJavaScript(!javaScript)}>JavaScipt </button>
      </div>

     {javaScript && <Django />}

     <div className="button react-blog">
        <button onClick={() => setEssays(!essays)}>Essays</button>
        {essays && <Essays />}
      </div>
     
      <div className="django-blog">
        <button onClick={() => setReact(true)}>React</button>
      </div>
      <div className="react-blog">
        <button onClick={() => setPython(true)}>Python </button>
      </div>
      <div className="django-blog">
        <button onClick={() => setDjango(true)}>Django</button>
      </div>




      {/* <div className="react-blog">
        <button onClick={() => setClicked(false)}>Functional Programming</button>
      </div>
      <div className="django-blog">
        <button onClick={() => setClicked(false)}>OOP</button>
      </div>
      <div className="react-blog">
        <button onClick={() => setClicked(false)}>Algorithms </button>
      </div> */}
     
    </div>
  );
};

export default Sidebar;
