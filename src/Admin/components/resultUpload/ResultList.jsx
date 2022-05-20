import React from 'react'

function ResultList({ props }) {
    return (
        <tr>
            <td>{props.result.title}</td>
            <td>{`${props.result.sessionStartYear}- ${props.result.sessionEndYear}`}</td>
            <td>{props.result.type}</td>
            {
                props.result.publish ? (
                    <>
                        <td><span className="status green"></span></td>
                        <td>  <button onClick={() => props.deleteRes.mutate({ id: props.result._id })} className="btn-delete" id='actionbtn'>Delete</button></td>
                    </>
                ) : (
                    <>
                        <td><span className="status red"></span></td>
                        <td> <button onClick={() => props.publishRes.mutate({ id: props.result._id })} id='actionbtn'>Publish</button></td>
                    </>
                )
                // 
            }

        </tr>
    )
}

export default ResultList