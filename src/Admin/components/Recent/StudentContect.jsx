import React from 'react'

function StudentContect({ props }) {
    return (
        <div className="customer">
            <div className="info"><img src="download.jpg" width="40px" height="40px" alt="" />
                <div>
                    <h4>{`${props.first_name} ${props.last_name}`}</h4>
                    <small>E Id {props.enrolment_no}</small>
                </div>
            </div>
            <div className="contact">
                <a href={`mailto:${props.email}`}>
                    <span className="las la-envelope"></span></a>

                <span className="las la-comment"> </span>
                <a href={`tel:${props.phone}`}>
                    <span className="las la-phone"></span>
                </a>
            </div>
        </div>
    )
}

export default StudentContect