import './services.css'
import services_data from './services-data'
import logo from './logo.png'
import { FaArrowRight } from "react-icons/fa";
function services() {
    return(
<div id='Services' className='services'>
    <div className="services-title">
        <h1>MY SERVICES</h1>
        <img src={logo} alt='teamimage'></img>
    </div>
    <div className="services-container">
{services_data.map((services,index)=>{
    return <div key={index} className='services-format'> 
<h3>{services.s_no}</h3>
<h2>{services.s_name}</h2>
<p>{services.s_desc}</p>
<div className="sirvices-readmore">
    <p>Read more</p>
    <FaArrowRight/>
    
</div>
    </div>
})}
    </div>
</div>
    )
}
export default services