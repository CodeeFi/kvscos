
import React from 'react'
import { useQuery } from "react-query"
import api from '../../../API/useApi'



function College() {

    const { data, isLoading, isError, isFetching } = useQuery("getCollegeList", () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/admin/collegeList`);
    })

    if (isLoading || isFetching) {
        return <option>Loading Data...</option>
    }
    if (isError) {
        return <option>SomeThing Went Wrong.</option>
    }


    return (
        <>
            {
                data[0] && data?.map((college, index) => {
                    return <option value={college._id}>{college.collegeName}</option>
                })
            }
        </>
    )
}

export default College