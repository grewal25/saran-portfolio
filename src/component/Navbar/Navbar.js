import React from 'react';
import './Navbar.css'


export default function Navbar(){
    return(
       <div className="navbar">
          <ul>
           
              <li>  <a href="./" >home</a></li>
              <li> <a href="./blog" >blogs</a></li>
              <li> <a href="./blog" >tech</a></li>
              <li> <a href="./javascript" >archieve</a></li>
              
          </ul>
       </div>
    )
}