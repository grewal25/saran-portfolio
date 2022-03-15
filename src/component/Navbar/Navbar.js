import React from 'react';
import './Navbar.css'


export default function Navbar(){
    return(
       <div className="navbar">
          <ul>
           
              <li>  <a href="./" >home</a></li>
              <li> <a href="./essays" >essays</a></li>
              <li> <a href="./tutorials" >tutorials</a></li>
              <li> <a href="./about" >about</a></li>
              
          </ul>
       </div>
    )
}