import React, { useState } from 'react'
import "./stdquery.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from '../../../API/useApi';

import { useForm } from 'react-hook-form';
import Notification from "../conf/Notification"

function StudentQuery() {


    const [toggle, setToggle] = useState({ id: null, isTrue: true, });


    const [reply, setReply] = useState({ id: "", name: "" });
    const replyFun = ({ id, name }) => {
        setReply({ id, name })
    }

    //Toggle the data.

    async function ShowMore(id) {
        setToggle((value) => {
            if (value.isTrue) {
                return {
                    id,
                    isTrue: false,
                    display: "block"
                }
            } else {
                return {
                    id,
                    isTrue: true,
                    display: "block"
                }
            }
        });
        await api.get(`${process.env.REACT_APP_API_HOST}/admin/showQuery/${id}`);
    }

    const queryClint = useQueryClient();

    const replyQuery = useMutation((data) => {
        return api.put(`${process.env.REACT_APP_API_HOST}/admin/reply`, data);
    }, {

        onError: (err) => {
            Notification("Reply", "someThign Went Wrong", "danger");
        },
        onSuccess: (data) => {
            Notification("Reply", data.msg, "success");
            queryClint.invalidateQueries("getQuery");
        }

    })


    const { register, handleSubmit } = useForm()

    function sendMsg(e) {
        const data = {
            id: reply.id,
            ...e
        }

        replyQuery.mutate({ ...data });
    }



    const { data, isLoading, isError } = useQuery("getQuery", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/getQuery`);
    });

    if (isLoading) {
        return <h3>Loading Data</h3>
    }
    if (isError) {
        return <h3>Something went project.</h3>
    }

    return (
        <>
            <div className="queryContainer">
                <div className="showQuery">

                    {
                        data[0] && data.map((query, index) => {
                            return (
                                <div key={index} onClick={() => ShowMore(query._id)} className="query">
                                    <h4 key={index + 1} className='username'>{query.name} <span> {query.email}</span></h4>
                                    <h5 key={index + 2} className='queryTitle'> {query.subject} </h5>
                                    <div key={index + 3} className={toggle.id === query._id && toggle.isTrue ? "show" : "hide"} id="message">
                                        <h5 key={index + 4} >Message</h5>
                                        <p key={index + 5} className='msg'>{query.message}</p>
                                        <button key={index + 6} onClick={() => replyFun({ id: query._id, name: query.name })} className='btn'>Reply</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="replyQuery">
                    <form onSubmit={handleSubmit(sendMsg)} method="post">
                        <div className="reply">
                            <label htmlFor="id"> Student Name</label>
                            <input placeholder='Name' value={reply.name} type="text" name="id" id="" readOnly />
                            <label htmlFor="mesagearea">Reply</label>
                            <textarea  {...register("message", { required: "Need some Message" })} name="message" id="messagearea" cols="30" rows="10"></textarea>
                            <button type='submit' className='btn'> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudentQuery