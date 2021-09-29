import { useState } from "react"



const Sidebar = ()=>{
    const [clicked, setClicked] = useState(true)
    // const handleClick=(e)=>{
    //      e.preventDefault
    //      console.log('The link was clicked.');
    // }
    console.log("from sidebar",clicked)
    return(
        <div className="sidebar-title">
        <button onClick={
            ()=>setClicked(false)
        }>React Blog </button>
        <button
            onClick={
                ()=>setClicked(false)}
        >Django</button>
        {/* <button
            onClick={
                ()=>setClicked(true)}
        >Python Blog</button>
        <button
            onClick={
                ()=>setClicked(true)}
        >Django Blog</button> */}
        
        </div>
    )
}

export default Sidebar