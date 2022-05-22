

import React from 'react'
import "./facility.css"
function Facility() {
    return (

        <section class="facilities">
            <h1>Our Facilities</h1>
            <div class="row">
                <div class="facilities-col">
                    <img src="/img/audotoriam.gif" alt="Faciliey-img" />
                    <h3>Largest Audotoriam</h3>
                    <p> Largest Audotoriam setting capicity 2500 people thats wating for you.</p>
                </div>
                <div class="facilities-col">
                    <img src="/img/zim.jpg" alt="Faciliey-img" />
                    <h3>World Class Zim</h3>
                    <p>We provide a world calss zim in our campus for you. So you fit ourselve and feel positive </p>
                </div>
                <div class="facilities-col">
                    <img src="/img/playingArea.jpg" alt="Faciliey-img" />
                    <h3>Playing Area</h3>
                    <p>Our playing area is amazing, You can't miss our home if you are a part of my Campus </p>
                </div>
            </div>


        </section>
    )
}

export default Facility
