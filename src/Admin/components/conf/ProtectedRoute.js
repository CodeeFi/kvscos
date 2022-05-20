import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

function AuthUser() {
    try {
        const obj = JSON.parse(localStorage.getItem("admin-auth"));
        if (obj && obj.token) {
            return true
        }
        else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return false
    }
}


function ProtectedRoute() {
    const auth = AuthUser();
    return (
        auth ? <Outlet path="/*" /> : <Navigate to={"/admin/login"}> </Navigate>
    )
}

export default ProtectedRoute