import React, { useState } from 'react'
import "./notice.css";
import { useQuery } from "react-query";
import api from "../../../API/useApi"
import { Link } from 'react-router-dom';
function Notice() {

    const [notice, setNotice] = useState({ id: "" })
    console.log(notice);
    function noticeClick({ id, url }) {
        setNotice({ id, url })
    }

    const { data, isLoading, isError, isSuccess } = useQuery("getNoticeList", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/home/noticList`);
    })

    if (isLoading) {
        <h4>Wait Data is loding </h4>
    }
    if (isError) {
        <h4>SomeThing Went Wrong</h4>
    }
    if (isSuccess) {
    }

    return (
        <div className="conatiner-notice">
            <div className="noticeContainer">
                <div className="noticeList">
                    {
                        data?.map((notice, index) => {
                            return (
                                <>

                                    <div onClick={() => noticeClick({ id: notice._id, url: notice.noticeImg })} className="notice">
                                        <div className="noticeimg">
                                            <img className='noticeimg' src={`${process.env.REACT_APP_API_HOST}/home/image/${notice.noticeImg}`} alt="" />
                                        </div>
                                        <div className="notice-data">
                                            <h4 className='notice-title'>{notice.noticeTitle}</h4>
                                            <span>{new Date(notice.validUpto).toDateString()}</span>
                                            <Link className='seeMore' to={`/home/noticeDetail/${notice._id}`}> See More</Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                    }

                </div>
                <div className="noticedetails">
                    <div className="img-notice-upload">
                        <img className='img-notice' src={notice?.url ? `${process.env.REACT_APP_API_HOST}/home/image/${notice.url}` : "notice.jpg"} alt="NoticeImage" />
                        {
                            notice.url ?
                                <Link className='notice-btn' to={`/home/noticeDetail/${notice.id}`}> See More. </Link>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notice