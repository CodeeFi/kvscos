import React, { useState } from 'react'
import "./stdquery.css";
function StudentQuery() {

    const [toggle, setToggle] = useState({ display: "none" });
    function showMore() {
        setToggle((toggle) => {
            if (toggle.display === "none")
                return {
                    display: "block"
                }
            return {
                display: "none"
            }
        });
    }
    return (
        <>
            <div className="queryContainer">
                <div className="showQuery">
                    <div className="query">
                        <h4 className='username'>Aadarsh  <span> BCA </span></h4>
                        <h5 className='queryTitle'> Sir i have some Prouble of my I card can you change i cant add a data into a database </h5>
                        <button onClick={showMore} className='btn'>{toggle.display === "none" ? "Show" : "Hide"}</button>
                        <div style={toggle} className="message">
                            <h5>Message</h5>
                            <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis explicabo error dolor earum provident est esse repudiandae, tenetur porro cupiditate nemo!</p>
                            <button className='btn'>Reply</button>
                        </div>
                    </div>
                    <div className="query">
                        <h4 className='username'>Aadarsh  <span> BCA </span></h4>
                        <h5 className='queryTitle'> Sir i have some Prouble of my I card can you change i cant add a data into a database </h5>
                        <button onClick={showMore} className='btn'>{toggle.display === "none" ? "Show" : "Hide"}</button>
                        <div style={toggle} className="message">
                            <h5>Message</h5>
                            <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis explicabo error dolor earum provident est esse repudiandae, tenetur porro cupiditate nemo!</p>
                            <button className='btn'>Reply</button>
                        </div>
                    </div>

                    <div className="query">
                        <h4 className='username'>Aadarsh  <span> BCA </span></h4>
                        <h5 className='queryTitle'> Sir i have some Prouble of my I card can you change i cant add a data into a database </h5>
                        <button onClick={showMore} className='btn'>{toggle.display === "none" ? "Show" : "Hide"}</button>
                        <div style={toggle} className="message">
                            <h5>Message</h5>
                            <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis explicabo error dolor earum provident est esse repudiandae, tenetur porro cupiditate nemo!</p>
                            <button className='btn'>Reply</button>
                        </div>
                    </div>
                </div>


                {/*  Reply Query Section */}
                <div className="replyQuery">
                    <form action="" method="post">
                        <div className="reply">
                            <label htmlFor="id"> Student Name</label>
                            <input type="text" name="id" id="" hidden />
                            <input placeholder='Name' type="text" name="id" id="" />
                            <label htmlFor="mesagearea">Reply</label>
                            <textarea name="message" id="messagearea" cols="30" rows="10"></textarea>
                            <button className='btn'> Send </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default StudentQuery