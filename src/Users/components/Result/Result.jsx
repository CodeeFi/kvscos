import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import "./Result.css";
import api from "../../../API/useApi"
import { useMutation } from "react-query"
import Notification from '../Notification';
import { context } from "../../User";
function Result() {

    const [stdresult, setstdResult] = useState();

    const result = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/home/findResult`, data)
    },
        {
            onError: (error, variables, context) => {
                const e = JSON.parse(error.message);
                Notification("Error", e.msg, "danger");
            },
            onSuccess: (data, variables, context) => {

                const key = Object.keys(data.studentResult);
                const value = Object.values(data.studentResult);
                setstdResult([key, value]);
            }
        }

    )

    const userData = useContext(context) // get user Information.

    const [toggle, setToggle] = useState(false);

    function resType(e) {
        if (e.target.value === "internal") {
            setToggle(true);
        } else {
            setToggle(false);
            unregister("session");
        }
    }

    const { register, handleSubmit, unregister } = useForm()


    function findResult(e) {

        const std = {
            ...e,
            EnrolmentNo: userData.enrolment_no
        }
        result.mutate({
            ...std
        });
    }

    return (
        <div>
            <div className="container-res">
                <div className="result-container">
                    <form onSubmit={handleSubmit(findResult)} method="post">
                        <div className="result-card">
                            <div className="res-title">
                                <h3>Find Our Result</h3>
                            </div>
                            <label htmlFor="Enrolmentno">Enrolment NO</label>
                            <input type="text" readOnly value={userData.enrolment_no} name="enrolmentNo" id="Enrolmentno" />
                            <select {...register("semester", { required: "Select Semester" })} className='dropdown-res' required>
                                <option value="">Semester</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>

                            <select {...register("type", { required: "Select Semester" })} onChange={resType} className='dropdown-res' required>
                                <option value="">Result-Type</option>
                                <option value="internal">Internal</option>
                                <option value="external">External</option>
                            </select>
                            {
                                toggle && <select className='dropdown-res'  {...register("session", { required: "Select Semester" })} required>
                                    <option value="">Session</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            }
                            <button className='btnSubmit' id='actionbtn'>Serach</button>
                        </div>
                    </form>

                    <div className="result-data">
                        <div className="result">
                            <table width="90%">
                                <thead>
                                    <tr>
                                        {
                                            stdresult?.[0] && stdresult[0]?.map((metadata, index) => {
                                                return <th key={index}>{metadata}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            stdresult?.[1] && stdresult[1]?.map((result, index) => {
                                                return <td key={index}> {result}</td>
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result