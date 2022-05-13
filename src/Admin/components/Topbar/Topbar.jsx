import React from 'react'
import "./Topbar.css";
// import { NotificationsNone, Settings, Language } from '@mui/icons-material';
function Topbar() {
    return (
        <>
            <header>
                <h1>
                    <label htmlFor="nav-toggle">
                    </label>
                    Dashboard
                </h1>
                <div className="search-wrapper">
                    <span className="las la-search">  </span>
                    <input type="text" placeholder="Search Hear" />
                </div>
                <div className="user-wrapper">
                    <img src="download.jpg" width="40px" height="40px" alt="" />
                    <div>
                        <h4>mohd athar</h4><small>super admin</small>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Topbar