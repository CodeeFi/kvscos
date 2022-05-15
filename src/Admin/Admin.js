
import React from 'react'
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from './pages/auth/Login';
import AdminRegister from "./pages/auth/AdminRegister"
import ProtectedRoute from "./components/conf/ProtectedRoute"
function Admin() {
    return (
        <div className='bootstrap-iso'>
            <Routes>
                <Route path='/' element={<ProtectedRoute />}>
                    <Route path='/*' element={<Home />}> </Route>
                    <Route path='/' element={<Home />}> </Route>
                </Route>

                <Route path='/login' element={<Login />}> </Route>
                <Route path='/register' element={<AdminRegister />}> </Route>
            </Routes>
        </div>
    )

}

export default Admin