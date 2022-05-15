
import React from 'react'
import "./card.css";

function card({ props }) {

    console.log(props);
    return (

        <div className="card-single">
            <div className='cardData'>
                <h1>{props.data}</h1>
                <span>{props.name}</span>
            </div>
            <div>
                <span className="las la-users"></span>
            </div>
        </div>
    )
}

export default card