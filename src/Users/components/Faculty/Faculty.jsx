import React from 'react'
import "./faculty.css";
<<<<<<< HEAD
import { Email, Facebook, Instagram, Twitter, } from '@mui/icons-material';
import { useQuery } from 'react-query';
import api from "../../../API/useApi"
function Faculty() {
    useQuery("getTeacherProfile", () => {
        api.get()
    })
=======
import { useQuery } from 'react-query';
import api from "../../../API/useApi"
import ProfileCard from './ProfileCard';
function Faculty() {
    const { data, isLoading, isError } = useQuery("getTeacherProfile", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/home/teacherList`);
    });

    if (isLoading) {
        return <h3>Data is loading</h3>
    }
    if (isError) {
        return <h3>SomeThing Went Wrong</h3>
    }

>>>>>>> dev
    return (
        <>
            <section className='faculty'>
                <h1>Our Faculty.</h1>
                <div className="profile">

                    {

                        data[0] && data?.slice(0, 3)?.map((profile, index) => {
                            return <ProfileCard key={index} props={profile} />
                        })
                    }


                </div>
            </section>




        </>
    )
}

export default Faculty