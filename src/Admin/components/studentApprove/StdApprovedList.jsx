import React from 'react'

// /admin/approvedStudent

function StdApprovedList({ props }) {
    return (
        <tr>
            <td>{props.stu.enrolment_no}</td>
            <td>{`${props.stu.first_name} ${props.stu.last_name}`}</td>
            <td><span className="status green"></span> </td>
            <td><button onClick={() => props.DeleteStd.mutate({ id: props.stu._id })} className='btn btnDelete'>Delete</button> </td>
        </tr>
    )
}

export default StdApprovedList