import React from 'react'
import { Link } from 'react-router-dom';
import "./recent.css";
function RecentStudent() {
    return (
        <div className="students">
            <div className="card">
                <div className="card-header">
                    <h4>Contect Info</h4>
                    <Link to="/admin/contectInfo"> <button>see all<span className="las la-arrow-right aero"></span></button></Link>
                </div>
                <div className="card-body">
                    <div className="customer">
                        <div className="info"><img src="download.jpg" width="40px" height="40px" alt="" />
                            <div>
                                <h4>CEO MOHD ATHAR</h4>
                                <small> CEO Expert</small>
                            </div>
                        </div>
                        <div className="contact">
                            <a href="mailto:">
                                <span className="las la-comment"></span></a>
                            <span className="las la-envelope"></span>
                            <span className="las la-phone"></span>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="info">
                            <img src="download.jpg" width="40px" height="40px" alt="" />
                            <div>
                                <h4>CEO MOHD ATHAR</h4><small> CEO Expert</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="info"> <img src="download.jpg" width="40px" height="40px" alt="" />
                            <div>
                                <h4>CEO MOHD ATHAR</h4><small> CEO Expert</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="info"> <img src="download.jpg" width="40px" height="40px" alt="" />
                            <div>
                                <h4>CEO MOHD ATHAR</h4><small> CEO Expert</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="info">
                            <img src="download.jpg" width="40px" height="40px" alt="" />
                            <div>
                                <h4>CEO MOHD ATHAR</h4><small> CEO Expert</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default RecentStudent