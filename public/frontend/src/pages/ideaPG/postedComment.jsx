/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import "./postedcomment.css";
import Reply from "./reply.jsx";
import { formatTime } from "../../helpers/formatTime";
import { likeComment, postReply } from "../../functions/reply";


const Replybox = ({ setreply, reply, setreplydisplay, commentid }) => {
  
  const sendreply = async () => {
    const res = await postReply({ replyContent: reply, commentid });
    console.log(res);
    
    setreply("");
    setreplydisplay(false);
  };
  const handleChangeOfReply = (e) => {
    setreply(e.target.value);
  };

  return (
    <div style={{ flexDirection: "row", width: "100%" }} className="d-flex">
      <textarea
        style={{ width: "100%" }}
        value={reply}
        className="reply-box p-2"
        placeholder="Write your comment..."
        onChange={handleChangeOfReply}
      />
      <div>
        <i
          className="fa-regular fa-paper-plane"
          style={{
            color: "grey",
            cursor: "pointer",
            fontSize: "1.3rem",
            marginTop: "16px",
            marginLeft: "5px",
          }}
          onClick={sendreply}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "grey")}
        ></i>
      </div>
    </div>
  );
};

const Postedcomment = ({
  id,
  replies,
  path,
  name,
  likescount,
  time,
  content,
}) => {
  const [reply, setreply] = useState("");
  const [replydisplay, setreplydisplay] = useState(false);
  const [likescolor, setlikescolor] = useState("");
  const [filteredReplies,setfilteredReplies] = useState([])

  const postLike = async () => {
    const res = await likeComment(id);
    console.log(res);
  
  }
  console.log(replies)
  useEffect(()=> {
    const myfilteredReplies = replies.filter((reply) => {
      console.log(reply.replyid)
      return id == reply.commentid;
      
    });
    setfilteredReplies(myfilteredReplies)

  },[replies])

  console.log(filteredReplies);
  return (
    <div className="row my-4">
      <div className="col-xlg-6">
        <div
          style={{ border: "2px solid #07393c" }}
          className="container-fluid  my-2"
        >
          <div
            style={{
              border: "2px solid #07393c",
              backgroundColor: "#07393c",
              color: "white",
            }}
            className=" container-fluid d-flex gap-2 py-1 my-2  "
          >
            <div>
              <img
                style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                className="img-fluid mx-2"
                src={path}
                alt="oo"
              />
            </div>
            <div
              style={{ justifyContent: "space-between", alignItems: "center" }}
              className="container-fluid d-flex commentheader"
            >
              <h6 style={{ fontSize: ".9rem" }}>{name}</h6>
              <h6 style={{ fontSize: ".9rem" }} className="">
                {formatTime(time)}
              </h6>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container-fluid ">
              <p style={{ height: "maxcontent" }}>{content}</p>
              <div className="d-flex gap-3 my-2">
                <i
                  onClick={async () => {
                    await postLike();
                    setlikescolor("blue");
                  }}
                  className={`${
                    likescolor == "blue" ? "activelikescolor" : ""
                  } fa-solid fa-thumbs-up`}
                >
                  <span>{likescount}</span>
                </i>
                <i
                  onClick={() => {
                    setlikescolor("red");
                  }}
                  className={`${
                    likescolor == "red" ? "activedislikescolor" : ""
                  } fa-sharp fa-solid fa-thumbs-down`}
                ></i>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setreplydisplay(true);
                  }}
                >
                  <b>Reply</b>{" "}
                </p>
                {replydisplay == true && (
                  <Replybox
                    commentid={id}
                    setreplydisplay={setreplydisplay}
                    setreply={setreply}
                    reply={reply}
                  />
                )}
              </div>
            </div>
          </div>
          {filteredReplies.map((reply) => {
            return (
              <Reply
                name={reply.name}
                path={reply.path}
                replycontent={reply.replycontent}
                key={reply.replyid}
                replytime={reply.replytime}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Postedcomment;
