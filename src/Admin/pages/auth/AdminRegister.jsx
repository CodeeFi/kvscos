import React from 'react'
import "./adminLogin.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import api from "../../../API/useApi";
import Notification from '../../components/conf/Notification';
function AdminRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const setAdmin = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/auth/admin/register`, data);
    },
        {
            onSuccess: (data) => {
                Notification("Register Success", data.msg, "success");
            },
            onError: (error, variables, context) => {
                const e = JSON.parse(error.message);
                console.log(e);
                Notification("Register Faild", e.msg, "danger");
            }
        }

    )


    const userData = (e) => {
        setAdmin.mutate({ ...e });
    }


    return (
        <div className="loginbody">
            <div className="form-container">
                <h3>Admin Register</h3>

                <form onSubmit={handleSubmit(userData)} className="form">
                    <div className="input-container">
                        <i className="far fa-user"></i>
                        <input required type="text" {...register("firstName")} name="firstName" className="input-box" placeholder="First Name" />
                    </div>
                    <div className="input-container">
                        <i className="far fa-user"></i>
                        <input required type="text" name="lastName" {...register("lastName")} className="input-box" placeholder="Last Name" />
                    </div>
                    <div className="input-container">
                        <i className="far fa-envelope"></i>
                        <input required type="email" name="email"  {...register("email")} className="input-box" placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input required type="password" name="password" {...register("password", { required: true, maxLength: 20, minLength: { value: 8, message: "password must be 8 charectar long" }, pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: "Password must be AlplaNumaric with Spacial symbol" } })} className="input-box" placeholder="Password" />
                        {errors.password && <p className='pwderror' >{errors?.password.message}</p>}
                    </div>
                    <div className="input-container">
                        <i className="fas fa-unlock-alt"></i>
                        <input required type="password" name="rePassword" {...register("rePassword", { required: true, maxLength: 20, minLength: { value: 8, message: "password must be 8 charectar long" }, pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: "Password must be AlplaNumaric with Spacial symbol" } })} className="input-box" placeholder=" Re Password" />
                        {errors.rePassword && <p className='pwderror' >{errors.rePassword.message}</p>}
                    </div>
                    <div className="rem-box">
                        <label className="checkbox-container"> Super Admin
                            <input name='adminType' {...register("adminType")} type="checkbox" />
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