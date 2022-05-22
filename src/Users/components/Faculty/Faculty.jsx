import React from 'react'
import "./faculty.css";
import { Email, Facebook, Instagram, Twitter, } from '@mui/icons-material';
import { useQuery } from 'react-query';
import api from "../../../API/useApi"
function Faculty() {
    useQuery("getTeacherProfile", () => {
        api.get()
    })
    return (
        <>
            <section className='faculty'>
                <h1>Our Faculty.</h1>
                <div className="profile">
                    <div className="profile-card">
                        <div className="profile-header">
                            <div className="banner"></div>
                            <div className="profileimg">
                                <img src="download.jpg" alt="" />
                            </div>
                        </div>
                        <div className="profile-body">
                            <div className="name">
                            </div>
                            <div className="profieldata">
                                <h5>Aadarsh Singh</h5>
                                <p>Proffessor</p>
                                <p>Computer Application</p>
                            </div>
                            <div className="socal-icon">
                                <a id="icon" href="mailto:aadarsh121@gm.com">
                                    <Email id="icon" />
                                </a>
                                <a id="icon" href="mailto:aadarsh121@gm.com">
                                    <Facebook id="icon" />
                                </a>
                                <a id="icon" href="mailto:aadarsh121@gm.com">
                                    <Instagram id="icon" />
                                </a>
                                <a id="icon" href="mailto:aadarsh121@gm.com">
                                    <Twitter id="icon" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default Faculty