

import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar'
import Django from '../../Content/Django/Django'
import JavaScipt from '../../Content/JavaScript/JavaScript'
import ReactJS from '../../Content/ReactJS/ReactJS'
import './Blog.css';


export default function Blog() {
  const file_name = 'test.md'
  const [post, setPost] = useState('')

  useEffect(()=>{
    import(`/Users/saranjeetsingh/Desktop/saran-portfolio/Saranjeet-Portfolio-Website/src/markdown/${file_name}`)
    .then(res => {
      fetch(res.default)
        .then(res => res.text())
      .then(res => setPost(res));
    })
    .catch(err =>console.log(err))
  })
  return (


    <div className="main">
      <Markdown >{post}</Markdown>
     
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