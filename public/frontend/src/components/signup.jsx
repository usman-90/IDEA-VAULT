import React from "react";
import phonImg from "../images/phone.png";
import signUpVideo from "../images/last_V7.mp4";
import logo from "../images/logoBULB.png"
import "./signup.css";

function SignUpForm() {
  return (
    <div className="container">
      <div className="parent_">
        <div className="phone-container_">
          <img className="phone-image_" src={phonImg} alt="Phone Im" />
          <video className="video-overlay_" autoPlay muted loop>
            <source src={signUpVideo} type="video/mp4" />
          </video>
        </div>
        <div className="signup_">
          <img src={logo} className="logo_" alt="logo im" />
          <h1 className="head_">Sign Up</h1>
          <form className="cred">
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              className="namesignup_z"
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required />

            <input type="submit" value="Create Account" />
          </form>
          <div className="login-link">
            Already have an account? <a href=".">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
