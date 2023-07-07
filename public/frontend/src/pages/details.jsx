/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import MyCircularProgress from "../components/progreebar";
import DetailNav from "./detailNav";

const Details = ({ title, tagline,name,country,funding,teamMembers}) => {
  const srcArr = [
    "../images/art.jpg",
    "../images/business.jpg",
    "../images/business2.jpg",
    "../images/edu.jpg",
    "../images/tech.jpg",
    "../images/travel.jpg"
  ];
  const [currentImg, setCurrentImg] = useState(srcArr[0]);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);

  const handleUpvoteClick = () => {
    if (!downvoteClicked) {
      setUpvoteClicked(true);
    }
  };

  const handleDownvoteClick = () => {
    if (!upvoteClicked) {
      setDownvoteClicked(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
        <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}className="col-md-6 col-sm-12">
            <img className="img-fluid" style={{height:"25rem",width:"100% !important"}} src={currentImg} alt="oo" />
            <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap",width:"100%"}} className="container">
                {
                    srcArr.map((src)=> {
                        return <img key={src} className="img-fluid " style={{height:"4rem",width:"4.5rem"}} src={src} alt="oo" onClick={(e)=>{setCurrentImg(e.target.src)}}/>

                    })

                 }
            </div>
            
        </div>
          <div className="col-md-6">
            <div className="container mx-2  ">
              <p
                style={{ color: "green", textTransform: "uppercase" }}
                className="h1 my-3"
              >
                {title}
              </p>
              <p className="fs-3 my-1">{tagline}</p>
              <div style={{height:"12rem",borderRadius:".5rem"}}className="container-fluid border border-success my-2">
                    <p style={{textTransform:"capitalize"}}className=""><strong>{name},{country} </strong></p>
                    <p>Funding Required = {funding}</p>

                    <p>TEAM MEMBERS={teamMembers}</p>
                    <button className="chat-boxbutton fw-5" style={{height:"3rem",width:"9rem",letterSpacing:"2px",border:"none",backgroundColor:"rgba(0, 128, 0, 1)",color:"black"}}>CHATBOX <i style={{color:"white"}} className="fa-brands fa-rocketchat"></i> </button>


              </div>
              <div style={{flexDirection:"column",gap:"2rem"}} className="d-flex justify-content-between ">
                <div className="d-flex gap-3">
                  <button
                    style={{
                      backgroundColor: upvoteClicked ? "#00ff00" : "transparent",
                      color: upvoteClicked ? "black" : "black",
                      border:"2px solid #00ff00",
                      padding: "10px 20px",
                      transition: "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
                      boxShadow: upvoteClicked ? "0 0 5px #00ff00" : "none",
                      height:"4rem"
                    }}
                    onClick={handleUpvoteClick}
                    disabled={downvoteClicked}
                  >
                    UPVOTE <i style={{color:"green"}} className="fa-solid fa-thumbs-up"></i>
                  </button>
                  <button
                    style={{
                      backgroundColor: downvoteClicked ? "red" : "transparent",
                      color: downvoteClicked ? "black" : "black",
                      border:"2px solid red",
                      padding: "10px 20px",
                      transition: "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
                      boxShadow: downvoteClicked ? "0 0 5px red" : "none",
                      height:"4rem"
                    }}
                    onClick={handleDownvoteClick}
                    disabled={upvoteClicked}
                  >
                    DOWNVOTE <i style={{color:"brown"}} className="fa-sharp fa-solid fa-thumbs-down"></i>
                  </button>
                </div>
                <div className="socials d-flex gap-2">
                  <i style={{fontSize:"1.5rem",color:"blue"}} className="fa-brands fa-facebook"></i>
                  <i style={{fontSize:"1.5rem",color:"red"}} className="fa-brands fa-instagram"></i>
                  <i style={{fontSize:"1.5rem",color:"blue"}} className="fa-brands fa-linkedin"></i>
                  <i style={{fontSize:"1.5rem",color:"blue"}} className="fa-brands fa-twitter"></i>
                </div>
              </div>
              <div style={{width:"100%",justifyContent:"center",flexDirection:"column"}} className="d-flex my-3">
                    <p className="fs-4 fw-bold ">FUNDING REQUIRED</p>
                    <MyCircularProgress totalCount={funding} />

              </div>
              
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      <DetailNav/>
      
    </>
  );
};

export default Details;
