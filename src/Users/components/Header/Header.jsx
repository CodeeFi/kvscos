import React, { useRef } from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import { Menu, Close } from '@mui/icons-material';
function Header() {

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
                            <li><Link to="/home/Notice"> Notice</Link> </li>
                            <li><Link to="/home/result"> Result</Link> </li>
                            <li><Link to="/home/auth"> Login </Link></li>
                            <li><Link to="/admin"> Admin Login </Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="text-box">
                    <h1>Worlds's Biggest University</h1>
                    <p>Making website is now one of the easiest thing in the world. you just need to learn HTML, CSS,<br />
                        JAVASCRIPT and you are good to go.
                    </p>
                    <a href="https://subharti.org" className="hero-btn">VISIT US TO KNOW MORE</a>
                </div>
            </section>

        </>
    )
}

export default Header