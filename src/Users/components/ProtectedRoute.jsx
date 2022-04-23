import React from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";

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
    const loc = useLocation();
    const auth = AuthUser();
    return (
        auth ? <Outlet /> : <Navigate to={loc.pathname + "/auth"}> </Navigate>
    )
}

export default ProtectedRoute