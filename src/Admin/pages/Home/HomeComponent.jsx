import React from 'react'
import Card from "../../components/card/card";
import Recent from '../../components/Recent/Recent';
import "./home.css";
import RecentStudent from '../../components/Recent/RecentStudent';

function HomeComponent() {
    return (
        <>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="recent-grid">
                <Recent />
                <RecentStudent />
            </div>
        </>
    )
}

export default HomeComponent