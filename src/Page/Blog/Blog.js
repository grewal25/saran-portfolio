

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

      <h3>why smart people should vote</h3>
      <p>Generally in a democratic country, voting turns out to remain in 50-60% of the range. In some cases, it can go upto 70-80% but that’s very rare. Now, that makes me very curious. Who doesn’t vote and why?

I think one of the reasons people vote is to make their candidate win and majority of people who don’t vote are those who either can’t vote and a small minority chooses not to vote. And if you ask them why they don’t vote, they may reply
</p>

<ul>
  <li>Candidates are not good
</li>
<li><li>Voting doesn’t change anything
</li>
</li>
<li>Have no time for politics
</li>
<li>Believe in totalitarianism 
</li>
</ul>

<p>50% of voting turn over is scary. It means less and less people are believing in the democratic systems and people living in western democracies have no idea what it looks like to live in a “non-democratic country”.
More and more people opting out of voting will cause people to reduce trust in the democracy and nobody wants to see how a non-democratic country works nor they want to live in that country. 
</p>

<h4>So, how can we improve that?</h4>

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