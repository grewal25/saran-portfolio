import React from 'react';
import './Navbar.css'


export default function Navbar(){
    return(
       <div className="navbar">
          <ul>
           
              <li>  <a href="./" >home</a></li>
              <li> <a href="./blog" >blog</a></li>
              <li>  <a href="./skills" >skills</a></li>
           
              
          </ul>
       </div>
    )
}