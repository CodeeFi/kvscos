import React from 'react'

function StdApprovle({ props }) {
    return (
        <>
            <tr>
                <td>{props.stu.enrolment_no}</td>
                <td>{`${props.stu.first_name} ${props.stu.last_name}`}</td>
                <td>{props.stu.course}</td>
                <td><button onClick={() => props.mutation.mutate({ id: props.stu._id })} className='btn btnApprove'> Approve </button> </td>
                <td><button onClick={() => props.DeleteStd.mutate({ id: props.stu._id })} className='btn btnDelete'> Delete </button> </td>
            </tr>
        </>
    )
}

export default StdApprovle