import React from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate = useNavigate();

    function logout() {
        localStorage.clear("userInfo");
        navigate("/");
    }

    return (
        <>
            <h6 id='logout' onClick={logout} >Log out</h6>
        </>
    )
}

export default Logout