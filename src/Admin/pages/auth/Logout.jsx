
import React from 'react'

function Logout() {

    function logout() {
        localStorage.removeItem("admin-auth");
    }


    return (
        <>
            <button onClick={logout}> Log Out</button>
        </>
    )
}

export default Logout