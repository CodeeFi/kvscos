import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeComponent from './HomeComponent';
import { Routes, Route } from "react-router-dom";
import StudentList from '../../components/studentList/StudentList';
import StudentApprov from "../../components/studentApprove/StudentApprov";
import Contectinfo from '../../components/contectInfo/Contectinfo';
import ResultUpload from "../../components/resultUpload/ResultUpload";
import PublicNotice from "../../components/publicNotice/PublicNotice";
import StudentQuery from "../../components/studentQuery/StudentQuery"
import Login from '../auth/Login';
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
                            <Route path='/studentApprove' element={<StudentApprov />}> </Route>
                            <Route path='/contectInfo' element={<Contectinfo />}> </Route>
                            <Route path='/resultUpload' element={<ResultUpload />}> </Route>
                            <Route path='/studentQuery' element={<StudentQuery />}> </Route>
                            <Route path='/publidNotice' element={<PublicNotice />}> </Route>
                            <Route path='/profile' element={<StudentList />}> </Route>
                            <Route path='/setting' element={<StudentList />}> </Route>
                            <Route path='/login' element={<Login />}> </Route>
                        </Routes>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard