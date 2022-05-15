import React from 'react'
import "./adminLogin.css";
import { Link } from "react-router-dom"
function AdminRegister() {
    return (
        <div className="loginbody">
            <div className="form-container">
                <h3>Admin Login</h3>

                <form className="form">
                    <div className="input-container">
                        <i class="far fa-user"></i>
                        <input required type="text" name="firstName" className="input-box" placeholder="First Name" />
                    </div>
                    <div className="input-container">
                        <i class="far fa-user"></i>
                        <input required type="text" name="lastName" className="input-box" placeholder="Last Name" />
                    </div>
                    <div className="input-container">
                        <i className="far fa-envelope"></i>
                        <input required type="email" name="email" className="input-box" placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input required type="password" name="password" className="input-box" placeholder="Password" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input required type="password" name="rePassword" className="input-box" placeholder=" Re Password" />
                    </div>
                    <div className="rem-box">
                        <label className="checkbox-container"> Super Admin
                            <input name='adminType' type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <button type="submit" className="form-btn">Register</button>
                </form>

                <p>Don't have an account? <Link to="/admin/login" className='text-color'>Login</Link></p>

            </div>
        </div>
    )
}

export default AdminRegister