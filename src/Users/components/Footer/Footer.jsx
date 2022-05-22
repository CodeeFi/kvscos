import React from 'react'
import "./footer.css"
import { YouTube, LinkedIn, Facebook, Instagram, Twitter } from '@mui/icons-material';
function Footer() {
    return (

        <section class="footer">
            <h4>About us</h4>
            <p>Ranked among the top 10% of Universities in India, Swami Vivekanand Subharti University is NAAC “A” Accredited and has received numerous National and International Awards. The University has over 58 MOU’s with excellent infrastructure and an environment for research-driven learning. Spread across a lush green 250+ acre campus, the University has 14 faculties offering more than 220 programs, a 1000 bed multispeciality hospital, Libraries, fully equipped laboratories, hostels, auditoriums, banks, creche, stadium, cafes, and other recreational centers.</p>

            <div className="college-icon">
                <a id="icon" href="https://www.youtube.com/channel/UCg9Upto51X-DRkibtkRKryQ/">
                    <YouTube id="icon" />
                </a>
                <a id="icon" href="https://www.facebook.com/subhartiuni">
                    <Facebook id="icon" />
                </a>
                <a id="icon" href="https://instagram.com/subhartiuni.official">
                    <Instagram id="icon" />
                </a>
                <a id="icon" href="https://twitter.com/subhartiofficia">
                    <Twitter id="icon" />
                </a>
                <a id="icon" href="https://www.linkedin.com/company/subhartiuni/">
                    <LinkedIn id="icon" />
                </a>


            </div>

            <div className="created-by">
                <h6>Created By </h6>
                <sapn> <i>Aadarsh</i> & Athar</sapn>

            </div>
        </section>
    )
}

export default Footer