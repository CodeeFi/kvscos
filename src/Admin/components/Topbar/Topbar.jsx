import React from 'react'
import "./Topbar.css";
import { NotificationsNone, Settings, Language } from '@mui/icons-material';
function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbarwrapper">
                    <div className="left">
                        <h2 className="logo">KVSCOS</h2>
                    </div>
                    <div className="right">
                        <div className="notification">
                            <NotificationsNone />
                            <span className="bage">5</span>
                        </div>
                        <div className="notification">
                            <Settings />
                        </div>
                        <div className="notification">
                            <Language />
                        </div>
                        <div className="avatar">
                            <img className='avatarimg' src="https://static.remove.bg/remove-bg-web/f4b1a5b6ab0be77785c26078f8a7569489d184da/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="Avatar" />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Topbar