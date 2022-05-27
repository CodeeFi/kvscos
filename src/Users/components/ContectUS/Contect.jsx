import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import "./contectUs.css"
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../API/useApi";
import Notification from '../Notification';
import { context } from "../../User"
function Contect() {

    const user = useContext(context);
    const queryClint = useQueryClient();
    const formSubmit = useMutation((data) => {
        return api.post(`${process.env.REACT_APP_API_HOST}/home/studentQuery`, data);
    }, {
        onError: (err, variables, context) => {
            const e = JSON.parse(err.message);
            Notification("Error", e.msg, "danger");
        },
        onSuccess: (data, variables, context) => {
            Notification("Query Submit", data.msg, "success");
            queryClint.invalidateQueries("getQueryList");

        }
    })
    const { register, handleSubmit } = useForm()
    const ContectUs = (e) => {
        formSubmit.mutate({ ...e });
    }
    const { data, isLoading, isError } = useQuery("getQueryList", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/home/queryList/${user.email}`)
    }, {
        enabled: !!user?.email
    });

    if (isLoading) {
        return <h4>Data is Loading</h4>
    }
    if (isError) {
        return <h4>SomeThing Went Wrong</h4>
    }

    return (
        <div className="query-form">
            <div class="containerContect">
                <form id="contact" onSubmit={handleSubmit(ContectUs)} method="post">
                    <h3>Contect Us</h3>
                    <h4>Contact us for custom quote</h4>
                    <fieldset>
                        <input {...register("name", { required: "Please Enter Your Name" })} placeholder="Your name" type="text" tabindex="1" required autofocus />
                    </fieldset>
                    <fieldset>
                        {
                            user?.email ? (
                                <input {...register("email", { required: "Enter Email id" })} placeholder="Your Email Address" value={user.email} type="email" tabindex="2" required />
                            ) :
                                (
                                    <input {...register("email", { required: "Enter Email id" })} placeholder="Your Email Address" type="email" tabindex="2" required />
                                )
                        }

                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" />
                    </fieldset>
                    <fieldset>
                        <input {...register("subject", { required: "Enter Your Subject" })} placeholder="Your Subject hear" type="text" tabindex="4" required />
                    </fieldset>
                    <fieldset>
                        <textarea {...register("message", { required: "Enter a message" })} placeholder="Type your message here...." tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>


            {
                user?.email && (
                    <div className="reply">
                        <div className="studetntapproved">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Query Status</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <td>Name</td>
                                                    <td> Title</td>
                                                    <td>Status</td>
                                                    <td>View</td>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    data?.[0] && data?.map((q, index) => {
                                                        return <>
                                                            <tr>
                                                                <td>{q.name}</td>
                                                                <td>{q.subject}</td>
                                                                <td>{q.visiblity ? "Seen" : "Pending"}</td>
                                                                <td> <button> See Reply </button></td>
                                                            </tr>
                                                        </>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Contect