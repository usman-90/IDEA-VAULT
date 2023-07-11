import H2WithToolTip from "./h2withtooltip.jsx";
import SideBar from "./sidebar.jsx";

const Settings = () => {
  return (
    <>
      <SideBar />{" "}
      <div className="bg-white container my-5 rounded">
        <div className="inner p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const extraInfo = {
                facebookLink: formData.get("facebooklink") ?? "",
                twitterLink: formData.get("twitterlink") ?? "",
                instaLink: formData.get("instalink") ?? "",
                linkedinLink: formData.get("linkedinlink") ?? "",
                visiblity: formData.get("visiblity") ?? "off",
              };
              console.log(extraInfo);
            }}
          >
            <div className="my-4 field">
              <div>
                <label htmlFor="facebooklink">
                  <H2WithToolTip heading={"Facebook"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="facebooklink"
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="twitterlink">
                  <H2WithToolTip heading={"Twitter"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="twitterlink"
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="my-4 field">
              <div>
                <label htmlFor="linkedinlink">
                  <H2WithToolTip heading={"Linked In"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="linkedinlink"
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="instalink">
                  <H2WithToolTip heading={"Instagram"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="instalink"
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="px-5 mx-2">
              <label
                htmlFor="visiblity"
                className="d-flex checkbox-label align-items-center"
              >
                <H2WithToolTip
                  heading={"Selective Idea Visibility"}
                  tooltip={`Selective idea Visibility allows you to hide description of your idea and make them visible to chosen recipients. With Selective Idea Visibility, you have the flexibility to customize who can access description of your idea, ensuring privacy and targeted sharing.`}
                />
                <input
                  className="ms-4 check_box_u styled-checkbox"
                  type="checkbox"
                  name="visiblity"
                  id="visiblity"
                />
              </label>
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

export default Settings;
