import React from "react";
import "./signin.css";
import phoneimg from "../images/phone.png";
import video from "../images/last_V7.mp4";
import logo from "../images/logoBULB.png";
document.body.style.backgroundColor = "white";
const SignIn = () => {
  return (
    <div className="parent_z">
      <div className="phone-container_z">
        <img className="phone-image_z" src={phoneimg} alt="Phone Imag" />
        <video className="video-overlay_z" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="login_z">
        <img src={logo} alt="lol" className="logo_z" />
        <h1 className="head_z">Idea Vault</h1>
        <input
          className="cred_z"
          type="text"
          placeholder="Phone number, name, email"
        />{" "}
        <br /> <br />
        <input className="cred_z" type="password" placeholder="Password" />{" "}
        <br /> <br />
        <button className="btn_z">Log in</button> <br /> <br />
        <span className="or_z"> OR </span>
        <br /> <br />
        <div className="google_z">
          <div className="lg_z">
            <img className="formpic_z" alt="..." src="../images/google.png" />
          </div>
          <div className="link_z">
            <a href="." target="_blank">
              {" "}
              <h2 className="logwithgoogle_z">Log in with Google </h2>
            </a>
          </div>
        </div>{" "}
        <br />
        <a href="." id="forgot_z">
          Forgot Password?
        </a>{" "}
        <br /> <br />
        <div className="signup_">
          Don&apos;t have an account?{" "}
          <a href="." target="_blank" className="signup1_">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
