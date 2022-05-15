import React, { useRef } from 'react'
import "./resStyle.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
function ResultUpload() {


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




    return (
        <div className="container">
            <div className="Approvestudents">
                <div className="studentapprovle">
                    <div className="containerupload">
                        <div className="fileUploader">
                            <div className="upload" onClick={upload}>

                                <CloudUploadIcon id="icon" />
                                <input onChange={fileSelected} ref={uploadBtn} type="file" name="file" id="file" hidden />

                                <h4>Choese Your File</h4>
                            </div>
                            <div ref={fileshow} className="fileshow">

                                <FileCopyIcon id="fileicon" />

                                <p ref={filename} id="filename">FileName ......</p>
                            </div>
                            <button id="uploadbtn">Upload</button>
                        </div>
                        <div className="inputdata">
                            <form action="" method="post">
                                <div className="dataform">
                                    <label htmlFor="fileurl">File Url</label>
                                    <input required type="text" name="fileUrl" id="fileUrl" readOnly />
                                    <label htmlFor="resultTitle">Result Title</label>
                                    <input required type="text" name="title" placeholder="Enter a Result Title" id="resultTitle" />
                                    <div className="sessionYear">
                                        <div className="sessionstrt">
                                            <select required name="sessionStartYear" id="sessionyear">
                                                <option value="">Session Start</option>
                                                <option value="">2012</option>
                                                <option value="">2020</option>
                                                <option value="">2021</option>
                                            </select>
                                        </div>

                                        <div className="sessionend">
                                            <select required name="sessionStartYear" id="sessionyeare">
                                                <option value="">Session End</option>
                                                <option value="">2015</option>
                                                <option value="">2016</option>
                                                <option value="">2027</option>
                                                <option value="">2022</option>
                                            </select>
                                        </div>


                                    </div>
                                    <label htmlFor="semester">Semester</label>
                                    <select required name="sessionStartYear" id="semester">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                    <div className="type">
                                        <label htmlFor="radio">Internal
                                        </label>
                                        <input required type="radio" name="type" id="type" />
                                        <label className="ext" required htmlFor="radio">External</label>
                                        <input type="radio" name="type" id="type" />
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
                            <h4>Student List</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Project Title</td>
                                            <td>Department</td>
                                            <td>status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td><span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td><span className="status pink"></span>
                                                in proress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status red"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td><span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td><span className="status pink"></span>
                                                in proress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status red"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td><span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td><span className="status pink"></span>
                                                in proress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status red"></span>
                                                pending
                                            </td>
                                        </tr>
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