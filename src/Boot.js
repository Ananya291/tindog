import React from "react"
import  "./Boot.css"

function Boot(){ 
return(  
    <div className = "row-nav">  
    
    <div className = "container-fluid"> 
    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand " href=" ">tindog</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav navi">
            <li className="nav-item">
                <a className="nav-link" href=" ">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href=" ">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href=" ">About</a>
            </li>
            
        </ul>
        </div>
     </nav>
    </div>
   
    </div>
    
)
}

export default Boot;