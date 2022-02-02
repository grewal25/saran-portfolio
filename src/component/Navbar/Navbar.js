import React from 'react';
import './Navbar.css'


export default function Navbar(){
    return(
       <div className="navbar">
          <ul>
           
              <li>  <a href="./" >home</a></li>
              <li> <a href="./archive" >archive</a></li>
              <li> <a href="./javascript" >JS</a></li>
              
          </ul>
       </div>
    )
}