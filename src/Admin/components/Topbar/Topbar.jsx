import React from 'react'
import "./Topbar.css";
import "./download.jpg";
// import { NotificationsNone, Settings, Language } from '@mui/icons-material';
function Topbar() {
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
                        <h5>mohd athar</h5><small>super admin</small>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Topbar