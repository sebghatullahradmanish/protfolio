
import React,{ useRef, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import './navbar.css'
import logo from './logo.png'
import underline from './underline.png'
import menu_open from './menu-open.png'
import menu_close from './menu-close.png'
import Login from "./componenet/login/login"

function navbar() {
   
     const [isopen,setisopen]=useState(true)
     function openLogin() {
      setisopen(!isopen)
    
     }



    const[menu,setMenu]=useState("Home");
    const menuRef=useRef()
    const openMenu=()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }
    return(
        <>



     
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"  style={{width:"200px"}}></img>
           
   
            <img src={menu_open} onClick={openMenu} alt="logo" className="nav-menu-open"    style={{width:"30px"}}></img>


            <ul ref={menuRef} className="nav-menu" >
            <img src={menu_close} onClick={closeMenu} alt="logo"    className="nav-menu-close"   style={{width:"30px"}}></img>
                <li > <AnchorLink className='anchor-link' href='#Home'> <p onClick={()=>setMenu("Home")}>Home</p> </AnchorLink> {menu==="Home"?<img src={underline} alt="underline" className="underlineima"  style={{width:"50px"}}/>:<></>}</li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#About'>  <p onClick={()=>setMenu("About")}>About me</p> </AnchorLink>{menu==="About"?<img src={underline} alt="underline" style={{width:"80px"}}/>:<></>}</li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#Services'>  <p onClick={()=>setMenu("Services")}>Services</p> </AnchorLink>{menu==="Services"?<img src={underline} alt="underline"style={{width:"70px"}}/>:<></>}</li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#protfolio'> <p onClick={()=>setMenu("protfolio")}>protfolio</p> </AnchorLink>{menu==="protfolio"?<img src={underline} alt="underline"style={{width:"70px"}}/>:<></>}</li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=>setMenu("contact")}>contact</p> </AnchorLink>{menu==="contact"?<img src={underline} alt="underline"style={{width:"60px"}}/>:<></>}</li>
               
            </ul>
            <div className="nav-contact"> <AnchorLink className='anchor-link' offset={50} href='#contact'>conect me </AnchorLink></div>
        </div>
      
        {
  !isopen &&  <Login/>
} 
        </>
    )
 
}
export default navbar