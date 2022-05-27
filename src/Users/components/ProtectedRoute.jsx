import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

function AuthUser() {
    try {
        const obj = JSON.parse(localStorage.getItem("userInfo"));
        if (obj?.token)
            return true;
    } catch (error) {
        console.log(error);
        return false
    }
}


function ProtectedRoute() {
    const auth = AuthUser();
    // let auth = false;
    return (
        auth ? <Outlet /> : <Navigate to={"/home/auth"}> </Navigate>
    )
}

export default ProtectedRoute