import React from "react";
import TopInfo from "../TopInfo/TopInfo";
import "./Main.css";

export default function Main() {
  return (
    <div className="top-main">
      <div className="top-info"><TopInfo /></div>
      <div className="main-bottom">
        <h1>ABOUT ME</h1>
        <p>
          I am a Web Developer currently living in Toronto, Canada. Past 4 years
          I have been playing with many web technologies. From Front-end
          framework ReactJS, Angular to Backend Django and Flask. I have a
          Masters degree in Electrical Engineering from University of British
          Columbia. Currently I am working as Front-End Developer in Bank of
          Montreal and on the side am involved in number of projects building
          websites for small and medium sized businesses. You can see my
          projects
          
        </p>
      </div>
    </div>
  );
}
