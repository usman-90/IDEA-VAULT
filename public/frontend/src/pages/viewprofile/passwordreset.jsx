import './userprofile.css'
import UserprofileNav from "./userProfileNav";

const PasswordReset = () => {
  return (
    <div>
      <UserprofileNav />
      <div className="bg-white rounded container my-5">
        <div className="inner px-5 p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
           
            }}
          >
            <div className="mx-auto px-5 pb-5 pt-4 shadow form_password bg-light">
                <h2 className="text-mustard">Reset Password</h2>
                <div className="my-3">
                    <p className="p-0 m-0">New Password</p>
                    <input className="password_input" type="password" />
                </div>
                <div className="my-3">
                    <p className="p-0 m-0">Confirm Password</p>
                    <input className="password_input" type="password" />
                </div>
                <div className="my-3">
                    <p className="p-0 m-0">Email</p>
                    <input className="password_input" type="text" />
                </div><div className="my-3">
                    <p className="p-0 m-0">OTP</p>
                    <input className="password_input" type="text" />
                </div>
            </div>

            <hr className="mt-5  " />
            <div className="d-flex justify-content-center">
              <button
                className="formbtn bg-midnight-green"
                style={{ verticalAlign: "middle" }}
              >
                <span>Save </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
