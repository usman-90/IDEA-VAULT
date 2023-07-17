import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCookie } from "../../helpers/cookies";
import { checkCookieExists } from "../../helpers/cookies";

const Userprofiledetail = ({ profiledata }) => {
  console.log(profiledata);
  const { userid } = useParams();
  let thisuserid;

  if (checkCookieExists("logindata")) {
    thisuserid = JSON.parse(getCookie("logindata"))?.userId;
  }
  console.log(userid, thisuserid);

  return (
    <div style={{ backgroundColor: "#daeaf0" }} className="container py-5 px-5">
      <div className="row">
        <div className="col-md-6">
          <div>
            <img
              style={{
                height: "15rem",
                width: "75%",
                border: "2px solid black",
              }}
              src={
                profiledata.path ??
                "https://img.freepik.com/free-icon/user_318-644324.jpg?t=st=1689549557~exp=1689550157~hmac=3dcc702cc64e905cc6c07b5b0b68413060bea215f80976654b78068b3ebc5704"
              }
              alt=""
            />
            <h3 className="my-3">BIO</h3>
            <p style={{ height: "maxcontent" }} className="my-1">
              {profiledata.bio ?? ""}
            </p>
          </div>
        </div>
        <div style={{ border: "2px solid #07939c" }} className="col-md-6 py-2">
          <div className="mx-5 py-3">
            <div className="d-flex  justify-content-between">
              <h2 className="fs-2 ">About Me</h2>

              {userid != thisuserid ? (
                <Link to={`/assignvisiblity/${userid}`}>
                  <button className="btn btn-success bg-caribbean-current">
                    Assign Visiblity
                  </button>
                </Link>
              ) : null}
            </div>
            <div className="d-flex   my-3">
              <img
                style={{ height: "4rem", width: "4rem", borderRadius: "4rem" }}
                src={
                  profiledata.path ??
                  "https://img.freepik.com/free-icon/user_318-644324.jpg?t=st=1689549557~exp=1689550157~hmac=3dcc702cc64e905cc6c07b5b0b68413060bea215f80976654b78068b3ebc5704"
                }
                alt="ooo"
              />
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="mx-3"
              >
                <h5 className="fs-5">
                  {profiledata.name} {profiledata.lastname}
                </h5>
                <h5 className="fs-5">{profiledata.country ?? ""}</h5>
              </div>
            </div>
            <h2>Socials</h2>
            <div>
              <ul style={{ textDecoration: "none" }}>
                <li style={{ listStyleType: "none" }}>
                  <a href="/" style={{ color: "black" }}>
                    <i
                      style={{ color: "blue", marginRight: "1rem" }}
                      className="fa-brands fa-facebook"
                    ></i>
                    {profiledata.facebooklink ?? ""}
                  </a>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <a href="/" style={{ color: "black" }}>
                    <i
                      style={{ color: "red", marginRight: "1rem" }}
                      className="fa-brands fa-instagram"
                    ></i>
                    {profiledata.instalink ?? ""}
                  </a>
                </li>
                <li style={{ listStyleType: "none" }}>
                  {" "}
                  <a href="/" style={{ color: "black" }}>
                    <i
                      style={{ color: "blue", marginRight: "1rem" }}
                      className="fa-brands fa-twitter"
                    ></i>
                    {profiledata.twitterlink}
                  </a>
                </li>
                <li style={{ listStyleType: "none" }}>
                  {" "}
                  <a href="/" style={{ color: "black" }}>
                    <i
                      style={{ color: "blue", marginRight: "1rem" }}
                      className="fa-brands fa-linkedin mr-2"
                    ></i>
                    {profiledata.linkdinlink}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userprofiledetail;
