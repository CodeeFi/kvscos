
import React from 'react'
import "./card.css";

function card({ props }) {
    return (

        <div className="card-single">
            <div className='cardData'>
                <h1>{props.data}</h1>
                <span>{props.name}</span>
            </div>
            <div>
                <span className={props.logo}></span>
            </div>
        </div>
    )
}

export default card