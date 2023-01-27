import React from 'react';
import "./Register.css";

const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook lite</h3>
                <span className="loginDesc">
                    Connect with friends and the  world around you on  facebook lite 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="registerButton">
                        Log  into Account
                    </button>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Register