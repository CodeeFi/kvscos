import React from 'react'
import Card from "../../components/card/card";
import Recent from '../../components/Recent/Recent';
import "./home.css";
import RecentStudent from '../../components/Recent/RecentStudent';
// import { useQuery } from "react-query"


function HomeComponent() {
    return (
        <>
            <div className="cards">
                <Card props={{ data: 44, name: "Approved Student" }} />
                <Card props={{ data: 443, name: "Approvle" }} />
                <Card props={{ data: 55, name: "Total Query" }} />
                <Card props={{ data: 500, name: "Total Student" }} />
            </div>
            <div className="recent-grid">
                <Recent />
                <RecentStudent />
            </div>
        </>
    )
}

export default HomeComponent