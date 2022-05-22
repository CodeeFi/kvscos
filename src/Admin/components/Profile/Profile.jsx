import React, { useRef, useState } from 'react'
import "./profile.css"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../API/useApi";
import Notification from '../conf/Notification';
import Logout from "../../pages/auth/Logout";
function Profile({ props }) {

    const file = useRef();
    const dataform = useRef();
    const queryClient = useQueryClient();

    const [url, setUrl] = useState(props.imgUrl);
    // When user click on profile picture chose file click.
    const fileClick = () => {
        file.current.click()
    }

    const approve = useMutation((data) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/adminList`, data)
    },
        {
            onError: (error, variables, context) => {
                Notification("User Approvle", "SomeThing Went Wrong", "danger")
            },
            onSuccess: (data, variables, context) => {
                Notification("User Approvle", data.msg, "success")
                queryClient.invalidateQueries("adminList")
            }
        }
    )
    const Delete = useMutation((data) => {
        return api.delete(`${process.env.REACT_APP_API_HOST}/admin/adminList`, data)
    },
        {
            onError: (error, variables, context) => {
                Notification("User delete", "SomeThing Went Wrong", "danger")
            },
            onSuccess: (data, variables, context) => {
                Notification("User delete", data.msg, "success")
                queryClient.invalidateQueries("adminList")
            }
        }
    )

    const setProfile = useMutation((e) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/profileImg`, e);
    }, {
        onError: () => {
            Notification("Error", "someThing Went Wrong", "danger");
        },
        onSuccess: (data, variables, context) => {
            Notification("Success", data.msg, "success");
            queryClient.invalidateQueries("getProfile");
        }
    })

    const fileUpload = useMutation((e) => {
        e.preventDefault();
        return api.filepost(`${process.env.REACT_APP_API_HOST}/admin/uploadFile`, e.target)
    }, {
        onError: (err, variables, context) => {
            const e = JSON.parse(err.message);
            Notification("Profile Pic", e.msg, "danger")
        },
        onSuccess: (data, variable, context) => {
            setUrl(data.url);
            Notification("Profile Pic", data.msg, "success");
            setProfile.mutate({ id: props._id, url: data.url });
        }
    });







    const filechange = () => {
        dataform.current.dispatchEvent(
            new Event("submit", { bubbles: true, cancelable: true })
        )
    }





    const { data, isLoading, isError } = useQuery("adminList", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/adminList`)
    });

    if (isLoading) {
        return <h2>Data is Loading</h2>
    }
    if (isError) {
        return <h2>SomeThign Went Wrong</h2>
    }


    return (
        <>
            <div className="container-profile">
                <div className="profileCard">

                    <form ref={dataform} onSubmit={fileUpload.mutate} method="post" id="formbg" >
                        <div onClick={fileClick} className="profile-img">
                            <input onChange={filechange} type="file" ref={file} name="file" hidden id="" />
                            <img className="profile-img" src={url ? `${process.env.REACT_APP_API_HOST}/home/image/${url}` : "/download.jpg"} alt="imgurl" />
                        </div>
                    </form>

                    <div className="profiledata">
                        <h2 className='user-name'> {`${props.firstName} ${props.lastName}`}</h2>
                        <div className="data">
                            <li>
                                <EmailIcon className="icon-email" />
                                <p className='email'>{props.email}</p>
                            </li>
                            <li className='admin-type'>
                                <PersonIcon className="icon-type" />
                                <p className='admit-type'>{props.adminType ? "SuperAdmin" : "Admin"}</p>
                            </li>
                        </div>
                        <li>
                            <Logout />
                        </li>
                    </div>
                </div>
                <div className="listprofile">
                    <div className="card">
                        <div className="card-header">
                            <h4>Wating For New Registration Approvle</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Admit Type</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data?.map((data, index) => {
                                                return (

                                                    <tr>
                                                        <td>{`${data.firstName} ${data.lastName}`}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.adminType ? "Super Admin" : "Admin"}</td>
                                                        {data?.isApproved ?
                                                            <>
                                                                <td><span className="status green"></span></td>
                                                                <td>  <button onClick={() => Delete.mutate({ id: data._id })} className="btn-delete" id='actionbtn'>Delete</button></td>
                                                            </>
                                                            :
                                                            <>
                                                                <td><span className="status red"></span></td>
                                                                <td> <button onClick={() => approve.mutate({ id: data._id })} id='actionbtn'>Publish</button></td>
                                                            </>
                                                        }
                                                    </tr>
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
        </>
    )
}

export default Profile