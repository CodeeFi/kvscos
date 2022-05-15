
import React from 'react'
import "./adminLogin.css"
import { Link } from "react-router-dom"
function Login() {
    return (
        <div className="loginbody">
            <div className="form-container">
                <h3>Admin Registration</h3>

                <form className="form">
                    <div className="input-container">
                        <i className="far fa-envelope"></i>
                        <input required type="email" name="email" className="input-box" placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input required type="password" name="password" className="input-box" placeholder="Password" />
                    </div>
                    <div className="rem-box">
                        <label className="checkbox-container"> Remember me
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <button type="submit" className="form-btn">Sign In</button>
                </form>

                <p>Don't have an account? <Link to="/admin/register" className='text-color'>Sign Up</Link></p>
                <a href="" className="text-color forgot-text">Forgot Password?</a>

            </div>
        </div>
    )
}

export default Login