import React, { createContext } from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeComponent from './HomeComponent';
import { Routes, Route, useNavigate } from "react-router-dom";
import StudentList from '../../components/studentList/StudentList';
import StudentApprov from "../../components/studentApprove/StudentApprov";
import Contectinfo from '../../components/contectInfo/Contectinfo';
import ResultUpload from "../../components/resultUpload/ResultUpload";
import PublicNotice from "../../components/publicNotice/PublicNotice";
import StudentQuery from "../../components/studentQuery/StudentQuery";
import Profile from "../../components/Profile/Profile"
import { useQuery } from "react-query";
import api from '../../../API/useApi';
import Setting from '../../components/Setting/Setting';
export const userDetails = createContext(null);


function Dashboard() {
    const navigate = useNavigate()
    const adminAuth = localStorage.getItem("admin-auth");
    const admin = JSON.parse(adminAuth);
    const fetcher = () => api.get(`${process.env.REACT_APP_API_HOST}/admin/students`);
    const { data, isLoading, isError, isSuccess } = useQuery("testingApi", fetcher);

    if (isLoading) {
        return <h2>Wait We testing Our System</h2>
    }

    if (isError) {
        return <h2>SomeThing Went Wrong</h2>
    }

    if (isSuccess) {
        if (data.status === 403) {
            navigate("/admin/login");
            return <h1>Session Expire</h1>
        }
    }





    return (
        <>
            <div className='Dashboard'>
                <userDetails.Provider value={admin}>
                    <Topbar />
                </userDetails.Provider>
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
                            <Route path='/profile' element={<Profile props={admin} />}> </Route>
                            <Route path='/setting' element={<Setting />}> </Route>
                        </Routes>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard