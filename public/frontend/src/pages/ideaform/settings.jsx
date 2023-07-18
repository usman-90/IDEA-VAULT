import { useEffect, useState } from "react";
import H2WithToolTip from "./h2withtooltip.jsx";
import SideBar from "./sidebar.jsx";
import {
  checkCookieExists,
  destroyCookie,
  getCookie,
  setCookie,
} from "../../helpers/cookies.js";
import { postIdea } from "../../functions/postidea.js";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [setting, setSetting] = useState({
    facebookLink: "",
    instaLink: "",
    linkedinLink: "",
    twitterLink: "",
    visiblity: false,
  });
  useEffect(() => {
    let data;
    if (checkCookieExists("settings")) {
      data = JSON.parse(getCookie("settings"));
    } else {
      data = {
        facebookLink: "",
        instaLink: "",
        linkedinLink: "",
        twitterLink: "",
        visiblity: false,
      };
    }

    setSetting(data);
  }, []);
  const navigate = useNavigate("/");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSetting({ ...setting, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    setSetting({ ...setting, [name]: checked });
    console.log(setting);
  };
  return (
    <>
      <SideBar />{" "}
      <div className="bg-white container my-5 rounded">
        <div className="inner p-5">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(setting);
              setCookie("settings", JSON.stringify(setting));
              let ideaData = {};
              console.log(checkCookieExists("forminfo"));
              console.log(checkCookieExists("contentinfo"));
              console.log(checkCookieExists("settings"));

              if (
                checkCookieExists("forminfo") &&
                checkCookieExists("contentinfo") &&
                checkCookieExists("settings")
              ) {
                ideaData = {
                  ...ideaData,
                  basicinfo: JSON.parse(getCookie("forminfo")),
                };
                ideaData = {
                  ...ideaData,
                  contentinfo: JSON.parse(getCookie("contentinfo")),
                };
                ideaData = {
                  ...ideaData,
                  setting: JSON.parse(getCookie("settings")),
                };
              }
              console.log(ideaData);

              const res = await postIdea(ideaData);
              if (res.message == "ok") {
                console.log("ideaposted hehe");
              }
              destroyCookie("forminfo");
              destroyCookie("contentinfo");
              destroyCookie("settings");

              navigate("/");
            }}
          >
            <div className="my-4 field">
              <div>
                <label htmlFor="facebookLink">
                  <H2WithToolTip heading={"Facebook"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="facebookLink"
                    value={setting.facebookLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="twitterLink">
                  <H2WithToolTip heading={"Twitter"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="twitterLink"
                    value={setting.twitterLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="my-4 field">
              <div>
                <label htmlFor="linkedinLink">
                  <H2WithToolTip heading={"Linked In"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    value={setting.linkedinLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="linkedinLink"
                    id=""
                  />
                </label>
              </div>
              <div>
                <label htmlFor="instaLink">
                  <H2WithToolTip heading={"Instagram"} />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="ideainp"
                    name="instaLink"
                    value={setting.instaLink}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                  checked={setting.visiblity}
                  onChange={(e) => {
                    handleCheckbox(e);
                  }}
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
                <span>Publish </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
