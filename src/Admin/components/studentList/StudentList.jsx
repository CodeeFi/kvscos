import React from 'react'
import api from "../../../API/useApi";
import { useQuery } from "react-query";
import Student from "../Recent/Student";

const stdInfo = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/studentsInfo`);

function StudentList() {


    const { data, isLoading, isError } = useQuery("allStudent", stdInfo);
    if (isLoading)
        return <h2> Loading Data </h2>

    if (isError)
        return <h4>SomeThing Went Wrong</h4>
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>Student List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Enrolment No</td>
                                    <td>Full Name</td>
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
        </>
    )
}

export default StudentList