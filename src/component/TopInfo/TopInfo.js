import React from 'react';
import './TopInfo.css'

export default function TopInfo(){
    return(
       <div className="topInfo" >
           <div className="name">
                <h5>Saranjeet Singh</h5> 
                <h4>Web Developer in Toronto</h4>
                
           </div>
           
            <img src="/flag.jpg"  alt = "my info" />
       </div>   
    )
}  