import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

function AuthUser() {
    try {
        const obj = JSON.parse(localStorage.getItem("userInfo"));
        if (obj.secret)
            return true;
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