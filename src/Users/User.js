import React from 'react'
import { Routes, Route } from "react-router-dom"
import RegisterLogin from './pages/auth/auth';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
function User() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<Home />}> </Route>
                    </Route>

                    <Route path='auth' element={<RegisterLogin />}> </Route>
                </Route>

            </Routes>
        </>
    )
}

export default User