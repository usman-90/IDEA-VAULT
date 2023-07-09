/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import Postedcomment from "./postedComment";
import "./postedcomment.css"

const Comment = () => {
  const [comment, setComment] = useState("");
 
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const obj = {
        comment: comment,
        date: new Date()
      };
      
      console.log(obj);
      
      // Perform any action you need with the comment
      
      setComment("");
    }
  };

  const submitComment = () => {
    // Perform any action you need with the comment
    const obj = {
      comment: comment,
      date: new Date()
    };
    console.log(obj);

    setComment("");
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-xlg-6  ">
          <div style={{ height: "10rem",border:"2px solid #07303c" }} className="container-fluid  commentshadow">
            <div className="container-fluid d-flex gap-6 my-3">
              <div>
                <img style={{ width: "4rem", height: "4rem", borderRadius: "50%" }} className="img-fluid " src="../images/edu.jpg" alt="oo" />
              </div>
              <textarea
                style={{ border: "none", width: "80%" }}
                className="container-fluid my-3 ml-3"
                placeholder="Write your comment..."
                value={comment}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="container-fluid d-flex justify-content-end">
              <div >
              <i
                  className="fa-regular fa-paper-plane"
                  style={{ color: "grey", cursor: "pointer", fontSize: "1.3rem" }}
                  onClick={submitComment}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "grey")}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
      <Postedcomment/>
    </div>
  );
};

export default Comment;
