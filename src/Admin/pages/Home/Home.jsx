import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeComponent from './HomeComponent';
import { Routes, Route } from "react-router-dom";
import StudentList from '../../components/studentList/StudentList';
function Dashboard() {
    return (
        <>
            <div className='Dashboard'>
                <Topbar />
                <div className="containers">
                    <Sidebar />
                    <div className="other">
                        <Routes>
                            <Route exect path='/' element={<HomeComponent />}> </Route>
                            <Route path='/studentList' element={<StudentList />}> </Route>
                        </Routes>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard