import React from 'react'

function ContectDetails({ props }) {
    return (
        <>
            <tr>
                <td>{props.enrolment_no}</td>
                <td>{`${props.first_name}  ${props.last_name}`}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                {/* <td><span className="status purple"></span>
                    review
                </td> */}
            </tr>
        </>
    )
}

export default ContectDetails