import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css";
import { DashboardRounded, HowToRegRounded, ContactPhoneRounded, Settings, PersonRounded, BackupRounded, QuestionAnswer, CampaignRounded, AccountCircleRounded } from '@mui/icons-material/';
function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li classname="link" >
                    <DashboardRounded />
                    <Link to="/home"> Dashboard  </Link>
                </li >
                <div className="studentsec">
                    <p className='std-sec'>Suudent Section</p>
                    <li classname="link" >
                        <PersonRounded />
                        <Link to="/home"> Students List </Link>
                    </li>
                    <li classname="link" >
                        <HowToRegRounded />
                        <Link to="/home"> Students Approvle </Link>
                    </li>
                    <li classname="link" >
                        <ContactPhoneRounded />
                        <Link to="/home"> Contect Info </Link>
                    </li>

                </div>

                <div className="public">
                    <p className='annousment'>Annousment</p>
                    <li classname="link" >
                        <BackupRounded />
                        <Link to="/home">Result upload</Link>
                    </li>
                    <li classname="link" >
                        <QuestionAnswer />
                        <Link to="/home">Student Query</Link>
                    </li>
                    <li classname="link" >
                        <CampaignRounded />
                        <Link to="/home">Public Notice</Link>
                    </li>
                </div>
                <div className="staff">
                    <p className='sta'>Admin</p>
                    <li classname="link" >
                        <AccountCircleRounded />
                        <Link to="/home"> Profile </Link>
                    </li>
                    <li classname="link" >
                        <Settings />
                        <Link to="/home"> Setting </Link>
                    </li>
                </div>



            </ul>
        </div >
    )
}

export default Sidebar