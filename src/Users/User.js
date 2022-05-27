import React, { createContext } from 'react'
import { Routes, Route } from "react-router-dom"
import RegisterLogin from './pages/auth/auth';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Result from "./components/Result/Result";
import Contect from "./components/ContectUS/Contect";
import Notice from './components/Notice/Notice';
import NoticeDetaice from './components/Notice/NoticeDetaice';
export const context = createContext(null);

function User() {

    const user = JSON.parse(localStorage.getItem("userInfo"));


    return (
        <>
            <context.Provider value={user} >
                <Routes>
                    <Route exact path='/'>
                        <Route index element={<Home />}> </Route>
                        <Route path='auth' element={<RegisterLogin />}> </Route>

                        <Route path='/result' element={<ProtectedRoute />}>
                            <Route path="/result" element={<Result />}> </Route>
                        </Route>

                        <Route path='/Notice' element={<ProtectedRoute />}>
                            <Route path="/Notice" element={<Notice />}> </Route>
                        </Route>
                        <Route path='/noticeDetail/:id' element={<NoticeDetaice />}></Route>
                        <Route path='/contect' element={<Contect />}> </Route>
                    </Route>
                </Routes>
            </context.Provider>
        </>
    )
}

export default User