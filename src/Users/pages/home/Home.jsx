import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
function Home() {
    return (
        <>
            <Button variant="contained">Hello World</Button>
            <HomeIcon />
            <AcUnitIcon />
            <h2>This is user Home page</h2>
        </>
    )
}

export default Home