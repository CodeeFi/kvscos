
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from './pages/auth/Login';
function Admin() {
    return (
        <>
            <Routes>
                <Route exect path='/' element={<Home />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
            </Routes>

        </>
    )
}

export default Admin