import { Link, useParams } from "react-router-dom";
import { checkCookieExists, getCookie } from "../../helpers/cookies";

const UserprofileNav = () => {
  const { userid } = useParams();
  let thisuserid;

  if (checkCookieExists("logindata")) {
    thisuserid = JSON.parse(getCookie("logindata"))?.userId;
  }
  console.log(userid, thisuserid);
  return (
    <>
      <div className="container my-3">
        <nav
          style={{ backgroundColor: "#2c666e", color: "white" }}
          className="navbar navbar-expand-lg "
        >
          <div className="container-fluid">
            <div className="navbar-nav detailnav">
              <h2>User Profile</h2>
              {checkCookieExists("logindata") && thisuserid == userid && (
                <>
                  <Link
                    to={`/profile/${JSON.parse(getCookie("logindata")).userId}`}
                  >
                    <button
                      style={{ color: "white" }}
                      className="nav-link"
                      aria-current="page"
                    >
                      <i className="fa-regular fa-eye mx-2"></i>
                      View Profile
                    </button>
                  </Link>
                  <Link to={`/posterinfo/${JSON.parse(getCookie("logindata")).userId}`}>
                    <button style={{ color: "white" }} className="nav-link">
                      <i className="fa-solid fa-pen-to-square mx-2"></i>
                      Edit Profile
                    </button>
                  </Link>
                  <Link to={`/ideasection/${JSON.parse(getCookie("logindata")).userId}`}>
                    <button style={{ color: "white" }} className="nav-link">
                      <i className="fa-solid fa-paper mx-2"></i>
                     Your Ideas
                    </button>
                  </Link>
                  <Link to={`/security/${JSON.parse(getCookie("logindata")).userId}`}>
                    <button style={{ color: "white" }} className="nav-link">
                      <i className="fa-solid fa-lock mx-2"></i>
                      Security
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default UserprofileNav;
