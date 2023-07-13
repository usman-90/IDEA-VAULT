import React, { useState } from 'react';
import './signin.css';
import video from "../../images/last_V7.mp4"; 

document.body.style.backgroundColor = "white";

const SignIn = () => {
  const [fullNameOrEmail, setFullNameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullNameOrEmail && password) {
        // Form validation passes, perform the desired action (e.g., API request, authentication, etc.)
        console.log('Full Name or Email:', fullNameOrEmail);
        console.log('Password:', password);
        
        // Reset the form fields
        setFullNameOrEmail('');
        setPassword('');
      } else {
        console.log('Please fill in all fields');
      }
   
  };

  return (
    <div className="parent_z">
      <div className="phone-container_z">
        <img className="phone-image_z" src="../../src/images/phone.png" alt="Phone Image" />
        <video className="video-overlay_z" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="login_z">
        <img src="../../src/images/logoBULB.png" className="logo_z" alt="logo image" />
        <h1 className="head_z">Idea Vault</h1>
        <form className='signinform_z'>
          <input
            className="cred_z"
            type="text"
            placeholder="Full Name or Email"
            value={fullNameOrEmail}
            onChange={(e) => setFullNameOrEmail(e.target.value)}
            required
          />
          <br /> 
          <input
            className="cred_z"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /> 
          <button className="btn_z" type="submit" onClick={handleSubmit}>Log in</button>
        </form>
        <span className="or_z">OR</span>
        <br /> <br />
        <div className="google_z">
          <div className="lg_z">
            <img className="formpic_z" src="../../src/images/google.png" alt="Google logo" />
          </div>
          <div className="link_z">
            <a href="#" target="_blank">
              <h2 className="logwithgoogle_z">Log in with Google</h2>
            </a>
          </div>
        </div>
        <br />
        <a href="#" id="forgot_z">Forgot Password?</a>
        <br /> <br />
        <div className="signup_z">
          Don't have an account? <a href="../../components/pages/signup/signup.jsx" className="signup1_">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
