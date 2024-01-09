import React from "react";
import Buttons from "./Buttons";

function Header (){
    return(
        <div className="heading">
            <h1 style={{color:"blue"}}>Welcome to Online Digital Library</h1>
            <div >
            <Buttons/>
            </div>
            
        </div>
    )
}

export default Header