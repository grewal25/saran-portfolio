import Sidebar from "../../component/Sidebar/Sidebar";
import Django from "../../Content/Django/Django";
import JavaScipt from "../../Content/JavaScript/JavaScript";
import ReactJS from "../../Content/ReactJS/ReactJS";
import "./Blog.css";

export default function Blog() {
  const thisIsMyCopy =
    "<body><h1>Hey it is a test page</h1><p>It is the first paragraph</p><p>It is the second paragraph</p></body>";
 
  return (
    <div>
      <div className="top-level">
        {/* <div className="side-bar"><Sidebar /></div> */}
        <div className="top-level-up"> <h1>HTML CSS Tutorials</h1></div>
       <p>The first example code:</p>
       <pre>{thisIsMyCopy}</pre>
       <div className="code">
       
       </div>
       

        <div className="blog-main"></div>

      </div>
    </div>
  );
}
