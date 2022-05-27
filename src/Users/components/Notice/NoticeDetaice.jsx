import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import api from '../../../API/useApi';
import "./notice.css";
function NoticeDetaice() {
    const param = useParams();

    const { data, isLoading, isError } = useQuery("getNotice Details", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/home/notice/${param.id}`)
    })

    if (isLoading) {
        return <h3>Wait a second Data is loading</h3>
    }
    if (isError) {
        return <h3>Wait a second Data is loading</h3>
    }

    return (
        <>
            <div className="noticeDeatil">
                <div className="notice-data-d">
                    <label htmlFor="">Notice Title</label>
                    <h2>{data.noticeTitle}</h2>

                    <img className="img-notice" width="500px" src={`${process.env.REACT_APP_API_HOST}/home/image/${data.noticeImg}`} alt="NoticeImage" />

                    <label htmlFor="">Notice Deatils</label>
                    <p>{data.noticeDesc}</p>
                    {
                        data.verified && (
                            <>
                                <label htmlFor="">Status</label>
                                <div className="verified">  </div>
                            </>
                        )

                    }
                    <Link className='backtohome' to="/home">Back to Home</Link>
                </div>
            </div>
        </>
    )
}

export default NoticeDetaice