import React from "react";
import './about.css'
import myimage from './myimage.png'
import logo from './logo.png'
function about() {
    return(
        <div id='About' className="about">
<div className="about-title">
    <h1>About me</h1>
    <img src={logo} alt="me"></img>
</div>
<div className="about-sections">
    <div className="about-left">
        <img src={myimage} alt=""  style={{width:"300px",borderRadius:"10px"}}/>
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>
            
Hi, I’m Sabghatullah, a passionate and detail-oriented web developer who enjoys creating beautiful and responsive websites. 
 </p>
            <p> I focus on writing clean code and designing user-friendly interfaces that provide a great experience.<b>My skills include:</b></p>
        </div>
        <div className="about-skills">

       
        <div className="about-skill">
            <p> HTML&CSS </p > 
            <hr style={{width:"50%" }}></hr>
        </div>
        <div className="about-skill">
            <p> Bootstrab </p>
            <hr style={{width:"70%" }}></hr>
        </div>
        <div className="about-skill">
            <p>JavaScipt  </p>
            <hr style={{width:"60% "}}></hr>
        </div>
        <div className="about-skill">
            <p>React JS  </p>
            <hr style={{width:"50% "}}></hr>
        </div>
        </div>
    </div>
</div>
<div className="about-achiements">
        <div className="about-achiement">
            <h1>3+ </h1>
            <p> YEARS OF  EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achiement">
            <h1>90+ </h1>
            <p> PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achiement">
            <h1>50+ </h1>
            <p>HPPAY CLIENTS</p>
        </div>
</div>
        </div>
    )
}
export default about