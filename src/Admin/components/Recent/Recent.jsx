import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./recent.css"
import Student from "./Student";
import api from "../../../API/useApi"
import { useQuery } from "react-query"
const stdInfo = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/studentsInfo/10`);

function Recent() {
    const pathname = useLocation().pathname + "/studentList";

    const { data, isLoading, isError } = useQuery("StudentInfo", stdInfo);
    if (isLoading)
        return <h2> Loading Data </h2>

    if (isError) {
        return <h2> SomeThing Went Wrong</h2>
    }



    return (
        <div className="projects">
            <div className="card">
                <div className="card-header">
                    <h4>Student List</h4>
                    <Link to={pathname}> <button>see all<span className=" las la-arrow-right aero"></span></button></Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Enrolment No</td>
                                    <td> Full Name</td>
                                    <td>Course</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.studentInfo && data.studentInfo.map((student, id) => {
                                    return <Student key={id} props={student} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent