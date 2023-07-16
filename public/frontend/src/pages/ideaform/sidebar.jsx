import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const btnRef = useRef(null);
  const stopAnimation = () => {
    setTimeout(() => {
      btnRef.current.className = "fa-solid fa-chevron-right";
    }, 6000);
  };
  useEffect(() => {
    stopAnimation();
  }, []);
  return (
    <div className="sidebar_u">
      <button
        className="btn ideabtn_u btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i ref={btnRef} className="fa-solid fa-chevron-right fa-bounce "></i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h1
            className="offcanvas-title f-caprasimo"
            id="offcanvasWithBothOptionsLabel"
          >
            Idea Vault
            <h5>Your Idea Details</h5>
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="menuopt_u">
            <Link to={"/basicinfo"}>Basic Information</Link>
          </div>
          <div className="menuopt_u">
            <Link to={"/contentinfo"}>Content</Link>
          </div>
          <div className="menuopt_u">
            <Link to={"/settings"}>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
