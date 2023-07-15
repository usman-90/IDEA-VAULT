/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import MyCircularProgress from "../../components/circlecount/progreebar";
import "../../style/detail.css";
// import DetailNav from "../pages/ideaPG/detailNav";

const Details = ({ title, tagline, name, country, funding, teamMembers }) => {
  const upvote=10;
  
  const srcArr = [
    "../images/art.jpg",
    "../images/business2.jpg",
    "../images/sci.jpg",
    "../images/edu.jpg",
    "../images/techimg.jpg",
    "../images/travel.jpg",
  ];
  const [currentImg, setCurrentImg] = useState(srcArr[0]);
  const [buttonColor, setButtonColor] = useState('');
  // const [upvoteCount, setUpvoteCount] = useState(25);
  // const [downvoteCount, setDownvoteCount] = useState(9);
  const handleUpvoteClick = () => {
    if (buttonColor === 'green') {
      // setUpvoteCount(upvoteCount - 1);
      // setDownvoteCount(downvoteCount-1);
      setButtonColor('');
    } else {
      // setUpvoteCount(upvoteCount + 1);
      setButtonColor('green');
    }
  };

  const handleDownvoteClick = () => {
    if (buttonColor === 'red') {
      // setDownvoteCount(downvoteCount - 1);
      // setUpvoteCount(upvoteCount-1);
      setButtonColor('');
    } else {
      // setDownvoteCount(downvoteCount + 1);
      setButtonColor('red');
    }
  };

  return (
    <>
      <div className="container-fluid coloranimation">
        <div className="container py-5  ">
          <div className="row g-3">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              className="col-md-6 col-sm-12"
            >
              <img
                className="img-fluid"
                style={{ height: "25rem", width: "100% !important" }}
                src={currentImg}
                alt="oo"
              />
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  width: "100%",
                }}
                className="container"
              >
                {srcArr.map((src) => {
                  return (
                    <img
                      key={src}
                      className="img-fluid "
                      style={{ height: "4rem", width: "4.5rem" }}
                      src={src}
                      alt="oo"
                      onClick={(e) => {
                        setCurrentImg(e.target.src);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{ border: "2px solid #07393c" }}
                className="container-fluid mx-2  detailbox my-2"
              >
                <p
                  style={{
                    color: "#07393c",
                    textTransform: "uppercase",
                    fontFamily: "serif",
                  }}
                  className="h1 my-2"
                >
                  <b>{title}</b>
                </p>
                <p
                  style={{ textTransform: "uppercase", color: "red" }}
                  className="fs-5 my-1"
                >
                  {tagline}
                </p>
                <div style={{ height: "maxcontent" }} className="w-100 ">
                  <div
                    style={{
                      border: "2px solid #07393c",
                      backgroundColor: "#07393c",
                      color: "white",
                    }}
                    className="d-flex namebox "
                  >
                    <img
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                      }}
                      className="img-fluid mx-2 my-2"
                      src="../images/edu.jpg"
                      alt="oo"
                    />
                    <div style={{ flexDirection: "column" }} className="d-flex">
                      <p
                        style={{ textTransform: "capitalize" }}
                        className="my-1"
                      >
                        <strong>
                          {name},{country}{" "}
                        </strong>
                      </p>
                      <p style={{ color: "o7393c" }}>
                        Team Members:{teamMembers}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ gap: "10%", flexDirection: "column" }}
                    className="container my-1 d-flex "
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "3rem",
                        alignItems: "center",
                      }}
                      className="d-flex  align-item-center"
                    >
                      <p className="fs-4 fw-bold ">FUNDING REQUIRED(In Dollars)</p>
                    </div>
                    <div className="d-flex  justify-content-start">
                      <MyCircularProgress totalCount={funding} />
                    </div>
                  </div>
                  <button
                    className="chat-boxbutton fw-5"
                    style={{
                      height: "3rem",
                      width: "100%",
                      letterSpacing: "2px",
                      border: "2px solid white",
                      backgroundColor: "#07393c",
                      color: "white",
                    }}
                  >
                    CHAT WITH US{" "}
                    <i
                      style={{ color: "white" }}
                      className="fa-brands fa-rocketchat"
                    ></i>{" "}
                  </button>
                </div>
                <div
                  style={{ gap: "1rem", width: "100%" }}
                  className=" handlebox container d-flex justify-content-between  my-3"
                >
                  <div style={{ gap: "2rem" }} className="d-flex">
                  <button
        className={`${buttonColor === 'red' ? 'bg-grey' : ''} upvotebutt`}
        onClick={handleUpvoteClick}
      >
        <i className="fa-solid fa-up-long" disabled={buttonColor === 'red'}>
          Vote <span>{upvote}</span>
        </i>
      </button>
                     <button
        className={`${buttonColor === 'green' ? 'bg-grey' : ''} downvotebutt`}
        onClick={handleDownvoteClick}
      >
        <i className="fa-solid fa-down-long" disabled={buttonColor === 'green'}>
          Vote <span></span>
        </i>
      </button>
                  </div>

                  <div className="socials d-flex gap-2 justify-content-center">
                    <a href="/">
                      <i
                        style={{ color: "blue" }}
                        className="fa-brands fa-facebook"
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        style={{ color: "red" }}
                        className="fa-brands fa-instagram"
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        style={{ color: " rgba(204, 204, 0, 1)" }}
                        className="fa-brands fa-snapchat"
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        style={{ color: "blue" }}
                        className="fa-brands fa-twitter"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Details;
