import React from 'react';
import './Navbar.css'


export default function Navbar(){
    return(
       <div className="navbar">
          <ul>
           
              <li>  <a href="./" >home</a></li>
              <li> <a href="./blog" >blogs</a></li>
              <li> <a href="./javascript" >JS</a></li>
              <li> <a href="./personal" >Personal</a></li>
              <li> <a href="./about" >About-Me</a></li>
              
          </ul>
       </div>
    )
}