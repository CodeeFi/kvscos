import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from "../../../API/useApi";
import Notificaion from "../conf/Notification";
import './setting.css'
function Cources({ props }) {
    const queryClint = useQueryClient();
    const [course, setCource] = useState({ id: null });
    function fetchCources(e) {
        const data = props.filter((ele) => {
            return ele._id === e.target.value;
        });
        setCource(data[0]);
        refetch();
    }


    // Course Delete Section
    const deleteCourse = useMutation((data) => {
        return api.delete(`${process.env.REACT_APP_API_HOST}/admin/setCources`, data);
    }, {
        onError: (err) => {
            Notificaion("Course Deleted", "SomeThing Went Wrong", "danger")
        },
        onSuccess: (data) => {
            Notificaion("Course Deleted", data.msg, "success");
            queryClint.invalidateQueries(["getCourcse", course._id]);
        }
    })
    function removeCourse(c) {
        deleteCourse.mutate({
            id: course._id,
            course: c
        })

    }
    //  Course Delete Section


    const { data, isLoading, isError, isSuccess, refetch } = useQuery(["getCourcse", course._id], () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/getCourse/${course._id}`)
    }, {
        enabled: !!course._id
    })

    if (isLoading) {
        return <h2>Data is Loading</h2>
    }
    if (isError) {
        return <h2>SomeThing Went Wrong</h2>
    }
    if (isSuccess) {

    }

    return (
        <div className="studetntapproved courseList">
            <div className="card">
                <div className="card-header">
                    <h4>Teacher List</h4>
                </div>
                <div className="card-body">

                    <div className="table-responsive">
                        <select onChange={fetchCources}>
                            {
                                props.map((college, index) => {
                                    return <option key={index} value={college._id}>{college.collegeName}</option>
                                })
                            }
                        </select>

                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>College Name</td>
                                    <td>Cources</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data && data?.courses?.map((c, index) => {
                                        return (
                                            <>
                                                <tr key={index + 1}>
                                                    <td key={index + 1}>{course.collegeName}</td>
                                                    <td key={index + 2}>{c}</td>
                                                    <td key={index + 3}><button className='btn-rm' onClick={() => removeCourse(c)}> delete </button></td>
                                                </tr>
                                            </>
                                        )
                                    })

                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cources