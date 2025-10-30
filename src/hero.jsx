import './hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import myimage from './myimage.png'
import myimage1 from './myimage.png'
function hero() {
    return(
        <div id='Home' className='hero'>
            <img  src={myimage} alt='myimg' className='imageme'></img>
              <img className='myphoto' src={myimage1} alt=""  style={{width:"250px",height:"250px"}}/>
            <h1><span>I am sebghatullah Radmanish,</span> fronted developer based in AFG</h1>
       <p>A passionate front-end developer focused on creating responsive, modern, and user-friendly websites. Skilled in HTML, CSS, Bootstrap, JavaScript,React.

</p>
       <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me </AnchorLink></div>
        <div className="hero-resume" > My ruseme </div>
       </div>
        </div>
    )
}
export default hero