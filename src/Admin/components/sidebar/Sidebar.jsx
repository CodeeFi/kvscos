import React from 'react'
import { Link } from 'react-router-dom';


import "./sidebar.css";
import { DashboardRounded, HowToRegRounded, ContactPhoneRounded, Settings, PersonRounded, BackupRounded, QuestionAnswer, CampaignRounded, AccountCircleRounded } from '@mui/icons-material/';
function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li className="link" >
                    <DashboardRounded />
                    <Link to="/admin"> Dashboard  </Link>
                </li >
                <div className="studentsec">
                    <p className='std-sec'>Suudent Section</p>
                    <li className="link" >
                        <PersonRounded />
                        <Link to="/admin/studentList"> Students List </Link>
                    </li>
                    <li className="link" >
                        <HowToRegRounded />
                        <Link to="/admin/studentApprove"> Students Approvle </Link>
                    </li>
                    <li className="link" >
                        <ContactPhoneRounded />
                        <Link to="/admin/contectInfo"> Contect Info </Link>
                    </li>

                </div>

                <div className="public">
                    <p className='annousment'>Annousment</p>
                    <li className="link" >
                        <BackupRounded />
                        <Link to="/admin/resultUpload">Result upload</Link>
                    </li>
                    <li className="link" >
                        <QuestionAnswer />
                        <Link to="/admin/studentQuery">Student Query</Link>
                    </li>
                    <li className="link" >
                        <CampaignRounded />
                        <Link to="/admin/publidNotic">Public Notice</Link>
                    </li>
                </div>
                <div className="staff">
                    <p className='sta'>Admin</p>
                    <li className="link" >
                        <AccountCircleRounded />
                        <Link to="/admin/profile"> Profile </Link>
                    </li>
                    <li className="link" >
                        <Settings />
                        <Link to="/admin/setting"> Setting </Link>
                    </li>
                </div>
            </ul>
        </div >
    )
}

export default Sidebar