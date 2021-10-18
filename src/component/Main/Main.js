import React from "react";
import TopInfo from "../TopInfo/TopInfo";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="top-main">
        <div className="top-info">
          <TopInfo />
        </div>
        <div className="main-bottom">
          <h3>ABOUT ME</h3>
          <p>
            I am a Web Developer currently living in Toronto, Canada. Past 4
            years I have been playing with many web technologies. From Front-end
            framework ReactJS, Angular to Backend Django and Flask. I have a
            Masters degree in Electrical Engineering from University of British
            Columbia. Currently I am working as Front-End Developer in Bank of
            Montreal and on the side am involved in number of projects building
            websites for small and medium sized businesses.
          </p>
          <div className="mid-main">
            <h3>Most Read Tutorials</h3>
            <ul>
               <a href="" ></a>
              <li><a href="" >How to write functional components in React</a></li>
              <li><a href="" >Fundamentals of Redux</a></li>
              <li><a href="" >Hooks in React</a></li>
              <li><a href="" >What are Arrow functions?</a></li>
              <li><a href="" >Django and Django Rest Framework</a></li>

            </ul>
          </div>

          <div className="lower-mid">
            <div className="lm-1"><button href="" >Read More Tutorials</button></div>
            <div className="lm-2"><button href="" >See List of All My Projects</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
