import React from "react"
import  "./Tindog.css";
import Image from "./iphone6.png";

function Tindog(){
    return(
       
         <div className = "row">
            <div className="container-fluid head-box">
            
                <div className = "">
                <h1>Meet new and Intresting Dogs nearby.</h1>
                <button type = "button" className="btn btn-dark btn-lg  download-button"><i class="fab fa-apple"></i> Download</button>
                <button type = "button" className = "btn btn-outline-light btn-lg download-button" ><i class="fab fa-google-play"></i> Download</button>
                </div>

                <div className = "">
                <img className="title-image" src={Image} alt="iphone image"></img>
                </div>

                
            </div>  
        
                 <div>
                <section id="features">
                
                <h3>Easy to use.</h3>
                <p>So easy to use, even your dog could do it.</p>

                <h3>Elite Clientele</h3>
                <p>We have all the dogs, the greatest dogs.</p>

                <h3>Guaranteed to work.</h3>
                <p>Find the love of your dog's life or your money back.</p>

                </section>
                </div>

         </div>
        
        
    )
}


export default Tindog;