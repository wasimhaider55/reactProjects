import React from 'react';
import './Intro.css';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FlotingDiv from '../flotingDiv/FlotingDiv';
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Wasim Haider</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Odio consectetur harum corrupti sunt, voluptate in?</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icon">
                    <a href="https://github.com/"> <img src={Github} alt="" /></a>
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
               <div style={{top:-4, left: "68%" }}> <FlotingDiv image={crown} text1={"Web"} text2={"Developer"} /> 
               </div>
               <div style={{top: "18rem", left: "0rem"}}> <FlotingDiv image={thumbup} text1={"Best Design"} text2={"Award"} /> 
               </div>
               {/* {blur div} */}

               <div className='blur' style={{background:"rgb(238,210,255)"}}> 
               /* </div>
               <div className='blur' style={{
                background:"#C1F5FF",
                top:"19rem",
                width:"15rem",
                height:"7rem",
                left:"-9rem"
             }}>
               </div>
            </div>
        </div>
    )
}

export default Intro