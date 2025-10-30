import './login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function login() {
    return(
        <div className="wrapper" id='login'>

     
        <div className="login">
<form action="">
    <h1>login</h1>
    <div className="input-box">
        <input className='user' type="text"  placeholder='username' required/>
        < FaUser className='icon' />
    </div>
    <div className="input-box">
        <input type="text"  placeholder='password' required/>
        <FaLock  className='icon'/>
    </div>
    <div className="remember-forgot">
        <label><input type="checkbox" />Remember me</label>
        <a href='#'>forgat password</a>
    </div>
    <button type='submit'>login</button>
    <div className="register-link">
        <p>Dont have an account<a href='#'>Register</a></p>
    </div>
</form>
        </div>
        </div>
    )
}
export default login