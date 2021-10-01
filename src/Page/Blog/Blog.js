
import Sidebar from '../../component/Sidebar/Sidebar'
import Django from '../../Content/Django/Django'
import JavaScipt from '../../Content/JavaScript/JavaScript'
import ReactJS from '../../Content/ReactJS/ReactJS'
import './Blog.css';


export default function Blog(clicked) {
  return (

    <div className="main">
      <h1>Blogs/Tutorials</h1>
      <h3>Python Tutorials</h3>
      <h3>JavaScipt Tutorials</h3>
      <h3>React Tutorials</h3>
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