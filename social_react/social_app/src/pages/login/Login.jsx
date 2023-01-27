import "./Login.css";

const Login = () => {
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
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="registerButton">
                        Create a New account?
                    </button>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Login