import H2WithToolTip from "./h2withtooltip.jsx";
import SideBar from "./sidebar.jsx";

const PosterInfo = () => {
  return (
    <>
      <SideBar />
      <div className="bg-white rounded container my-5">
        <div className="inner px-5 p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const posterInfo = {
                legalFirstName: formData.get("legalfirstname") ?? "",
                legalLastName: formData.get("legallastname") ?? "",
                profession: formData.get("profession") ?? "",
                phnNum: formData.get("phnNum") ?? "",
                country: formData.get("country") ?? "",
                stAddress: formData.get("staddress") ?? "",
                professionalEmail: formData.get("professionalEmail") ?? "",
                organizationType: formData.get("organizationtype") ?? "",
              };
              console.log(posterInfo);
            }}
          >
            <div className="my-4 field">
              <div>
                <label htmlFor="legalfirstname">
                  <H2WithToolTip heading={"Legal First Name"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="legalfirstname"
                    id="legalfirstname"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="legallastname">
                  <H2WithToolTip heading={"Legal Last Name"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="legallastname"
                    id="legallastname"
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="profession">
                  <H2WithToolTip heading={"Profession"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="profession"
                    id="profession"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="phnNum">
                  <H2WithToolTip heading={"Phone Number"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="phnNum"
                    id="phnNum"
                  />
                </label>
              </div>
            </div>

            <div className="my-4 field">
              <div>
                <label htmlFor="country">
                  <H2WithToolTip heading={"Country"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="country"
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="staddress">
                  <H2WithToolTip heading={"Street Address"} />
                  <input
                    required
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="staddress"
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="my-4 field">
              <div>
                <label htmlFor="professionalEmail">
                  <H2WithToolTip heading={"Email Address"} />
                  <input
                    required
                    type="email"
                    placeholder="Type here..."
                    className="ideainp"
                    name="professionalEmail"
                    id=""
                  />
                </label>
              </div>
              <div>
                <H2WithToolTip heading={"Organization Type"} />
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input bg-midnight-green me-2"
                    type="radio"
                    name="organizationtype"
                    id="orgtype1"
                    value={"individual"}
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="organizationtype"
                  >
                    Individual
                  </label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input bg-midnight-green me-2"
                    type="radio"
                    name="organizationtype"
                    value={"Group"}
                    id="orgtype2"
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="organizationtype"
                  >
                    Group
                  </label>
                </div>
              </div>
            </div>
            <hr className="mt-10  " />
            <div className="d-flex justify-content-center">
              <button
                className="formbtn bg-midnight-green"
                style={{ verticalAlign: "middle" }}
              >
                <span>Save & Continue </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PosterInfo;
