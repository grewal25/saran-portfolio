
import Sidebar from '../../component/Sidebar/Sidebar'
import Django from '../../Content/Django/Django'
import JavaScipt from '../../Content/JavaScript/JavaScript'
import ReactJS from '../../Content/ReactJS/ReactJS'
import './Blog.css';


export default function Blog (clicked) {

  

  if (!clicked) {
    return <Django />;
  }
  return <ReactJS />;

//   return(
//      <div>
//       <Sidebar  />
//       { clicked ? 
//         <Django onClick={clicked} />
//       :
//       <ReactJS />

// }
// </div>
//   )


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