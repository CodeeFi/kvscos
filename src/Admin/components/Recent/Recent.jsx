import React from 'react'
import "./recent.css"
function Recent() {
    return (
        <div class="projects">
            <div class="card">
                <div class="card-header">
                    <h3>recent projects</h3>
                    <button>see all<span class=" las la-arrow-right"></span></button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">



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
                                    <td><span class="status purple"></span>
                                        review
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>
                                    <td>Frontend</td>
                                    <td><span class="status pink"></span>
                                        in proress
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ushop app</td>
                                    <td>Mobile Team</td>
                                    <td><span class="status red"></span>
                                        pending
                                    </td>
                                </tr>
                                <tr>
                                    <td>UI/UX Design</td>
                                    <td>UI Team</td>
                                    <td><span class="status purple"></span>
                                        review
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>
                                    <td>Frontend</td>
                                    <td><span class="status pink"></span>
                                        in proress
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ushop app</td>
                                    <td>Mobile Team</td>
                                    <td><span class="status red"></span>
                                        pending
                                    </td>
                                </tr>
                                <tr>
                                    <td>UI/UX Design</td>
                                    <td>UI Team</td>
                                    <td><span class="status purple"></span>
                                        review
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>
                                    <td>Frontend</td>
                                    <td><span class="status pink"></span>
                                        in proress
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ushop app</td>
                                    <td>Mobile Team</td>
                                    <td><span class="status red"></span>
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