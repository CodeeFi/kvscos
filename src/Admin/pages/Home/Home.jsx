import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/card";
import Recent from '../../components/Recent/Recent';
import "./home.css";
import RecentStudent from '../../components/Recent/RecentStudent';

function Dashboard() {
    return (
        <>
            <div className='Dashboard'>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <div className="other">
                        <div class="cards">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div class="recent-grid">
                            <Recent />
                            <RecentStudent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard