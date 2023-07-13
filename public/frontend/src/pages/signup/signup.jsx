
import React, { useState } from 'react';
import './signup.css';

function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div className="parent_">
        <div className="phone-container_">
          <img className="phone-image_" src="../../src/images/phone.png" alt="Phone Image" />
          <video className="video-overlay_" autoPlay muted loop>
            <source src="../../src/images/last_V7.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="signup_">
          <img src="../../src/images/logoBULB.png" className="logo_" alt="logo image" />
          <h1 className="head_">Sign Up</h1>
          <form className="cred">
            <label className='signuplabel_z' htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" className='namesignup_z' value={fullName} onChange={(e) => setFullName(e.target.value)} required />

            <label className='signuplabel_z' htmlFor="email">Email Address:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className='signuplabel_z' htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <label className='signuplabel_z' htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <input type="submit" className="submitsignup_z" value="Create Account" onClick={handleSubmit} />
          </form>
          <div className="login-link">
            Already have an account? <a href="../../components/pages/signin/signin.jsx">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
