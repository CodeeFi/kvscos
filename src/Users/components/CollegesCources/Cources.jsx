
import React from 'react'
import { useQuery } from "react-query"
import api from '../../../API/useApi'

function Cources({ props }) {

    console.log(props.id);

    const { data, isLoading, isError, isFetching } = useQuery(["getCources", props.id], () => {
        return api.get(`${process.env.REACT_APP_API_HOST}/home/getCourse/${props.id}`);
    }, {
        enabled: !!props.id
    });

    if (isLoading || isFetching) {
        return <option>Loading Data...</option>
    }
    if (isError) {
        return <option>SomeThing Went Wrong.</option>
    }



    return (

        <>
            {
                data?.courses && data?.courses?.map((course, index) => {
                    return <option key={index} value={course}>{course}</option>
                })

            }

        </>
    )
}

export default Cources