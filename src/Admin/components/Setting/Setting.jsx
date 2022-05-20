import React, { useRef, useState } from 'react'
import "./setting.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../API/useApi"
import { useForm } from "react-hook-form";
import CollegeCources from './CollegeCources';
import Notification from "../conf/Notification";
function Setting() {
    const queryClient = useQueryClient();
    // Image url set into a div section
    const [imageUrl, setimgUrl] = useState("");
    const filename = useRef();
    function fileSelect(e) {
        filename.current.innerText = e.target.files[0].name
    }

    // File UPload Section
    const fileuplod = useMutation((event) => {
        event.preventDefault()
        return api.filepost(`${process.env.REACT_APP_API_HOST}/admin/uploadFile`, event.target);
    },
        {
            onSuccess: (data) => {
                setimgUrl(data.url);
                Notification("FileUPload", data.msg, "success");
            },
            onError: (err) => {
                Notification("File Upload", "someThing Went Wrong", "danger");
            }
        }
    )

    const setTeacher = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/admin/setTeacher`, data);
    },
        {
            onSuccess: (data) => {
                Notification("Profile", data.msg, "success");
                queryClient.invalidateQueries("getTeachers");
            },
            onError: (err) => {
                Notification("Profile", "someThing Went Wrong", "danger");
            }
        }
    )
    const deleteT = useMutation((data) => {
        return api.delete(`${process.env.REACT_APP_API_HOST}/admin/deleteTeacher`, data);
    },
        {
            onSuccess: (data) => {
                Notification(" Teacher Profile", data.msg, "warning");
                queryClient.invalidateQueries("getTeachers");
            },
            onError: (err) => {
                Notification("Teacher Profile", "someThing Went Wrong", "danger");
            }
        }
    )

    function deleteTecher(e) {
        console.log(e);
        deleteT.mutate({ id: e });
    }


    // use From.
    const { register, handleSubmit } = useForm();
    const teacherData = (data) => {
        const teacherProfile = {
            ...data,
            imageUrl
        }
        console.log(teacherProfile);
        setTeacher.mutate({ ...teacherProfile });
    }
    // Geting a teacher Details.

    const { data, isLoading, isError } = useQuery("getTeachers", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/teacherList`);
    })

    if (isLoading) {
        return <h2> wait, a Second Data is loading</h2>
    }
    if (isError) {
        return <h2> SomeThing Went Wrong</h2>

    }

    return (
        <>
            <div className="container">
                <div className="Approvestudents">
                    <div className="studentapprovle">
                        <div className="card-head">
                            <h4>Add Teacher Profile</h4>
                        </div>
                        <form onSubmit={fileuplod.mutate} method="post">
                            <div className="uploadFile">
                                <label className='uploadimg' htmlFor="uploadimg"> <span ref={filename}> choose Profile Pic </span>
                                    <input required onChange={fileSelect} type="file" name="file" id="uploadimg" />
                                </label>
                                <button className='btn-upload'>Upload</button>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit(teacherData)} method="post">
                            <div className="teacherPofile">
                                <label htmlFor="fullname">Url</label>
                                <input required type="text" name="url" placeholder='Url' value={imageUrl} id="fullname" readOnly />
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" name="fullName" {...register("fullName", { required: "Enter A full Name" })} placeholder='Enter FullName' id="fullname" />
                                <label htmlFor="designation">Designation</label>
                                <input type="text" name="designation" {...register("designation", { required: "Enter A Degination" })} placeholder='Enter designation' id="designation" />
                                <label htmlFor="specialization">Specialization</label>
                                <input type="text" name="specialization" {...register("specialization", { required: "Enter A Specialization" })} placeholder='Enter specialization' id="specialization" />
                                <label htmlFor="fburl">Fb Url</label>
                                <input type="text" name="fbUrl"  {...register("fbUrl")} placeholder='Enter fbUrl' id="fburl" />
                                <label htmlFor="twiterUrl">twiter Url</label>
                                <input type="text" name="twiterUrl" {...register("twiterUrl")} placeholder='Enter twiterUrl' id="twiterUrl" />
                                <label htmlFor="instagramUrl">instagramUrl</label>
                                <input type="text" name="instagramUrl"   {...register("instagramUrl")} placeholder='Enter instagramUrl' id="instagramUrl" />
                                <label htmlFor="email">email</label>
                                <input type="email" name="email"  {...register("email", { required: "Enter A email" })} placeholder='Enter email' id="email" />
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" {...register("phone")} placeholder='Enter phone' id="phone" />

                                <button type='submit' className='btn-submit'>Submit</button>
                            </div>

                        </form>

                    </div>
                    <div className="studetntapproved teacher-list">
                        <div className="card">
                            <div className="card-header">
                                <h4>Teacher List</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Name</td>
                                                <td>Designation</td>
                                                <td>Email id</td>
                                                <td>Phone no</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data[0] && data.map((teacher, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{teacher.fullName}</td>
                                                                <td>{teacher.designation}</td>
                                                                <td>{teacher.email}</td>
                                                                <td>{teacher.phone}</td>
                                                                <td><button onClick={() => deleteTecher(teacher._id)} className='btn-rm'>Delete</button></td>
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
                </div>
            </div>

            <CollegeCources>
            </CollegeCources>



        </>
    )
}


export default Setting