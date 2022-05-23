import React from 'react'
import { Email, Facebook, Instagram, Twitter } from '@mui/icons-material';

function ProfileCard({ props }) {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="banner"></div>
                <div className="profileimg">
                    <img src={props.imageUrl ? `${process.env.REACT_APP_API_HOST}/home/image/${props.imageUrl}` : "download.jpg"} alt="" />
                </div>
            </div>
            <div className="profile-body">
                <div className="name">
                </div>
                <div className="profieldata">
                    <h5>{props.fullName}</h5>
                    <p>{props.designation}</p>
                    <p>{props.specialization}</p>
                </div>
                <div className="socal-icon">
                    <a id="icon" href={`"mailto:${props.email}`}>
                        <Email id="icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" id="icon" href={`https://fb.com/${props.fbUrl}`}>
                        <Facebook id="icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" id="icon" href={`https://instagram.com/${props.instagramUrl}`}>
                        <Instagram id="icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" id="icon" href={`https://twitter.com/${props.twiterUrl}`}>
                        <Twitter id="icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProfileCard