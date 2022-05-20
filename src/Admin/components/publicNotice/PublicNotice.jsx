import React, { useRef, useState } from 'react'
import "./stdQuery.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from '../../../API/useApi';
import { useForm } from "react-hook-form";
import Notification from '../conf/Notification';
import Notice from "./Notice";

function PublicNotice() {

    const queryClint = useQueryClient();


    // File Upload section.
    const [file, setFile] = useState({ url: "" })
    const mutation = useMutation(event => {
        event.preventDefault()
        return api.filepost(`${process.env.REACT_APP_API_HOST}/admin/uploadFile`, event.target)
    },
        {
            onSuccess: (data) => {
                setFile(data);
                Notification("FileUpload", "Uploading Success", "success");
                queryClint.invalidateQueries("")
            },
            onError: () => {
                Notification("FileUpload", "Uploading faild", "danger");
            }
        })
    // Section Upload .


    const uploadRes = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/admin/setNotice`, data);
    }, {
        onSuccess: (data, variable, context) => {
            setFile(data);
            Notification("Notice Success", data.msg, "success");
            queryClint.invalidateQueries("getNotice");
        },
        onError: (error, variable, context) => {
            const err = JSON.parse(error);
            Notification("Notice err", err.msg, "danger");
        }
    });

    // Setting the result data.
    const { register, handleSubmit } = useForm();
    const setNotice = (e) => {
        console.log(e);
        uploadRes.mutate({ ...e });
    }




    // File Select section
    const uploadBtn = useRef();
    const fileshow = useRef();
    const filename = useRef();
    function upload() {
        console.log("upload Click");
        uploadBtn.current.click();
    }
    function fileSelected(e) {
        fileshow.current.classList.add("filehide");
        filename.current.innerText = e.target.files[0].name
    }
    // 


    const publishNotice = useMutation((data) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/noticeList`, data)
    },
        {
            onSuccess: (data, variable, context) => {
                setFile(data);
                Notification("Notice Publish", data.msg, "success");
                queryClint.invalidateQueries("getNotice");
            },
            onError: (error, variable, context) => {
                const err = JSON.parse(error);
                Notification("Error", err.msg, "danger");
            }
        }
    );

    const deleteNotice = useMutation((data) => {
        return api.delete(`${process.env.REACT_APP_API_HOST}/admin/noticeList`, data)
    },
        {
            onSuccess: (data, variable, context) => {
                setFile(data);
                Notification("Notice Delete", data.msg, "warning");
                queryClint.invalidateQueries("getNotice");
            },
            onError: (error, variable, context) => {
                const err = JSON.parse(error);
                Notification("Error", err.msg, "danger");
            }
        }
    );



    //
    const { data, isLoading, isError } = useQuery("getNotice", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/noticeList`);
    })

    if (isLoading) {
        return <h3>Loding Data</h3>
    }
    if (isError) {
        return <h3>Error Data</h3>
    }


    return (
        <div className="container">
            <div className="Approvestudents">
                <div className="studentapprovle">
                    <div className="containerupload">
                        <form onSubmit={mutation.mutate} method="post">
                            <div className="fileUploader">
                                <div className="upload" onClick={upload}>
                                    <CloudUploadIcon id="icon" />
                                    <input onChange={fileSelected} ref={uploadBtn} required type="file" name="file" id="file" hidden />
                                    <h4>Choese Your File</h4>
                                </div>
                                <div ref={fileshow} className="fileshow">
                                    <FileCopyIcon id="fileicon" />
                                    <p ref={filename} id="filename">FileName ......</p>
                                </div>
                                <button type='submit' id="uploadbtn">Upload</button>
                            </div>
                        </form>
                        <div className="inputdata">
                            <form onSubmit={handleSubmit(setNotice)} method="post">
                                <div className="dataform">
                                    <label htmlFor="fileurl">File Url</label>
                                    <input required type="text" {...register("noticeImg", { required: "Upload file First" })} name="noticeImg" value={file.url} id="fileUrl" placeholder='Show The File Url' readOnly />
                                    <label htmlFor="resultTitle">Notice Title</label>
                                    <input {...register("noticeTitle", { required: "Enter a Notice Title name" })} required type="text" name="noticeTitle" placeholder="Enter a Result Title" id="resultTitle" accept='.png, .jpg, .jpeg' />
                                    <label htmlFor="resultDesc">Notice Description </label>
                                    <textarea {...register("noticeDesc")} name="noticeDesc" id="resultDesc" cols="30" rows="10"></textarea>

                                    <div className="sessionYear">
                                        <div className="sessionstrt">
                                            <label htmlFor="issueDate"> Issue Date </label>
                                            <input {...register("issueDate")} className="date" type="date" name="issueDate" id="issueDate" />
                                        </div>

                                        <div className="sessionend">
                                            <label htmlFor="validUpot"> Valid Upto </label>
                                            <input {...register("validUpto")} className="date" type="date" name="validUpto" placeholder='ValidUpto' id="" />
                                        </div>
                                    </div>
                                    <div className="type">
                                        <label htmlFor="radio">Verified</label>
                                        <input {...register("verified")} type="checkbox" name="verified" id="type" />
                                        <label className="ext" required htmlFor="radio">publish</label>
                                        <input {...register("publish")} type="checkbox" name="publish" id="type" />
                                    </div>

                                    <input className="btn" type="submit" value="Upload" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="studetntapproved">
                    <div className="card">
                        <div className="card-header">
                            <h4>Notice List</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Title</td>
                                            <td>Valid Upto</td>
                                            <td>Verified</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.notices && data.notices.map((notice, index) => {
                                                return <Notice key={index} props={{ notice, publishNotice, deleteNotice }} />
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
    )
}

export default PublicNotice