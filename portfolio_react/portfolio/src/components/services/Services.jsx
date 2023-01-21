import React from 'react';
import "./Services.css";
import Card from '../card/Card';
 import HeartEmoji from "../../img/heartemoji.png";
 import Humble from "../../img/humble.png"
 import glasses from "../../img/glasses.png"

const Services = () => {
    return (
        <div className="services" id='services'>
            <div className="awesome">
                {/* Left side  */}
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum ad some thing new here dolor sit  amet consectetur
                    <br/>
                     adipisicing elit. Officia, laborum.</span>
            <button className="button s-button">Downlaod CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                
            </div>

            <div className="cards">
                {/* Right side  */}
               <div style={{left:"14rem"}}>
                <Card 
                // {/* first card */}
                emoji = {HeartEmoji}
                heading = {"Desing"}
                details = {"Figma, Sketch, Photoshop Adobed,  Adobed xd"}
                />
               </div>
                {/* second card */}
               <div style={{top:"12rem" , left:"-4rem"}}>
                <Card 
                emoji = {Humble}
                heading = {"Developer"}
                details = {"Html, Css , Javascript,React"}
                />
               </div>
                {/* third card */}
               <div style={{top:"19rem" , left:"12rem"}}>
                <Card 
                emoji = {glasses}
                heading = {"UI/UX"}
                details = {"it's all about ui and ux"}
                />
               </div>

            </div>

        </div>
    )
}

export default Services