import NavExpansion from "./navExpansion.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./nav.css";

const MyNavbar = () => {
  const [isExpanded, setisExpanded] = useState(false);
  const [isItHome, setisItHome] = useState(null);
  const location = useLocation();
  const handleExpansion = () => {
    setisExpanded(!isExpanded);
  };
  const handleNavColor = () => {
    if (location.pathname == "/") {
      setisItHome(true);
    } else {
      setisItHome(false);
    }
  };

  useEffect(() => {
    handleNavColor();
    console.log(isItHome);
    console.log(location.path);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`${
          isItHome
            ? "position-absolute w-100 bg-transparent"
            : "position-relative bg-info"
        } z-3 px-5 py-3 `}
      >
        <div className="nav_main_u nav_u">
          <div className="logo d-flex justify-content-center align-items-center">
            <h1>Idea Vault</h1>
          </div>
          <div className="toggler d-flex justify-content-center align-items-center">
            <button onClick={handleExpansion} className="text-light">
              <div className={`${isExpanded ? "open" : ""}`} id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <NavExpansion
          width={`${isExpanded ? "" : "w-0"}`}
          width100={`${isExpanded ? "w-100" : ""}`}
          handleExpansion={handleExpansion}
        />
      </div>
    </>
  );
};

export default MyNavbar;
