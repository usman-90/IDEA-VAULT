import React, { useContext, useState } from "react";
import "./signin.css";
import video from "../../images/last_V7.mp4";
import { signin } from "../../functions/signin";
import { getCookie, setCookie } from "../../helpers/cookies";
import UserContext from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
document.body.style.backgroundColor = "white";

const SignIn = () => {
  const [fullNameOrEmail, setFullNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setusercontext] = useContext(UserContext);
  const { addToast } = useToasts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullNameOrEmail && password) {
      try {
        const response= await signin({
          userName: fullNameOrEmail,
          password: password,
        });
        console.log("response", response.data)
       

        const res = response.data;
        if (res.message === "User not found") {
          alert("User not found");
        } else if (res.message === "wrong password") {
          alert("Entered Password is incorrect");
        } else if (res.message === "ok") {
          addToast("Logged In Successfully! ", {
            appearance: "success",
            autoDismiss: true,
          });
          // Save data to local storage
          localStorage.setItem("logindata", JSON.stringify({
            token: res.token ?? null,
            userName: res.user.userName,
            userId: res.user.userId,
            status: "loggedin",
          }));
          
          
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setFullNameOrEmail("");
      setPassword("");
    } else {
      console.log("Please fill in all fields");
    }
  };
  return (
    <div className="parent_z">
      <div className="phone-container_z">
        <img
          className="phone-image_z"
          src="../../src/images/phone.png"
          alt="Phone"
        />
        <video className="video-overlay_z" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="login_z">
        <img
          src="../../src/images/logoBULB.png"
          className="logo_z"
          alt="logo"
        />
        <h1 className="head_z">Idea Vault</h1>
        <form className="signinform_z">
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
          <button className="btn_z" type="submit" onClick={handleSubmit}>
            Log in
          </button>
        </form>
        <span className="or_z">OR</span>
        <br /> <br />
        <div className="google_z">
          <div className="lg_z">
            <img
              className="formpic_z"
              src="../../src/images/google.png"
              alt="Google logo"
            />
          </div>
          <div className="link_z">
            <a href="." target="_blank">
              <h2 className="logwithgoogle_z">Log in with Google</h2>
            </a>
          </div>
        </div>
        <br />
        <a href="." id="forgot_z">
          Forgot Password?
        </a>
        <br /> <br />
        <div className="signup_z">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="signup1_">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
