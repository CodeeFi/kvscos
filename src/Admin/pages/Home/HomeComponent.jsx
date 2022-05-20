import React from 'react'
import Card from "../../components/card/card";
import Recent from '../../components/Recent/Recent';
import "./home.css";
import RecentStudent from '../../components/Recent/RecentStudent';
import { useQuery } from "react-query"
import api from "../../../API/useApi"

const fetcher = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/students`);

function HomeComponent() {

    const { data, isLoading, isError, isSuccess } = useQuery("studentDetails", fetcher);


    if (isLoading)
        return <h2> Loading Data </h2>

    if (isError) {
        return <h3>Session Expire </h3>
    }


    let approvel;
    if (isSuccess) {
        approvel = data.totalStudents - data.approvedStudent;
    }

    return (
        <>
            <div className="cards">
                <Card props={{ data: data.approvedStudent, name: "Approved Student" }} />
                <Card props={{ data: approvel, name: "Approvle" }} />
                <Card props={{ data: data.totalQuery, name: "Total Query" }} />
                <Card props={{ data: data.totalStudents, name: "Total Student" }} />
            </div>
            <div className="recent-grid">
                <Recent />
                <RecentStudent />
            </div>
        </>
    )
}

export default HomeComponent