import React from 'react'
import { Link } from 'react-router-dom';
import "./recent.css";
import { useQuery } from "react-query"
import api from "../../../API/useApi"
import StudentContect from './StudentContect';
const fetcher = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/studentsContect/7`);
function RecentStudent() {
    const { data, isLoading, isError } = useQuery("contectInfo", fetcher);
    if (isLoading)
        return <h2> Loading Data </h2>
    if (isError)
        return <h4>SomeThing Went Wrong</h4>

    return (
        <div className="students">
            <div className="card">
                <div className="card-header">
                    <h4>Contect Info</h4>
                    <Link to="/admin/contectInfo"> <button>see all<span className="las la-arrow-right aero"></span></button></Link>
                </div>
                <div className="card-body">
                    {data.studentContect && data.studentContect.map((student, id) => {
                        return <StudentContect key={id} props={student} />
                    })}
                </div>
            </div>


        </div >
    )
}

export default RecentStudent