import React, { useRef, useState } from 'react'
import "./resStyle.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../API/useApi";
import Notification from "../conf/Notification";
import { MomoizeYear } from '../session/Session';
import Session from "../session/Session";
import { useForm } from 'react-hook-form';
import ResultList from "./ResultList";

function ResultUpload() {

    const queryClient = useQueryClient()
    // This code is Set The Session on year.
    const thisYear = new Date().getFullYear(); // Extract a year
    const cur_year = thisYear // need curyear to display
    const [curYear, setcurYear] = useState(cur_year);
    const year = MomoizeYear(); // MomoizeYear is send a Year Array; [-5year back to , 10 Year advance value]
    // This funcion trigger after change a curent year.
    function endYear(e) {
        setcurYear(Number(e.target.value));
    }


    // This Section is Upload a file in Server. Handel a file upload api.
    const [file, setFile] = useState({ url: "" })
    const [session, setSession] = useState(false);
    const mutation = useMutation(event => {
        event.preventDefault()
        return api.filepost(`${process.env.REACT_APP_API_HOST}/admin/uploadFile`, event.target)
    },
        {
            onSuccess: (data) => {
                setFile(data);
                Notification("FileUpload", "Uploading Success", "success");
            },
            onError: () => {
                Notification("FileUpload", "Uploading faild", "danger");
            }
        })
    // File Upload Handelaer end.


    // This section is use to Handel file Sellection and Display the file name. User Identify file is selected or not.
    const uploadBtn = useRef();
    const fileshow = useRef();
    const filename = useRef();
    function upload() {
        uploadBtn.current.click();
    }
    function fileSelected(e) {
        fileshow.current.classList.add("filehide");
        filename.current.innerText = e.target.files[0].name
    }
    // File Handling section end



    // Handlin a form data

    const { register, handleSubmit, unregister } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    });

    // use Mutaiion query function which use to mutate a data in server.
    const setResult = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/admin/resultUpload`, data);
    }, {

        onError: (error, variables, context) => {
            const err = JSON.parse(error.message);
            Notification("Result Upload", err.msg, "danger");
        },
        onSuccess: (data, variables, context) => {
            Notification("Result Upload", data.msg, "success");
            queryClient.invalidateQueries('getResults');
        }

    });

    // Onsubmit funcion call.
    const resultUpload = (e) => {
        console.log(e);
        setResult.mutate({ ...e });
    }
    /// Upload Result ....


    const publishRes = useMutation((data) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/publishResult`, data)
    },
        {
            onError: (error, variables, context) => {
                const err = JSON.parse(error);
                Notification("Publish Error", err.msg, "danger");
            },
            onSuccess: (data, variables, context) => {
                Notification("Publish Success", data.msg, "success");
                queryClient.invalidateQueries('getResults');
            }
        }
    );

    const deleteRes = useMutation((data) => {
        return api.delete(`${process.env.REACT_APP_API_HOST}/admin/removeResult`, data)
    }, {
        onError: (error, variables, context) => {
            const err = JSON.parse(error);
            Notification("delete Error", err.msg, "danger");
        },
        onSuccess: (data, variables, context) => {
            Notification("Delete Success", data.msg, "warning");
            queryClient.invalidateQueries('getResults');
        }
    });



    // Handling Result Data. Get Result List
    const { data, isLoading, isError } = useQuery("getResults", () => api.get(`${process.env.REACT_APP_API_HOST}/admin/resultList`))

    if (isLoading) {
        return <h4>Data is Loading Please Wait</h4>
    }
    if (isError) {
        return <h4>SomeThing Went Wrong</h4>
    }
    // ........


    // handling Delete And approve Mutation





    return (
        <div className="container">
            <div className="Approvestudents">
                <div className="studentapprovle">
                    <div className="containerupload">
                        <div className="fileUploader">
                            <form onSubmit={mutation.mutate} method="post">
                                <div className="upload" onClick={upload}>

                                    <CloudUploadIcon id="icon" />
                                    <input required onChange={fileSelected} ref={uploadBtn} type="file" name="file" id="file" accept='.xls, .xlsx' hidden />

                                    <h4>Choese Your File</h4>
                                </div>
                                <div ref={fileshow} className="fileshow">

                                    <FileCopyIcon id="fileicon" />

                                    <p ref={filename} id="filename">FileName ......</p>
                                </div>
                                <button id="uploadbtn">Upload</button>
                            </form>
                        </div>

                        <div className="inputdata">
                            <form onSubmit={handleSubmit(resultUpload)} method="post">
                                <div className="dataform">
                                    <label htmlFor="fileurl">File Url</label>
                                    <input required type="text" value={file.url} {...register("fileUrl", { required: "First Select Your file", value: file.url })} name="fileUrl" id="fileUrl" readOnly />
                                    <label htmlFor="resultTitle">Result Title</label>
                                    <input required type="text" name="title" {...register("title")} placeholder="Enter a Result Title" id="resultTitle" />
                                    <div className="sessionYear">
                                        <div className="sessionstrt">
                                            <select {...register("sessionStartYear")} required onChange={endYear} name="sessionStartYear" id="sessionyear">
                                                <option value=""> Select Year</option>
                                                {
                                                    year.map((value, index) => {
                                                        if (value < thisYear) {
                                                            return (
                                                                <Session key={index} props={value}></Session>
                                                            );
                                                        }
                                                        return null;
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className="sessionend">
                                            <select required {...register("sessionEndYear")} name="sessionEndYear" id="sessionyeare">
                                                <option value=""> Select Year</option>
                                                {
                                                    year.map((value, index) => {
                                                        if (value > curYear) {
                                                            return (
                                                                <Session key={index} props={value}></Session>
                                                            );
                                                        }
                                                        return null;
                                                    })
                                                }
                                            </select>
                                        </div>


                                    </div>
                                    <label htmlFor="semester">Semester</label>
                                    <select required {...register("semester")} name="semester" id="semester">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>

                                    <select required name="type" {...register("type")} onChange={(e) => e.target.value === "internal" ? setSession(true) : (
                                        setSession(false),
                                        unregister("session")
                                    )
                                    } id="semester">
                                        <option defaultValue="" value="">Result type</option>
                                        <option value="internal">internal</option>
                                        <option value="external">external</option>
                                    </select>

                                    {session &&
                                        <select required {...register("session")} name="session" id="semester">
                                            <option value="">Select Session</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    }

                                    <input className="btn" type="submit" value="Upload" />
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
                <div className="studetntapproved">
                    <div className="card">
                        <div className="card-header">
                            <h4>Result List</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Title</td>
                                            <td>Session</td>
                                            <td>Type</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data[0] && data.map((result, index) => {
                                                return <ResultList key={index} props={{ result, publishRes, deleteRes }} />
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

export default ResultUpload