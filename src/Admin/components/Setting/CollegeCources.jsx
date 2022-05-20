import React from 'react'
import "./setting.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from '../../../API/useApi';
import { useForm } from 'react-hook-form';
import Notification from '../conf/Notification';
import Cources from "./Cources";
function CollegeCources() {

    const queryClient = useQueryClient();
    // Get The College 
    const { data, isLoading, isError } = useQuery("getCollege", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/collegeList`)
    });



    const setCollege = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/admin/setCources`, data)
    }, {
        onError: (err) => {
            Notification("Set College ", "SomeThing Went Wrong", "danger");
        },
        onSuccess: (data) => {
            Notification("Set College ", data.msg, "success");
            queryClient.invalidateQueries("getCollege");
        }
    });
    const { register, handleSubmit } = useForm();
    const college = (e) => {
        setCollege.mutate({ ...e });
    }




    const setCourse = useMutation((data) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/setCources`, data)
    }, {
        onError: (err) => {
            Notification("Course Update", "SomeThing Went Wrong", "danger");
        },
        onSuccess: (data) => {
            Notification("Course Update", data.msg, "success")
            queryClient.invalidateQueries("getCollege");
        }
    });



    // handel the Course
    const { register: course, handleSubmit: courseHandler } = useForm();
    const courseupload = (e) => {
        setCourse.mutate({ ...e });
    }



    // Handel the College Name and University\
    if (isLoading) {
        return <h3>Loading Wait some Time</h3>
    }
    if (isError) {
        return <h3>SomeThing Went wrong</h3>

    }


    return (
        <>
            <div className="container">
                <div className="Approvestudents">
                    <div className="collegeCourc">
                        <div className="card-head">
                            <h4>Add College And courses</h4>
                        </div>
                        <form onSubmit={handleSubmit(college)} method="post">
                            <div className="setCollege">
                                <input {...register("university")} type="text" placeholder='Univerisity Name' name="university" id="" />
                                <input {...register("collegeName")} type="text" placeholder='Enter a college' name="collegeName" id="" />
                                <button className='add-course'>Add</button>
                            </div>
                        </form>
                        <form onSubmit={courseHandler(courseupload)} method="post">
                            <div className="setCources">
                                <select {...course("id")} >
                                    {
                                        data[0] && data.map((college, index) => {
                                            return <option key={index} value={college._id}>{college.collegeName}</option>
                                        })

                                    }
                                </select>
                                <input  {...course("course")} type="text" name="course" id="course" placeholder='Enter A course' />
                                <button className='btn-add' type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                    <Cources props={data} />
                </div>
            </div>
        </>
    )
}

export default CollegeCources