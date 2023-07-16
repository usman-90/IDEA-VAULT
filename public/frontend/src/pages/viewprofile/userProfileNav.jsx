import { Link } from "react-router-dom";

const UserprofileNav = () => {
  return (
    <>
      <div className="container my-3">
        <nav
          style={{ backgroundColor: "#2c666e", color: "white" }}
          className="navbar navbar-expand-lg "
        >
          <div className="container-fluid">
            <div className="navbar-nav detailnav">
                <Link to={'/profile'}>
              <button
                style={{ color: "white" }}
                className="nav-link"
                aria-current="page"
                >
                <i className="fa-regular fa-eye mx-2"></i>
                View Profile
              </button>
                  </Link>
              <Link to={"/posterinfo"}>
                <button style={{ color: "white" }} className="nav-link">
                  <i className="fa-solid fa-pen-to-square mx-2"></i>
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default UserprofileNav;
