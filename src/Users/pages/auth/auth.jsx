import React, { useState } from 'react'
import "./auth.css";
import Session from '../../components/Session';
import { MomoizeYear } from '../../components/Session';
import { useForm } from 'react-hook-form';
import registration from '../../API/authApi/RegisterAPI';
import login from '../../API/authApi/LoginApI';
import { useNavigate, } from 'react-router-dom';

function RegisterLogin() {

    const nagivate = useNavigate();
    const [isActive, setisActive] = useState({
        Xleft: "10px",
        Yleft: "600px",
        Zleft: "0",
        loginheight: "383px",
        loginMargin: "130px auto"
    });

    const thisYear = new Date().getFullYear();
    const cur_year = thisYear
    const [curYear, setcurYear] = useState(cur_year)

    const year = MomoizeYear()

    function endYear(e) {
        setcurYear(
            Number(e.target.value) + 1);
    }


    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    const { register: register2, handleSubmit: handelSubmit2, formState: { errors: error2 } } = useForm({
        mode: "onBlur",
    });


    // Hnadel the form data
    const loginSubmit = async (loginInfo) => {
        const res = await login(loginInfo);
        if (res) {
            setTimeout(() => {
                nagivate("/");
            }, 2000);
        }
    }

    const RegisterSubmit = async registerinfo => {
        const res = await registration(registerinfo);
        if (res) {
            setisActive({
                Xleft: "10px",
                Yleft: "600px",
                Zleft: "0",
                loginheight: "411px",
                loginMargin: "130px auto"
            });
        }
    }





    return (
        <>
            <div className="hero">
                <div className="form-box" style={{ height: isActive.loginheight, margin: isActive.loginMargin }}>
                    <h3 className="rw">Student Auth</h3>

                    <div className="button-box">
                        <div style={{ left: isActive.Zleft }} id="btn1"></div>
                        {/* <form> */}
                        <button type="button" id="1"

                            onClick={() => {
                                setisActive({
                                    Xleft: "10px",
                                    Yleft: "600px",
                                    Zleft: "0",
                                    loginheight: "411px",
                                    loginMargin: "130px auto"
                                })
                            }
                            }
                            className="toggle-btn">Log In</button>
                        <button type="button" id="2" onClick={() => {
                            setisActive({
                                Xleft: "344px",
                                Yleft: "20px",
                                Zleft: "70px"
                            })
                        }
                        }
                            className="toggle-btn">Register</button>
                    </div>

                    {/* LOgin Section */}

                    <form key={1} onSubmit={handleSubmit(loginSubmit)}>
                        <div id="login" className="input-group" style={{ left: isActive.Xleft }}  >
                            <input type="text" {...register("userid")} className="input-field" placeholder="Enter Email or Enrolment_NO" required />
                            <input type="password" {...register("password")} className="input-field" placeholder="Enter Password" required />
                            <input type="checkbox" className="check-box" /><span>remember password</span>
                            <button type="submit" className="submit-btn">Log In</button>
                        </div>
                    </form>
                    {/* Register Section */}
                    <form key={2} onSubmit={handelSubmit2(RegisterSubmit)}>
                        <div id="register" style={{ left: isActive.Yleft }} className="input-group1">
                            <input type="number" {...register2("enrolment_no")} className="input-field1" placeholder="Enrolment No" name="enrolment_no" required />
                            <input type="text" {...register2("first_name")} className="input-field1" placeholder="Enter Your First name" name="first_name" required />
                            <input type="text" {...register2("last_name")} className="input-field1" placeholder="Enter Your Last Name" name="last_name" required />


                            <select  {...register2("college")} className="input-field51" name="college" required>
                                <option hidden value="" >Colleges</option>
                                <option value="KVSCOS">KVSCOS</option>
                                <option value="SITE">SITE</option>
                                <option value="Poltecnic">Poltecnic</option>
                            </select>

                            <select {...register2("course")} className="input-field51" name="course" required>
                                <option hidden value=""> Course </option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="BSC">BSC.CS</option>
                            </select>

                            <input type="email" {...register2("email")} className="input-field3" placeholder="Email Id" name="email" required />
                            <input type="number" {...register2("phone")} className="input-field3" placeholder="Phone No" name="phone" required />

                            <select className="input-field5" {...register2("session_start_year")} defaultValue={'DEFAULT'} name="session_start_year" onChange={endYear} required>
                                <option value="">Session Start</option>

                                {
                                    year.map((value, index) => {
                                        if (value < thisYear) {
                                            return (
                                                <Session key={index} props={value}></Session>
                                            );
                                        }
                                        return null;
                                    })
                                }



                            </select>
                            <select className="input-field5" {...register2("session_end_year")} defaultValue={'DEFAULT'} name="session_end_year" required>
                                <option value="">Session End</option>
                                {
                                    year.map((value, index) => {
                                        if (value > curYear)
                                            return (
                                                <Session key={index} props={value}></Session>
                                            )
                                        return null;
                                    })
                                }
                            </select>

                            <input type="password" {...register2("password", { required: true, maxLength: 20, minLength: { value: 8, message: "password must be 8 charectar long" }, pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: "Password must be AlplaNumaric with Spacial symbol" } })} className="input-field6" placeholder="Enter Password" name="password" required />

                            {error2.password && <p className='pwderror' >{error2.password.message}</p>}
                            <input type="password" {...register2("repassword", { required: true, maxLength: 20, minLength: { value: 8, message: "password must be 8 charector Long" }, pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: "password must AlphaNumaric with spacial symbol" } })} className="input-field7" placeholder=" Re-Enter Password" name="repassword" required />
                            {error2.repassword && <p className='pwderror'>{error2?.repassword?.message}</p>}
                            <button type="submit" className="submit-btn">Register</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}


export default RegisterLogin;