import { Link } from "react-router-dom";
import { createAccount } from "./createAcc";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { getCookie, setCookie } from "../../helpers/cookies";
import { useToasts } from "react-toast-notifications";
import UserContext from "../../context/context";
import { useContext } from "react";

function SignUpForm() {
    // eslint-disable-next-line no-unused-vars
    const [_, loggedinUser] = useContext(UserContext);
    const { addToast } = useToasts();

    const navigate = useNavigate();

    const createAcc = async (obj) => {
        try {
            const res = await createAccount(obj);
            console.log("res", res)
            if (res.message === "successful") {
                localStorage.setItem("userData", JSON.stringify({
                    token: res.token ?? null,
                    userName: res.user.userName,
                    userId: res.user.userId,
                    status: "loggedin",
                    email: res?.user?.email,
                    name: res?.user?.name,
                    lastName: res?.user?.lastName,
                }));

                addToast("Account Created Successfully!", {
                    appearance: "success",
                    autoDismiss: true,
                });

                navigate("/");
            } else if (res.message == "Username or Email already taken") {
                addToast(res?.message, {
                    appearance: "warning",
                    autoDismiss: true,
                });

            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

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
                <div className="signup_ shadow-lg">
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
                            for (let key in obj) {
                                if (!obj[key]) {
                                    alert("Please fill in all fields");
                                    return;
                                }
                            }
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
                            User Name:
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
