import './mywork.css'

import mywork_data from './workdata'
import logo from './logo.png'
import arrow from './right.png'

function mywork() {
   
    return(
        <div id='protfolio' className='mywork'>
<div className="mywork-title">
    <h1>My lateast work</h1>

    <img src={logo} alt="imagejj" className='imageoflogo' style={{width:"300px"}}/>
    </div>
    <div className="mywork-container">
{mywork_data.map((work,index)=>
{
    return <img key={index} src={work.w_image} style={{width:"300px"}}/>
})}
    </div>
    <div className='mywork-showmore'>
        <p>show More</p>
        <img src={arrow} alt='arrow icon' style={{width:"30px"}}></img>
    </div>

        </div>
    )
}
export default mywork