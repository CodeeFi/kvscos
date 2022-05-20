
import React from 'react'
import "./adminLogin.css"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import api from "../../../API/useApi";
import Notification from "../../components/conf/Notification";
const apihost = process.env.REACT_APP_API_HOST;
function Login() {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    let data

    async function login(e) {
        data = await api.post(`${apihost}/auth/admin/login`, e);
        if (data.status > 200) {
            localStorage.setItem("admin-auth", "");
            const err = JSON.parse(data);
            console.log(err);
            Notification("Authorazition", "invalid id and Password", "danger");
            return false;
        }
        Notification("Authorazition", "login Sucessfully", "success")
        localStorage.setItem("admin-auth", JSON.stringify(data));
        const res = api.setheader(data.token);
        if (res)
            return navigate("/admin");
    }

    return (
        <div className="loginbody">
            <div className="form-container">
                <h3>Admin Login</h3>

                <form onSubmit={handleSubmit(login)} className="form">
                    <div className="input-container">
                        <i className="far fa-envelope"></i>
                        <input {...register("email")} required type="email" name="email" className="input-box" placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input {...register("password")} required type="password" name="password" className="input-box" placeholder="Password" />
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
                <Link to="null" className="text-color forgot-text">Forgot Password?</Link>
            </div>
        </div>
    )
}

export default Login