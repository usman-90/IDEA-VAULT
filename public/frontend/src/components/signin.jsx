import React from 'react';
import '../components/signin.css';
import video from "../images/last_V7.mp4";
document.body.style.backgroundColor = "white";
const SignIn= () => {
    return(
        <div className="parent_z">
            <div class="phone-container_z">
                <img className="phone-image_z" src="../images/phone.png" alt="Phone Image"/>
                <video className="video-overlay_z" autoplay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className="login_z">
                <img src="../images/logo.png" className="logo_z"/>
                <h1 className="head_z">Idea Vault</h1> 
                <input className="cred_z" type="text" placeholder="Phone number, name, email"/> <br/> <br/>
                <input className="cred_z" type="password"  placeholder="Password"/> <br/> <br/>
                
                <button className="btn_z">Log in</button> <br/> <br/>
                
                <span className="or_z"> OR  </span>
                <br/> <br/>
                <div className="google_z">
                    <div className="lg_z">
                        <img  className="formpic_z" src="../images/google.png"/>
                    </div>
                    <div className="link_z">
                        <a href="#" target="_blank"> <h2 className="logwithgoogle_z">Log in with Google </h2></a>
                    </div>
                    
                </div> <br/> 
                <a href="#" id="forgot_z">Forgot Password?</a> <br/> <br/> 
                <div className="signup_">
                    Don't have an account? <a href="#" target="_blank" class="signup1_">Sign Up</a>
                </div>


            </div>

        </div>
    )
};
export default SignIn;
