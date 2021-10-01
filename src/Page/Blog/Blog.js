

import Sidebar from '../../component/Sidebar/Sidebar'
import Django from '../../Content/Django/Django'
import JavaScipt from '../../Content/JavaScript/JavaScript'
import ReactJS from '../../Content/ReactJS/ReactJS'
import './Blog.css';


export default function Blog() {
  const thisIsMyCopy = '<body><h1>Hey it is a test page</h1><p>It is the first paragraph</p><p>It is the second paragraph</p></body>'
  return (
    

    <div className="main">
      <h1>Blogs/Tutorials</h1>
      <h3>Python Tutorials</h3>
      <h3>JavaScipt Tutorials</h3>
      <h3>React Tutorials</h3>

      <h2>JavaScipt in DOM</h2>
      <p>JavaScript is the language of the web. If you ever want to feel like working with web pages, you need to learn JavaScript. In this chapter, we will learn how to use JS to manipulate the DOM ( document object model ), DOM is actually a programming interface for web documents [1].</p>

      <div className="code">
      <p>{thisIsMyCopy}</p>
      {thisIsMyCopy}
      </div>






    </div>

  )


  // if (!clicked) {
  //   return <Django />;
  // }
  // return <ReactJS />;




}








// function Blog(clicked) {
//   console.log("from Blog",clicked.)
//   return(
//      <div>
//       <Sidebar  />
//       { clicked ? 
//         <Django  />
//       :
//       <ReactJS />

// }
// </div>

//   );
// }





// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn
//         ? <LogoutButton onClick={this.handleLogoutClick} />
//         : <LoginButton onClick={this.handleLoginClick} />
//       }
//     </div>
//   );
// }





// if(clicked){
//   return <Django />
// }
// return <ReactJS />