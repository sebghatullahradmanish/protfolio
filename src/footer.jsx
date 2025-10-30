import './footer.css'
import logo from './logo.png'
import user from './user.png'
function footer() {
    return(
        <div className="footer">
<div className="footer-top">
    <div className="footer-top-left">
        <img src={logo} alt=""   style={{width:"200px"}}/>
        <p>Lorem ipsum dolor sit.</p>

    </div>
    <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={user} alt="usericon"  style={{width:"20px"}}/>
            <input type="email" placeholder='enter your email'/>
        </div>
        <div className="footer-subscribe">subscripe</div>
    </div>
</div>
<hr />
<div className="footer-buttom">
    <p className="footer-bottom-left">  © 2025 sebghatullah Radmanish. All rights reserved.</p>
    <div className="footer-bottom-right">
        <p>term of services</p>
        <p> privacy policy</p>
        <p>connect with me</p>
    </div>
</div>
        </div>
    )
}
export default footer