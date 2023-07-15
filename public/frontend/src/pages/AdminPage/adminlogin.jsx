import React, { useState } from 'react';
import './adminlogin.css';
import { Link } from 'react-router-dom';

document.body.style.backgroundColor = "white";

const AdminLogIn = () => {
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
    <div className="adminparent_z">
      <div className="phone-container_zz">
        <img className="phone-image_zz" src="../../src/images/lastadmin.png" alt="Phone Image" />
        
      </div>
      <div className="login_zz">
        <img src="../../src/images/logoBULB.png" className="logo_z" alt="logo image" />
        <h1 className="head_zz">Admin Log In</h1> <br/>
        <form className='signinform_zz'>
          <input
            className="cred_zz"
            type="text"
            placeholder="Full Name or Email"
            value={fullNameOrEmail}
            onChange={(e) => setFullNameOrEmail(e.target.value)}
            required
          />
          <br /> 
          <input
            className="cred_zz"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /> 
          <button className="btn_zz" type="submit" onClick={handleSubmit}>Log in</button>
        </form>
        <span className="or_zz">OR</span>
        <br /> <br />
        <a href="#" id="forgot_zz">Forgot Password?</a>
        <br /> <br />
        <div className="signup_zz">
          Don't have an account?<Link to="/signupadmin"> Sign Up</Link>

        </div>
      </div>
    </div>
  );
};

export default AdminLogIn;
