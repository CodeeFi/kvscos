import React, { useRef } from 'react'
import "./stdQuery.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
function PublicNotice() {
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
                                    <input required type="text" name="fileUrl" id="fileUrl" placeholder='Read Only' readOnly />
                                    <label htmlFor="resultTitle">Notice Title</label>
                                    <input required type="text" name="noticeTitle" placeholder="Enter a Result Title" id="resultTitle" />
                                    <label htmlFor="resultDesc">Notice Description </label>
                                    <textarea name="noticeDesc" id="resultDesc" cols="30" rows="10"></textarea>
                                    <div className="sessionYear">
                                        <div className="sessionstrt">
                                            <label htmlFor="issueDate"> Issue Date</label>
                                            <input type="date" name="issueDate" id="issueDate" />
                                        </div>

                                        <div className="sessionend">
                                            <label htmlFor="validUpot"> Valid Upto</label>
                                            <input type="date" name="validUpto" placeholder='ValidUpto' id="" />

                                        </div>


                                    </div>
                                    <div className="type">
                                        <label htmlFor="radio">verified</label>
                                        <input required type="checkbox" name="type" id="type" />
                                        <label className="ext" required htmlFor="radio">publish</label>
                                        <input type="checkbox" name="type" id="type" />
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

export default PublicNotice