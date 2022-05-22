import React from 'react'
import "./campus.css"
function Campus() {
    return (
        <>
            <section class="campus">
                <h1>Our Campus</h1>
                <p>250 Acre Its a huse Campus Size Provide best Facility and infraStructure. </p>


                <div class="row">
                    <div class="campus-col">
                        <img src="campus2.png" alt='college' />
                        <div class="layer">
                            <h3>Cafeteria</h3>
                        </div>
                    </div>
                    <div class="campus-col">
                        <video autoPlay loop muted src="campus1.mp4" ></video>
                        <div class="layer">
                            <h3>Play Ground</h3>
                        </div>
                    </div>
                    <div class="campus-col">
                        <img src="campus3.png" alt='college' />
                        <div class="layer">
                            <h3>Creativity</h3>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Campus