import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
function Dashboard() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="other">
                    others
                </div>
            </div>


        </>
    )
}

export default Dashboard