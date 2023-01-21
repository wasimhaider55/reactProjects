import React from 'react'
import Toggle from '../toggle/Toggle';
import "./Navebar.css";


const Navebar = () => {
  return (
<div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Wasim</div>
        <Toggle />
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: "none"}}>
            <li>Home</li>
            <li>Services</li> 
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            </ul>
        </div>
            <button className="button"> Contact</button>
    </div>
</div>
    )

}

export default Navebar