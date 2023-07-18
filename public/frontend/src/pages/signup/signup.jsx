import { Link } from "react-router-dom";
import { createAccount } from "./createAcc";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { getCookie, setCookie } from "../../helpers/cookies";
import UserContext from "../../context/context";
import { useContext } from "react";

function SignUpForm() {
  // eslint-disable-next-line no-unused-vars
  const [_, loggedinUser] = useContext(UserContext);

  const navigate = useNavigate();

  const createAcc = async (obj) => {
    const res = await createAccount(obj);
    if (res.message == "successful") {
      setCookie("logindata", {
        token: res.token,
        userName: res.rows[0].username,
        userId: res.rows[0].userid,
        status: "loggedin",
      });
      loggedinUser({
        token: res.token ?? null,
        userName: res.rows[0].username ?? null,
        userId: res.rows[0].userid ?? null,
        status: "loggedin" ,
      });
      console.log("cookies",getCookie("logindata"));
      navigate("/");
    }
    else if(res.message == "username already taken"){
      alert('lol')
    }
  };

  return (
    <div className="container">
      <div className="parent_">
        <div className="phone-container_">
          <img
            className="phone-image_"
            src="../../src/images/phone.png"
            alt="Phone "
          />
          <video className="video-overlay_" autoPlay muted loop>
            <source src="../../src/images/last_V7.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="signup_">
          <img
            src="../../src/images/logoBULB.png"
            className="logo_"
            alt="logo "
          />
          <h1 className="head_">Sign Up</h1>
          <form
            className="cred"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const obj = {
                name: formData.get("name"),
                lastName: formData.get("lastName"),
                userName: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
              };
              createAcc(obj);
            }}
          >
            <label className="signuplabel_z" htmlFor="name">
              Full Name:
              <input
                type="text"
                id="fullname"
                name="name"
                className="namesignup_z"
                required
              />
            </label>

            <label className="signuplabel_z" htmlFor="lastName">
              Last Name:
              <input type="text" id="password" name="lastName" required />
            </label>
            <label className="signuplabel_z" htmlFor="username">
              <div>User Name:</div>
              <input type="username" id="username" name="username" required />
            </label>
            <label className="signuplabel_z" htmlFor="email">
              Email Address:
              <input type="email" id="email" required name="email" />
            </label>

            <label className="signuplabel_z" htmlFor="password">
              <div>Password:</div>
              <input
                type="password"
                id="confirm-password"
                name="password"
                required
              />
            </label>

            <input
              type="submit"
              className="submitsignup_z"
              value="Create Account"
            />
          </form>
          <div className="login-link">
            Already have an account? <Link to={"/signin"}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
