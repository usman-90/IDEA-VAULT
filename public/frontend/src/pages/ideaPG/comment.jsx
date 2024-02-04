/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useParams } from "react-router-dom";
import { useState } from "react";
import Postedcomment from "./postedComment";
import "./postedcomment.css";
import { postComment } from "../../functions/postComments";
import { useToasts } from "react-toast-notifications";

const Comment = ({ currSection, commentsData, path }) => {
  const { ideaid } = useParams();
  const [comment, setComment] = useState("");
  const { addToast } = useToasts();
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const obj = {
        comment: comment,
        date: new Date(),
      };

      console.log(obj);

      // Perform any action you need with the comment

      setComment("");
    }
  };

  const submitComment = async () => {

    if(comment == ""){
      return
    }
     
    ;
    const res = await postComment({ content: comment, ideaid });
    console.log(res);
    // addToast("Comment Posted Successfully! ", {
    //   appearance: "Success",
    //   autoDismiss: true,
    // });

    setComment("");
  };
  console.log(commentsData);
  return (
    <div
      className={`${
        currSection == "comment" ? "d-block" : "d-none"
      } container my-3`}
    >
      <div className="row">
        <div className="col-xlg-6  ">
          <div
            style={{ height: "10rem", border: "2px solid #07303c" }}
            className="container-fluid  commentshadow"
          >
            <div className="container-fluid d-flex gap-6 my-3">
              <div>
                <img
                  style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
                  className="img-fluid "
                  src={path}
                  alt="oo"
                />
              </div>
              <textarea
                style={{ border: "none", width: "80%", height: "3rem" }}
                className="container-fluid my-3 ml-3"
                placeholder="Write your comment..."
                value={comment}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="container-fluid d-flex justify-content-end">
              <div>
                <i
                  className="fa-regular fa-paper-plane"
                  style={{
                    color: "grey",
                    cursor: "pointer",
                    fontSize: "1.3rem",
                  }}
                  onClick={() => {submitComment()}}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "grey")}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>

      {commentsData?.comments?.map((comment) => {
        return (
          <Postedcomment
            key={comment.commentid}
            id={comment.commentid}
            time={comment.commentedat}
            content={comment.content}
            likescount={comment.likescount}
            name={comment.name}
            path={comment.path}
            replies={commentsData.replies}
          />
        );
      })}
    </div>
  );
};

export default Comment;
