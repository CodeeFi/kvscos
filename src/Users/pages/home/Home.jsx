import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <Link to="/admin">
                <Button variant="contained"> Admin Page </Button>
            </Link>
            <h2>This is user Home page</h2>
        </>
    )
}

export default Home