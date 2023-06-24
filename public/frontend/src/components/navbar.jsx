import NavExpansion from "./navExpansion.jsx";
import { useState } from "react";

const MyNavbar = () => {
  const [isExpanded, setisExpanded] = useState(false);

  const handleExpansion = () => {
    setisExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <>
      <div className="z-3 px-5 py-3" style={{ position: "relative" }}>
        <div className="nav_main_u nav_u">
          <div className="logo d-flex justify-content-center align-items-center">
            <h1 >Idea Vault</h1>
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
        />
      </div>
    </>
  );
};

export default MyNavbar;
