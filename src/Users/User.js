import React from 'react'
import { Routes, Route } from "react-router-dom"
import RegisterLogin from './pages/auth/auth';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Result from "./components/Result/Result";

function User() {
    return (
        <>
            <Routes>
                <Route exact path='/'>
                    <Route index element={<Home />}> </Route>
                    <Route path='auth' element={<RegisterLogin />}> </Route>
                    <Route path='result' element={<ProtectedRoute />}>
                        <Route path="/result" element={<Result />}> </Route>
                    </Route>

                    <Route path='Notice' element={<ProtectedRoute />}>
                        <Route path="/Notice" element={<Result />}> </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default User