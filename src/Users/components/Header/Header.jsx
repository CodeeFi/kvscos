import React, { useRef, useContext } from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import { Menu, Close } from '@mui/icons-material';
import { context } from '../../User';
import Logout from '../../pages/auth/Logout';
function Header() {

    const userInfo = useContext(context);
    console.log(userInfo);

    const shownav = useRef()
    function navClick(data) {
        if (data)
            return shownav.current.classList.remove("showNav");

        return shownav.current.classList.add("showNav");
    }


    return (
        <>
            <section className="header">
                <nav>
                    <a href="homepage.html"><img className="t" src="logo.png" alt='logoimg' /></a>
                    <Menu onClick={() => navClick(false)} id="menu" ></Menu>
                    <div ref={shownav} className="nav-links">
                        <ul>
                            <Close onClick={() => navClick(true)} id="close" />
                            <li><Link to="/home"> Home</Link> </li>
                            <li><Link to="/home/about"> About </Link> </li>
                            <li><Link to="/home/contect"> Contect Us </Link> </li>
                            <li><Link to="/home/result"> Result</Link> </li>
                            {
                                userInfo ? (
                                    <>
                                        <li><h5 id='username'> Welcome {userInfo.first_name}</h5></li>
                                        <li> <Logout /> </li>
                                    </>
                                ) :
                                    <li><Link to="/home/auth"> Login </Link></li>
                            }

                            <li><Link to="/admin"> Admin Login </Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="text-box">
                    <h1> India's Best University</h1>
                    <p> <span id='punchLine'> Wrold is Hear Where You are?. </span> India's Best University.<br /> <span id="tagline"> उठो, जागो और तब तक नहीं रुको जब तक लक्ष्य ना प्राप्त हो जाए</span>
                    </p>
                    <a href="https://subharti.org" className="hero-btn">VISIT US TO KNOW MORE</a>
                </div>
            </section>

        </>
    )
}

export default Header