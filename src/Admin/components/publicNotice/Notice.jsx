import React from 'react'

function Notice({ props }) {

    const issueDate = new Date(props.notice.issueDate);
    const issuedate = issueDate.getDate() + "/" + (issueDate.getMonth() + 1);

    const validUpto = new Date(props.notice.validUpto);
    const validDate = validUpto.getDate() + "/" + (validUpto.getMonth() + 1)




    return (
        <>
            <tr>
                <td>{props.notice.noticeTitle}</td>
                <td>{`${issuedate}-${validDate}`}</td>
                {
                    props.notice.verified ? (
                        <td><span className="status green"></span></td>
                    ) :
                        (
                            <td><span className="status red"></span></td>
                        )
                }

                {
                    props.notice.publish ? (
                        <td><button onClick={() => props.deleteNotice.mutate({ id: props.notice._id })} className='btn-delete' id="actionbtn">Delete</button></td>
                    ) :
                        (
                            <td><button onClick={() => props.publishNotice.mutate({ id: props.notice._id })} id="actionbtn">Publish</button></td>
                        )
                }



            </tr>
        </>
    )
}

export default Notice