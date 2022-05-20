import React, { useContext } from 'react'
import "./Topbar.css";
import "./download.jpg";
import { userDetails } from "../../pages/Home/Home";
// import { NotificationsNone, Settings, Language } from '@mui/icons-material';
function Topbar() {
    const data = useContext(userDetails);
    return (
        <>
            <header>
                <h2>
                    <label htmlFor="nav-toggle">
                    </label>
                    Dashboard
                </h2>
                <div className="search-wrapper">
                    <span className="las la-search">  </span>
                    <input type="text" placeholder="Search Hear" />
                </div>
                <div className="user-wrapper">
                    <img src="download.jpg" width="40px" height="40px" alt="" />
                    <div>
                        <h5>{data && `${data.firstName}  ${data.lastName}`}</h5><small>{data && data.adminType ? "super admin" : "admin"}</small>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Topbar