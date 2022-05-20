import React from 'react'
import StdApprovle from "./StdApprovle"
import "./StdStyle.css";
import { useQuery, useMutation } from "react-query";
import api from '../../../API/useApi';
import Notification from "../conf/Notification";
import StdApprovedList from "./StdApprovedList"
import { useQueryClient } from "react-query";
const fetcher = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/studentsApprove`);
const aprovedStd = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/approvedStudent`);
const approveStd = (data) => api.put(`${process.env.REACT_APP_API_HOST}/admin/studentsApprove`, data)
const deletestd = (data) => api.delete(`${process.env.REACT_APP_API_HOST}/admin/studentsApprove`, data)


function StudentApprov() {

    const queryClient = useQueryClient();

    const { data, isLoading, isError, isSuccess } = useQuery("ApprovleList", fetcher);

    const { data: std, error: stderr, isLoading: loadstd } = useQuery("approvedList", aprovedStd)

    const mutation = useMutation(approveStd, {

        onSuccess: (data, variables, context) => {
            Notification("Authorazition", "Approvle Successsfull", "success");

        },
        onSettled: () => {
            queryClient.invalidateQueries('ApprovleList');
            queryClient.invalidateQueries('approvedList');
        }

    });
    const DeleteStd = useMutation(deletestd, {
        onSuccess: (data, variables, context) => {
            Notification("Authorazition", "Delete Successsfull", "warning")
        },
        onSettled: () => {
            queryClient.invalidateQueries('ApprovleList');
            queryClient.invalidateQueries('approvedList');
        }
    });


    if (isLoading || loadstd) {
        return <h2>Loding Your Result</h2>
    }
    if (isError || stderr) {
        return <h2>SomeThing Went Wrong</h2>
    }
    if (isSuccess) {
    }

    return (
        <>
            <div className="container">
                <div className="Approvestudents">
                    <div className="studentapprovle">
                        <div className="card">
                            <div className="card-header">
                                <h4>Wating For Approvle</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Enrolment No</td>
                                                <td>Name</td>
                                                <td>Course</td>
                                                <td>Approve</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.approvleList && data.approvleList.map((stu, index) => {
                                                return <StdApprovle key={index} props={{ stu, mutation, DeleteStd }} />
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="studetntapproved">
                        <div className="card">
                            <div className="card-header">
                                <h4>Approved Student List</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Enrolment NO</td>
                                                <td>Name</td>
                                                <td>status</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {std.approvleList && std.approvleList.map((stu, index) => {
                                                return <StdApprovedList key={index} props={{ stu, DeleteStd }} />
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentApprov