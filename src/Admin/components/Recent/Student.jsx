import React from 'react'

function Student({ props }) {
    return (
        <>
            <tr>
                <td>{props.enrolment_no}</td>
                <td>{`${props.first_name} ${props.last_name}`}</td>
                <td>{props.course}</td>
                {props.approved ?
                    <td><span className="status green"></span>
                        Approved
                    </td>
                    :
                    <td><span className="status red"></span>
                        review
                    </td>
                }

            </tr>
        </>
    )
}

export default Student