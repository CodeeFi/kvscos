import React from 'react'
import { useQuery } from "react-query"
import api from "../../../API/useApi"
import ContectDetails from './ContectDetails';
const fetcher = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/studentsContect`);

function Contectinfo() {
    const { data, isLoading, isError } = useQuery("allContect", fetcher);

    if (isLoading)
        return <h2> Loading Data </h2>

    if (isError)
        return <h4>SomeThing Went Wrong</h4>

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>Student Contect Info List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Enrolment No</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>phone</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.studentContect && data.studentContect.map((student, id) => {
                                    return <ContectDetails key={id} props={student} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contectinfo