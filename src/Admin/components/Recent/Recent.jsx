import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./recent.css"
function Recent() {
    const pathname = useLocation().pathname + "/studentList";
    return (
        <div className="projects">
            <div className="card">
                <div className="card-header">
                    <h4>Student List</h4>
                    <Link to={pathname}> <button>see all<span className=" las la-arrow-right aero"></span></button></Link>
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
    )
}

export default Recent